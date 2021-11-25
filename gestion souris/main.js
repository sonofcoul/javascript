"use strict";

function toggleRectangle() {
  rectangle.classList.toggle("hide");
}

function becomeRed() {
  rectangle.classList.add("important");
}

function becomeBeige() {
  rectangle.classList.add("good");
}

function becomeBlue() {
  rectangle.classList.remove("important");
  rectangle.classList.remove("good");
}

let rectangle = document.querySelector(".rectangle");
document
  .querySelector("#toggle-rectangle")
  .addEventListener("click", toggleRectangle);

rectangle.addEventListener("mouseover", becomeRed);

rectangle.addEventListener("dblclick", becomeBeige);

rectangle.addEventListener("mouseout", becomeBlue);
