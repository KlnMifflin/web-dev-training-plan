const toggleThemeBtn = document.getElementById("themeToggle");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleThemeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌒 Dark Mode";
})