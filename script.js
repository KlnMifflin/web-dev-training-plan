const toggleThemeBtn = document.getElementById("themeToggle");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");
    toggleThemeBtn.textContent = isDark ? "☀️ Light Mode" : "🌒 Dark Mode";
    document.getElementById("icon-mj").src = isDark ? "res/mahjong-icon-dark.png" : "res/mahjong-icon.png";
    document.getElementById("icon-ai").src = isDark ? "res/ai-icon-dark.png" : "res/ai-icon.png";
    document.getElementById("icon-web").src = isDark ? "res/web-dev-icon-dark.png" : "res/web-dev-icon.png";
    document.getElementById("icon-cpp").src = isDark ? "res/cpp-icon-dark.png" : "res/cpp-icon.png";
    document.getElementById("icon-m365").src = isDark ? "res/m365-icon-dark.png" : "res/m365-icon.png";
    document.getElementById("icon-robot").src = isDark ? "res/robot-icon-dark.png" : "res/robot-icon.png";
    document.getElementById("icon-chess").src = isDark ? "res/chess-icon-dark.png" : "res/chess-icon.png";
    document.getElementById("icon-rugby").src = isDark ? "res/rugby-icon-dark.png" : "res/rugby-icon.png";

})