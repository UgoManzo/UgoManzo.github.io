// script.js
const toggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

function toggleTheme() {
  const isDark = document.body.classList.contains("dark");
  setTheme(!isDark);
}

toggle.addEventListener("click", toggleTheme);

// Applica il tema da localStorage o dalle preferenze del sistema
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  setTheme(true);
} else if (saved === "light") {
  setTheme(false);
} else {
  setTheme(prefersDark.matches);
}