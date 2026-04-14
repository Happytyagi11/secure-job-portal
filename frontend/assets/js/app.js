const API = "http://localhost:4000";

document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const email = email.value;
  const password = password.value;

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  alert("Logged in");
});

document.getElementById("applyForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("fullName", fullName.value);
  formData.append("position", position.value);
  formData.append("resume", resume.files[0]);

  const res = await fetch(`${API}/applications`, {
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    body: formData
  });

  alert("Application submitted");
});

async function searchApplicants() {
  const q = document.getElementById("search").value;

  const res = await fetch(`${API}/admin/search?q=${q}`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
  });

  const data = await res.json();
  document.getElementById("results").innerHTML = JSON.stringify(data, null, 2);
}
