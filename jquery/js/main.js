"use strict";

/************************
 * VARIABLES
 ************************/
let list = []; //new Array();

/************************
 * FONCTIONS
 ************************/

/**
 * Générer les li pour chaque élément présent  dans la liste
 */
function displayList() {
  //cible la UL
  const UL = $("ul");
  //vide d'éventuelles précédentes LI à l'intérieur
  UL.empty();
  //pour chaque élément dans le tableau list ça génère une LI injectée avant la fermeture de la ul
  for (let item of list) {
    UL.append(`<li>${item}</li>`);
  }
  //affiche la div
  $(".display").removeClass("hide");
}

/**
 * Récupérer la valeur saisie dans le formulaire
 * @param {Event} event automatique récupérée car fonction appelée via eventlistener
 */
function handleForm(event) {
  //annule comportement par défaut de l'événement (submit = rafraichit la page)
  event.preventDefault();

  //récupérela valeur saisie par l'utilisateur
  //.trim() = supprime les espaces vides en début et fin de string
  let user = $("input[type='text']").val().trim();
  //---> vanillaJS : let user = document.querySelector("input[type='text']").value.trim();

  //ajouter la saisie à la liste
  list.push(user);

  //vide le formulaire
  $("form")[0].reset();

  //appelle la fonc
  displayList();
}

/************************
 * CODE PRINCIPAL
 ************************/
$(document).ready(function () {
  //code qui s'exécute que quand la page HTML a fini de charger
  $("form").on("submit", handleForm);
});
