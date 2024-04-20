const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

//determines dark mode default through system settings
if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

//button toggle for dark mode
function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }