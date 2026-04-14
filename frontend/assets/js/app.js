const API = "http://localhost:4000";

/* ---------------------- LOGIN ---------------------- */
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

    if (!res.ok) {
        alert(data.message || "Login failed");
        return;
    }

    localStorage.setItem("token", data.token);
    alert("Logged in successfully");
    window.location.href = "apply.html";
});

/* ---------------------- APPLY FORM ---------------------- */
document.getElementById("applyForm")?.addEventListener("submit", async e => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const position = document.getElementById("position").value;
    const resume = document.getElementById("resume").files[0];

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("position", position);
    formData.append("resume", resume);

    const res = await fetch(`${API}/applications/submit`, {
        method: "POST",
        headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
        body: formData
    });

    const data = await res.json();

    if (!res.ok) {
        alert(data.message || "Application failed");
        return;
    }

    alert("Application submitted successfully");
});

/* ---------------------- ADMIN SEARCH ---------------------- */
async function searchApplicants() {
    const query = document.getElementById("search").value;

    const res = await fetch(`${API}/admin/search?query=${query}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });

    const data = await res.json();

    if (!res.ok) {
        alert(data.message || "Search failed");
        return;
    }

    document.getElementById("results").innerText = JSON.stringify(data, null, 2);
}
