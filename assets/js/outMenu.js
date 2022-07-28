const menuElement = document.querySelector(".product-listss");
const categoryElement = document.querySelector(".category-list");
const btnOutProduct = document.querySelectorAll(".filter-btn");
const sliderElement = document.querySelector(".slide");
// Slider
const cartItemElement = document.querySelector(".cart-group");
const subTolTal = document.querySelector(".cart-total-title");
const totalItemInCart = document.querySelector(".number");
const btnADD = document.querySelector(".product-img-add");
const productFilterMenu = [
  {
    id: 0,
    tagName: "Red Love Cup",
    category: "coffee ",
    imgSRC: "../img/more0.jpg",
    btn: "Exploremug",
    price: 15,
  },

  {
    id: 1,
    tagName: "Black Tea Cup",
    imgSRC: "../img/more1.jpg",
    category: "coffee",
    btn: "Exploremug",
    price: 25,
  },

  {
    id: 2,
    tagName: "B&W Essentials Mug",
    imgSRC: "../img/more2.jpg",
    category: "coffee",
    btn: "Exploremug",
    price: 35,
  },

  {
    id: 3,
    tagName: "Winter Style Mug",
    imgSRC: "../img/more3.jpg",
    btn: "Explore mug",
    category: "coffee",

    price: 12,
  },

  {
    id: 4,
    tagName: "Ceramic Tea",
    imgSRC: "../img/more4.jpg",
    btn: "Explore mug",
    category: "tea",
    price: 48,
  },

  {
    id: 5,
    tagName: "No Handle Bar Cup",
    imgSRC: "../img/more5.jpg",
    btn: "Explore mug",
    category: "coffee",

    price: 60,
  },

  {
    id: 6,
    tagName: "Espresso Cup by Mugs.co",
    imgSRC: "../img/more6.jpg",
    category: "tea",
    btn: "Explore mug",
    price: 99,
  },

  {
    id: 7,
    tagName: "Pink Premium Ceramic",
    imgSRC: "../img/more7.jpg",
    btn: "Explore mug",
    category: "premium",

    price: 72,
  },

  {
    id: 8,
    tagName: "Summer Designer Cup",
    imgSRC: "../img/more8.jpg",
    category: "premium",
    btn: "Explore mug",
    price: 29,
  },
  {
    id: 9,
    tagName: "Peach Tea Cup",
    imgSRC: "../img/more9.jpg",
    btn: "Explore mug",
    category: "tea",

    price: 29,
  },
  {
    id: 10,
    tagName: "Hot Tea Cup",
    imgSRC: "../img/more10.jpg",
    category: "tea",

    btn: "Explore mug",
    price: 29,
  },
  {
    id: 11,
    tagName: "Summer Tea Cup",
    imgSRC: "../img/more11.jpg",
    category: "tea",
    btn: "Explore mug",
    price: 29,
  },
  {
    id: 12,
    tagName: "Summer Tea Cup",
    imgSRC: "../img/more12.jpg",
    category: "others",
    btn: "Explore mug",
    price: 29,
  },
  {
    id: 13,
    tagName: "Summer Tea Cup",
    imgSRC: "../img/more13.jpg",
    category: "others",
    btn: "Explore mug",
    price: 29,
  },
  {
    id: 14,
    tagName: "Summer Tea Cup",
    imgSRC: "../img/more14.jpg",
    category: "others",
    btn: "Explore mug",
    price: 29,
  },
];

if (menuElement) {
  displayMenu(productFilterMenu);
  addToCart();
  updateCart();
  renderCartItem();
  renderSubTotal();
}

function displayMenu(menuItem) {
  let displayMenu = menuItem.map((product) => {
    return `
    <div class="product-item">
    <div class="product-img">
      <img src="${product.imgSRC}" alt="" />
      <a href="#" class="product-img-add" onclick = "addToCart(${product.id})">
      ${product.btn}
      </a>
    </div>
    <div class="product-desc">
      <a href = "#" class="product-name">${product.tagName}</a>
      <p class="product-price"> $ ${product.price} USD</p>
    </div>
  </div>
    `;
  });
  displayMenu = displayMenu.join("");
  menuElement.innerHTML = displayMenu;
}

// FiLTER ITEM OUR PRODUCT
btnOutProduct.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    // Filter Product Menu
    const type = event.target.dataset.id;
    const menuCategory = productFilterMenu.filter((menuItem) => {
      if (menuItem.category === type) {
        return menuItem;
      }
    });
    if (type == "all") {
      displayMenu(productFilterMenu);
    } else {
      displayMenu(menuCategory);
    }
    // Add active Button
    btnOutProduct.forEach((at) => at.classList.remove("active-btn"));
    this.classList.add("active-btn");
  });
});

// add cart
let cartMore = [];

function addToCart(id) {
  if (cartMore.some((item) => item.id === id)) {
    alert("Product already in cart");
  } else {
    const item = productFilterMenu.find((product) => product.id === id);
    cartMore.push({
      ...item,
      numberOfUnit: 1,
    });
  }
  updateCart();
}
// render item in cart
function updateCart() {
  renderCartItem();
  renderSubTotal();
}

function renderCartItem() {
  cartItemElement.innerHTML = "";
  cartMore.forEach((item) => {
    cartItemElement.innerHTML += `
      <div class="cart-product">
        <div class="cart-box2">
            <div class="cart-img">
               <img src="${item.imgSRC}" alt="" />
            </div>
            <div class="cart-desc">
              <p class="cart-name">${item.tagName}</p>
              <p class="cart-price">$ ${item.price} USD</p>
              <p class="cart-delete" onclick = "removeItemCart(${item.id})">Remove</p>
            </div>
        </div>
      <div class="cart-input">
          <div class="cart-quantity">${item.numberOfUnit}</div>
      </div>
      </div>
          `;
  });
}

function renderSubTotal() {
  let totalPrice = 0,
    totalItem = 0;
  cartMore.forEach((item) => {
    totalPrice += item.price * item.numberOfUnit;
    totalItem += item.numberOfUnit;
  });
  subTolTal.innerHTML = `Subtotal:  ${totalPrice} USD`;
  totalItemInCart.innerHTML = totalItem;
}

function removeItemCart(id) {
  cartMore = cartMore.filter((item) => item.id !== id);
  updateCart();
}
