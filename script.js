// Dark Mode Persistence
if(localStorage.getItem("theme") === "light") {
    document.body.classList.remove("dark-mode");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
