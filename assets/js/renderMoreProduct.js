const productMoreElement = document.querySelector(".more-lists");
const productMore = [
  {
    id: 0,
    tagName: "Red Love Cup",
    imgSRC: "./assets/img/more0.jpg",
    btn: "Explore mug",
    price: 1,
  },

  {
    id: 1,
    tagName: "Black Tea Cup",
    imgSRC: "./assets/img/more1.jpg",
    btn: "Explore mug",
    price: 25,
  },

  {
    id: 2,
    tagName: "B&W Essentials Mug",
    imgSRC: "./assets/img/more2.jpg",
    btn: "Explore mug",
    price: 35,
  },

  {
    id: 3,
    tagName: "Winter Style Mug",
    imgSRC: "./assets/img/more3.jpg",
    btn: "Explore mug",
    price: 12,
  },

  {
    id: 4,
    tagName: "Ceramic Tea",
    imgSRC: "./assets/img/more4.jpg",
    btn: "Explore mug",
    price: 48,
  },

  {
    id: 5,
    tagName: "No Handle Bar Cup",
    imgSRC: "./assets/img/more5.jpg",
    btn: "Explore mug",

    price: 60,
  },

  {
    id: 6,
    tagName: "Espresso Cup by Mugs.co",
    imgSRC: "./assets/img/more6.jpg",
    btn: "Explore mug",
    price: 99,
  },

  {
    id: 7,
    tagName: "Pink Premium Ceramic",
    imgSRC: "./assets/img/more7.jpg",
    btn: "Explore mug",
    price: 72,
  },

  {
    id: 8,
    tagName: "Summer Designer Cup",
    imgSRC: "./assets/img/more8.jpg",
    btn: "Explore mug",
    price: 29,
  },
];
window.addEventListener("DOMContentLoaded", () => {
  renderMoreProduct(productMore);
});
function renderMoreProduct(item) {
  item.forEach((product) => {
    const template = `
             <div class="more-product">
                  <div class="more-img">
                  <img src="${product.imgSRC}" alt="" />
                    <a href="./assets/html/productItem.html" class="more-img-add" id="add-cart" onclick = "addToCart(${product.id})">
                      ${product.btn}
                      </a>
                  </div>
                  <div class="more-desc">
                  <a href = "#" class="more-name">${product.tagName}</a>
                  <p class="more-price"> $ ${product.price} USD</p>
                  </div>
             </div>
                  `;
    productMoreElement.insertAdjacentHTML("beforeend", template);
  });
}
renderMoreProduct();
