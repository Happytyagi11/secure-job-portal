const API = "https://happytagi11-4000.app.github.dev";


document.getElementById("loginForm")?.addEventListener("submit", async e => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

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

    const fullName = document.getElementById("fullName").value;
    const position = document.getElementById("position").value;
    const resume = document.getElementById("resume").files[0];

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("position", position);
    formData.append("resume", resume);

    const res = await fetch(`${API}/apply`, {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: formData
    });

    const data = await res.json();
    alert("Application submitted");
});

async function searchApplicants() {
    const query = document.getElementById("search").value;

    const res = await fetch(`${API}/admin/search?query=${query}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });

    const data = await res.json();
    document.getElementById("results").innerText = JSON.stringify(data, null, 2);
}
