// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 5
    ? header.classList.add("sticky-action")
    : header.classList.remove("sticky-action");
}
window.addEventListener("scroll", stickyHeader);

// ===== DARK MODE ======
// change the icons inside the button based on previous setting
if (localStorage.getItem("theme") === "dark") {
  setDarkMode();
}

// theme toggle button
function setDarkMode() {
  let emoticon = "";
  let setDark = document.documentElement.classList.toggle("dark");

  // if set via local storage previously
  if (setDark) {
    emoticon = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    emoticon = "🌙";
    localStorage.removeItem("theme");
  }

  // put the icons inside the button
  document.getElementById("theme-toggle").innerHTML = emoticon;
}
