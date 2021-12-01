"use strict";

/* VARIABLES */
let list = [];

/* FONCTIONS */
function addItem(item) {
  list.push(item);
  displayList();
}

/* function getValue() {
  let item = document.querySelector("#toAdd").value.toLowerCase();
  addItem(item);
  document.querySelector("form").reset();
  console.log(item);
} */

function getValue(selector, fct) {
  let item = document.querySelector(selector).value.toLowerCase();
  fct(item);
  document.querySelector("form").reset();
}

function displayList() {
  const UL = document.querySelector("ul");
  document.querySelector("h2").textContent =
    "La liste contient " + list.length + " produits.";

  // empêche de reprendre tout le tableau
  UL.innerHTML = "";

  list.forEach((item) => {
    document
      .querySelector("ul")
      .insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });
}

function togglePopup() {
  document.querySelector("#popup").classList.toggle("hide");
}

function deleteOne(item) {
  // Recherche de l'emplacement (l'indice) du produit spécifié dans la liste de courses.
  let index = list.indexOf(item);

  // Est-ce que le produit spécifié n'a pas été trouvé ?
  if (index == -1) {
    // Oui, affichage d'une erreur.
    alert("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    // Fin de la fonction removeItem(), il ne faut pas aller plus loin.
    return;
  }

  // Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
  list.splice(index, 1);
  displayList();
  togglePopup();
}

function deleteAll() {
  list = [];
  displayList();
}

/* CODE PRINCIPAL */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").addEventListener("click", function () {
    getValue("#toAdd", addItem);
  });

  document.querySelector("#delete").addEventListener("click", deleteAll);
  document.querySelector("#deleteOne").addEventListener("click", togglePopup);
  document.querySelector("#popup span").addEventListener("click", togglePopup);

  document.querySelector("#btnDelete").addEventListener("click", function () {
    getValue("#toDelete", deleteOne);
  });
});
displayList();
