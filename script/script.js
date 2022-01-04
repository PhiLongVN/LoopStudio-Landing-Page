const toggle = document.querySelector(".tg-icon");
const menu = document.querySelector(".tg-menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
};
