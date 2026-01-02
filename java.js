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

document.querySelectorAll(".interactive-model").forEach(model => {

  let isOpen = false;

  // نوقف أي animation كي يتشحن الموديل
  model.addEventListener("load", () => {
    model.pause();
    model.currentTime = 0;
  });

  // بالكليك: نشغّل الأنيميشن
  model.addEventListener("click", () => {
    if (!isOpen) {
      model.currentTime = 0;
      model.playbackRate = 1;
      model.play();
      isOpen = true;
    } else {
      model.currentTime = model.duration;
      model.playbackRate = -1;
      model.play();
      isOpen = false;
    }
  });

});



