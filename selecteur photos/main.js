"use strict";

function selectOne() {
  this.classList.toggle("selected");

  let selected = document.querySelectorAll("li.selected");
  console.log(selected.length);
  document.querySelector("#total em").textContent = selected.length;
}

function selectAll() {}

function deselectAll() {}

let photos = document.querySelectorAll(".photo-list li");

photos.forEach((li) => {
  li.addEventListener("click", selectOne);
});
