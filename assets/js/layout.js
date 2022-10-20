const featuredElement = document.querySelector(".featured-lists");
const productMoreElement = document.querySelector(".more-lists");
const menuElement = document.querySelector(".product-listss");

// * render ProductFeatured
const renderProductFeatured = () => {
  data.splice(0, 2).forEach((product) => {
    const teamplate = `
      <div class="featured-product">
          <div class="featured-img">
              <img src="${product.imgSRC}" alt="" />
              <span class="featured-img-sale">On Sale.</span>
              <a href="./productItem.html" class="featured-img-add" id="add-cart">
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
};

featuredElement && renderProductFeatured();

// * render MoreProduct
const renderMoreProduct = () => {
  data.splice(2, 6).forEach((product) => {
    const template = `
             <div class="more-product">
                  <div class="more-img">
                  <img src="${product.imgSRC}" alt="" />
                    <a href="./productItem.html" class="more-img-add" id="add-cart" onclick = "addToCart(${product.id})">
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
};
productMoreElement && renderMoreProduct();

//* render Menu

localStorage.clear();
