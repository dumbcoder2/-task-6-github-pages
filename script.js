// Dark and light mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// Welcome button
const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    document.getElementById("message").textContent =
        "Thanks for visiting my DevOps portfolio! 🚀";
});

// Dynamic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
