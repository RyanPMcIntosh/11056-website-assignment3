const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }