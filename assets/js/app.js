const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnOpenMenu = document.querySelector(".nav-hamberger");
const menu = document.querySelector(".nav-menu");
const cartElement = document.querySelector(".nav-sping");
const cartItem = document.querySelector(".cart");
const cartLose = document.querySelector("#cart-lose");
const overplay = document.querySelector(".overplay");
const mainNav = document.querySelectorAll(".menu-link");
const activePage = window.location.pathname;
// OUT PRODUCT BTN

// Open menu
const show = () => {
  cartItem.classList.add("cart-active");
  overplay.classList.add("show-overplay");
};
const hide = () => {
  cartItem.classList.remove("cart-active");
  overplay.classList.remove("show-overplay");
};

btnOpenMenu.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

// * todo: open cart Item
cartElement.addEventListener("click", () => {
  show();
});

cartLose.addEventListener("click", () => {
  hide();
});

overplay.addEventListener("click", () => {
  hide();
});

//* handle Acitve MainNav
mainNav.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active-nav");
  }
});
