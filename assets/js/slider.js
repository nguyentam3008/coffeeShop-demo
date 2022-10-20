// select Element
const imgSrc = document.querySelector(".slide-img");
const title = document.querySelector(".slide-title");
const text = document.querySelector(".slide-text");
const content = document.querySelector(".silde-content");
const btn = document.querySelector(".slide-btn");
const prev = document.querySelector(".slide-prev");
const next = document.querySelector(".slide-next");
const dotElement = document.querySelector(".slide-dot");
const dotItem = document.querySelectorAll(".slide-dot-item");
const sliderElement = document.querySelector(".slide");

// starting item
let currentIndex = 0;

const showSlider = () => {
  const item = sliders[currentIndex];
  title.textContent = item.text;
  imgSrc.src = item.src;
  text.textContent = item.title;
  content.textContent = item.content;
  btn.textContent = item.sliderBtn;
  $(".slide-dot-item.active-dot").classList.remove("active-dot");
  dotItem[currentIndex].classList.add("active-dot");
};

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > sliders.length - 1) {
    currentIndex = 0;
  }
  showSlider();
});

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliders.length - 1;
  }
  showSlider();
});

dotItem.forEach((ele, i) => {
  ele.addEventListener("click", function () {
    currentIndex = i;
    showSlider();
  });
});
