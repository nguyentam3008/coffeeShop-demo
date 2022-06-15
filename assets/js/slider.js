// select Element
const imgSrc = $(".person-img");
const title = $(".title-center");
const text = $(".slide-text");
const content = $(".silde-content");
const btn = $(".slide-btn");
const prev = $(".slide-prev");
const next = $(".slide-next");
const dotElement = $(".slide-dot");
const dotItem = $$(".slide-dot-item");

// starting item
let currentIndex = 0;

const sliders = [
  {
    id: 1,
    text: "NEW ARTICLE IS LIVE",
    src: "../img/cfshop1.jpg",
    title:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    content:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    sliderBtn: "read the full story",
  },
  {
    id: 2,
    text: "NEW STORE OPENED",
    src: "../img/cfshop3.jpg",
    title: "We're in London",
    content:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    sliderBtn: "read the full story",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  showSlider(sliders);
});

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
