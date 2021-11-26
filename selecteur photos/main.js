"use strict";
let count = 0;

function displayCount() {
  const em = document.querySelector("#total em");
  em.textContent = count;
  if (count == 0) {
    em.style.color = "blue";
  } else if (count == 10) {
    em.style.color = "yellow";
  } else {
    em.style.color = "pink";
  }
}

function selectOne() {
  this.classList.toggle("selected");

  let selected = document.querySelectorAll("li.selected");
  console.log(selected.length);
  document.querySelector("#total em").textContent = selected.length;
}

function selectAll() {
  photos.forEach((li) => li.classList.add("selected"));
  count = photos.length;
  displayCount();
}

function deselectAll() {
  photos.forEach((li) => li.classList.remove("selected"));
  count = 0;
  displayCount();
}

let photos = document.querySelectorAll(".photo-list li");

photos.forEach((li) => {
  li.addEventListener("click", selectOne);
});

document.querySelector("#selectAll").addEventListener("click", selectAll);

document.querySelector("#deselectAll").addEventListener("click", deselectAll);
