const toggleThemeBtn = document.getElementById("themeToggle");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");
    document.getElementById("icon-mj").src = isDark ? "res/mahjong-icon-dark.png" : "res/mahjong-icon.png";
    document.getElementById("icon-ai").src = isDark ? "res/ai-icon-dark.png" : "res/ai-icon.png";
    toggleThemeBtn.textContent = isDark ? "☀️ Light Mode" : "🌒 Dark Mode";
})