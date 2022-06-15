const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnOpenMenu = document.querySelector(".nav-hamberger");
const menu = document.querySelector(".nav-menu");
const cartElement = $(".nav-sping");
const cartItem = $(".cart");
const cartLose = $("#cart-lose");
const overplay = $(".overplay");
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

// open cart Item
cartElement.addEventListener("click", () => {
  show();
});

cartLose.addEventListener("click", () => {
  hide();
});

overplay.addEventListener("click", () => {
  hide();
});

// Acitve nav
