"use strict";

/* VARIABLES */

let list = [];

/* FONCTIONS */

function getValue() {
  let item = document.querySelector("#toAdd").value;
  //   addtoList(item);
  list.push(item);
  document.querySelector("form").reset();
  displayList();
}

function addtoList(item) {}

// afficher la liste
function displayList() {
  // remplace par un tableau vide à chaque fois :
  document.querySelector("ul").innerHTML = "";
  document.querySelector("h2").textContent =
    "La liste contient " + list.length + " produit(s).";

  for (let line of list) {
    document
      .querySelector(".list")
      .insertAdjacentHTML("beforeend", `<li>${line}</li>`);
  }
}

// afficher - cacher la popup
function displayPopup() {
  document.querySelector("#popup").classList.toggle("hide");
}

function deleteOne() {
  let item = document.querySelector("#toDelete").value;
  let index = list.indexOf(item);
  console.log(item);
  if (index == -1) {
    alert("ERREUR : le produit" + item + "n'existe dans la liste de courses.");
  }

  list.splice(index, 1);
  displayList();
  displayPopup();
}

// effacer la liste
function deleteAll() {
  list = [];
  displayList();
}

/* CODE PRINCIPAL */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").addEventListener("click", getValue);

  document.querySelector("#deleteOne").addEventListener("click", displayPopup);
  document.querySelector("h3 span").addEventListener("click", displayPopup);

  document.querySelector("#delete").addEventListener("click", deleteAll);
  document.querySelector("#btnDelete").addEventListener("click", deleteOne);
});
