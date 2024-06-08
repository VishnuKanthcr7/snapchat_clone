const dropDown = document.querySelector(".drop-down");
const menu = document.querySelector(".menu");

dropDown.addEventListener("mouseenter", () => {
  menu.classList.remove("hidden");
});

menu.addEventListener("mouseleave", () => {
  menu.classList.add("hidden");
});

const slides = document.querySelector(".slides");
const secondAnim = document.querySelector(".second-animation");
const thirdAnim = document.querySelector(".third-animation");
const fourthAnim = document.querySelector(".fourth-animation");
const fifthAnim = document.querySelector(".fifth-animation");
const infoSecond = document.querySelector(".info-second");
const infoThird = document.querySelector(".info-third");
const infoFourth = document.querySelector(".info-fourth");
const infoFifth = document.querySelector(".info-fifth");
const footer = document.querySelector(".bot");

const slidesLength = 7;

let activeSlideIndex = 0;

let wheeling = false;
var scrollTimer = false;

window.addEventListener("wheel", function (e) {
  if (!wheeling) {
    if (e.deltaY > 0) changeSlide("up");
    if (e.deltaY < 0) changeSlide("down");
    wheeling = true;
  }
  window.clearInterval(scrollTimer);
  scrollTimer = this.window.setTimeout(function () {
    wheeling = false;
  }, 50);
});


const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex < 6) footer.classList.add("hidden");
    if (activeSlideIndex === 1) {
      secondAnim.classList.remove("invisible");
      infoSecond.classList.remove("invisible");
    } else if (activeSlideIndex === 2) {
      secondAnim.classList.add("invisible");
      infoSecond.classList.add("invisible");
      thirdAnim.classList.remove("invisible");
      infoThird.classList.remove("invisible");
    } else if (activeSlideIndex === 3) {
      thirdAnim.classList.add("invisible");
      infoThird.classList.add("invisible");
      fourthAnim.classList.remove("invisible");
      infoFourth.classList.remove("invisible");
    } else if (activeSlideIndex === 4) {
      fourthAnim.classList.add("invisible");
      infoFourth.classList.add("invisible");
      fifthAnim.classList.remove("invisible");
      infoFifth.classList.remove("invisible");
    } else if (activeSlideIndex === 5) {
      fifthAnim.classList.add("invisible");
      infoFifth.classList.add("invisible");
    } else if (activeSlideIndex === 6) {
      footer.classList.remove("hidden");
    }
    if (activeSlideIndex > slidesLength - 1)
      activeSlideIndex = slidesLength - 1;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 6) footer.classList.add("hidden");
    if (activeSlideIndex === 1) {
      secondAnim.classList.remove("invisible");
      infoSecond.classList.remove("invisible");
    } else if (activeSlideIndex === 2) {
      secondAnim.classList.add("invisible");
      infoSecond.classList.add("invisible");
      thirdAnim.classList.remove("invisible");
      infoThird.classList.remove("invisible");
    } else if (activeSlideIndex === 3) {
      thirdAnim.classList.add("invisible");
      infoThird.classList.add("invisible");
      fourthAnim.classList.remove("invisible");
      infoFourth.classList.remove("invisible");
    } else if (activeSlideIndex === 4) {
      fourthAnim.classList.add("invisible");
      infoFourth.classList.add("invisible");
      fifthAnim.classList.remove("invisible");
      infoFifth.classList.remove("invisible");
    } else if (activeSlideIndex === 5) {
      fifthAnim.classList.add("invisible");
      infoFifth.classList.add("invisible");
    }
    if (activeSlideIndex < 0) activeSlideIndex = 0;
  }
  slides.style.transform = `translateY(-${activeSlideIndex * 14.3}%)`;
};

const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".burger-menu");

let hidden = true;

menuBtn.addEventListener("click", () => {
  if (hidden) {
    burgerMenu.classList.remove("hidden");
    hidden = false;
  } else {
    burgerMenu.classList.add("hidden");
    hidden = true;
  }
});
