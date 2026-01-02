/* =========================
   STICKY HEADER
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* =========================
   MOBILE MENU
========================= */
const menu = document.querySelector("#menu-icon");
const navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};

function toggleFav(el){
  el.classList.toggle("active");
}
