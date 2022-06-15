const featuredElement = document.querySelector(".featured-lists");
const productFeatured = [
  {
    id: 0,
    imgSRC: "./assets/img/featured1.jpg",
    tagName: " Pink Premium Ceramic",
    btn: "Explore mug",
    price: 99.0,
  },
  {
    id: 1,
    imgSRC: "./assets/img/featured2.jpg",
    tagName: " Golden Designers Mug",
    btn: "Explore mug",
    price: 50.0,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  renderProductFeatured(productFeatured);
});

function renderProductFeatured() {
  productFeatured.forEach((product) => {
    const teamplate = `
      <div class="featured-product">
          <div class="featured-img">
              <img src="${product.imgSRC}" alt="" />
              <span class="featured-img-sale">On Sale.</span>
              <a href="./assets/html/productItem.html" class="featured-img-add" id="add-cart">
                ${product.btn}
              </a>
          </div>
          <div class="featured-desc">
              <p class="${product.tagName}">Pink Premium Ceramic</p>
              <p class="featured-price">$ ${product.price} USD</p>
          </div>
      </div>
          `;
    featuredElement.insertAdjacentHTML("beforeend", teamplate);
  });
}
