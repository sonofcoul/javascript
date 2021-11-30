/*******************
 * VARIABLES
 *******************/
const CONTENT = document.querySelector("#content");
const POPUP = document.querySelector("#popup");

/*******************
 * FONCTIONS
 *******************/

/**
 * Génère le HTML par rapport au bouton sur lequel on a cliqué
 */
function generateHTML() {
  //this contient la balise HTML qui a déclenché l'événement = le bouton sur lequel on a cliqué. Grâce à ça on peut récupérer la valeur de ses attributs, dont l'ID
  const ID = this.id;
  //le HTML à générer est différent pour le HR, on fait donc une condition
  if (ID == "hr") {
    CONTENT.insertAdjacentHTML("beforeend", `<hr>`);
  } else {
    CONTENT.insertAdjacentHTML(
      "beforeend",
      `<${ID} contenteditable='true'>${this.dataset.placeholder}</${ID}>`
    );
  }
}

/**
 * Récupère le HTML généré et l'affiche dans la popup sous la forme de texte prêt à être copié collé
 */
function exportHTML() {
  const HTML = CONTENT.innerHTML.replace(/ contenteditable="true"/g, "");
  const DIV = document.createElement("div");
  DIV.textContent = HTML;
  POPUP.innerHTML = "";
  POPUP.appendChild(DIV);
  POPUP.classList.remove("hide");
}

/**
 * Cache la popup
 */
function hidePopup() {
  POPUP.classList.add("hide");
}

/*******************
 * CODE PRINCIPAL
 *******************/

//Cible tous les boutons qui permettent de générer une balise et on leur installe un gestionnaire d'événement
const BUTTONS = document.querySelectorAll("button:not(#export)");
BUTTONS.forEach((button) => button.addEventListener("click", generateHTML));

//Cible le bouton qui l'id export et installe un gestionnaire d'événement
document.querySelector("#export").addEventListener("click", exportHTML);

//Cacher la popup au double clic
POPUP.addEventListener("dblclick", hidePopup);
