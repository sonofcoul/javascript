/* ALEXANDRA FREITAS  */
"use strict";

/***********************
 * VARIABLES
 * *********************/

let meals = [
  "Fondue bourguignone",
  "Couscous",
  "Poké bowl",
  "Pizza",
  "Keuflés",
  "Courgettes farcies",
  "Falafels",
  "Buddha bowl",
  "Beurek",
  "Pâtes roquefort",
];

/***********************
 * FONCTIONS
 * *********************/

// fonction pour afficher la liste de repas
function displayList() {
  document.querySelector(
    "#meals"
  ).innerHTML = `<h3>Il y a ${meals.length} plats au menu :</h3><ul></ul>`;

  meals.forEach((line) => {
    document.querySelector("#meals ul").innerHTML += `
    <li>${line}</li>`;
  });
}

// fonction pour mettre une majuscule à la première lettre du mot saisi
function capFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// fonction pour ajouter un repas à la liste
function addMeal() {
  let item = document.querySelector("#prompt").value.toLowerCase().trim();
  let itemCap = "";
  if (item != "") {
    itemCap = capFirst(item);
  }

  let index = meals.indexOf(itemCap);

  // gérer saisie utilisateur
  if (item == "") {
    alert("Veuillez saisir un repas.");
  } else if (index != -1) {
    alert(`${itemCap} a déjà été ajouté au menu.`);
  } else {
    meals.push(itemCap);
    alert(`${itemCap} a bien été ajouté au menu.`);
  }

  document.querySelector("form").reset();
  displayList();
}

/***********************
 * CODE PRINCIPAL
 * *********************/

document.addEventListener("DOMContentLoaded", function () {
  //code qui s'exécute lorsque la page HTML a fini de charger
  displayList();
  document.querySelector("#submit").addEventListener("click", addMeal);
});
