"use strict";

const slides = [
  {
    src: "1.jpg",
    legend: "frères panda",
  },
  {
    src: "2.jpg",
    legend: "yoga",
  },
  {
    src: "3.jpg",
    legend: "coucher de soleil",
  },
  {
    src: "4.jpg",
    legend: "nuit étoilée",
  },
  {
    src: "5.jpg",
    legend: "tea time",
  },
  {
    src: "6.jpg",
    legend: "gros dessert",
  },
];

const state = { index: 0, interval: false };

function toolbarToggle() {
  document.querySelector(".toolbar ul").classList.toggle("hide");

  const icon = document.querySelector("#toolbar-toggle i");
  icon.classList.toggle("fa-arrow-right");
  icon.classList.toggle("fa-arrow-down");
}

function refreshSlider() {
  document.querySelector("#slider img").src =
    "images/" + slides[state.index].src;
  document.querySelector("#slider figcaption").textContent =
    slides[state.index].legend;
}

function next() {
  state.index++;
  if (state.index == slides.length) {
    state.index = 0;
  }
  refreshSlider();
}

function previous() {
  state.index--;
  if (state.index < 0) {
    state.index = slides.length - 1;
  }
  refreshSlider();
}

function random() {
  let nb;
  do {
    nb = getRandomInt(0, slides.length - 1);
  } while (nb == state.index);
  state.index = nb;
  refreshSlider();
}

function playSlider() {
  const icon = document.querySelector("#slider-toggle i");
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");

  if (state.interval == false) {
    state.interval = setInterval(next, 2000);
    this.title = "Arrêter le carousel";
  } else {
    clearInterval(state.interval);
    state.interval = false;
    this.title = "Démarrer le carrousel";
  }
}

refreshSlider();

document
  .querySelector("#toolbar-toggle")
  .addEventListener("click", toolbarToggle);

document.querySelector("#slider-next").addEventListener("click", next);

document.querySelector("#slider-previous").addEventListener("click", previous);

document.querySelector("#slider-random").addEventListener("click", random);

document.querySelector("#slider-toggle").addEventListener("click", playSlider);
