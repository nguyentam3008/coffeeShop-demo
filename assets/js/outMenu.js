// SELECT ELEMENTS
const productsEl = document.querySelector(".product-listss");
const cartItemsEl = document.querySelector(".cart-group");
const subtotalEl = document.querySelector(".cart-total-title");
const totalItemsInCartEl = document.querySelector(".number");

// * render Menu Product
const displayMenu = () => {
  data.forEach((product) => {
    const teamplate = `
      <div class="product-item" type-food='${product.category}'>
        <div class="product-img">
          <img src="${product.imgSRC}" alt="coffee" />
        <a href="#" class="product-img-add" onclick="addToCart(${product.id})" >
        ${product.btn}
        </a>
        </div>
        <div class="product-desc">
        <a href = "#" class="product-name">${product.tagName}</a>
        <p class="product-price"> $ ${product.price} USD</p>
        </div>
      </div>
      `;
    menuElement.insertAdjacentHTML("beforeend", teamplate);
  });
};
productsEl && displayMenu();

//* cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];

//* ADD TO CART
const addToCart = (id) => {
  if (cart.some((item) => item.id === id)) {
    alert("Product already in cart");
  } else {
    const item = data.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnit: 1,
    });
  }
  updateCart();
};
// *render item in cart
const updateCart = () => {
  renderCartItem();
  renderSubtotal();
  // *save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
};

const renderCartItem = () => {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
    <div class="cart-product">
      <div class="cart-img">
        <img src="${item.imgSRC}" alt="coffee" />
      </div>
        <div class="cart-desc">
          <p class="cart-name">${item.tagName}</p>
          <p class="cart-price">$ ${item.price} USD</p>
          <p class="cart-delete" onclick ="removeItemFromCart(${item.id})">Remove</p>
        </div>
        <div class="cart-input">
          <div class="cart-quantity">${item.numberOfUnit}</div>
        </div>
  </div>
      `;
  });
};

const renderSubtotal = () => {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnit;
    totalItems += item.numberOfUnit;
  });

  subtotalEl.innerHTML = `Subtotal: ${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
};
// *remove item from cart
const removeItemFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
};

// * filter Product
(function () {
  const foodBtns = document.querySelectorAll(".filter-btn");
  const foodList = document.querySelectorAll(".product-item");

  foodBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const type = e.target.getAttribute("type-food");

      //* remove and set active fpr button
      document
        .querySelector(".menu-btn button.active-btn")
        .classList.remove("active-btn");
      e.target.classList.add("active-btn");
      btn.classList.remove();
      // filter elements
      foodList.forEach((item) => {
        if (type == "all" || item.getAttribute("type-food") == type)
          item.classList.remove("hide");
        else item.classList.add("hide");
      });
    });
  });
})();
