"use strict";

//déclaration de la variable
//le nom de la variable ne commence pas par un chiffre, ne contient pas d'espace ni caractères spéciaux sauf underscore (_)
let maVariable;

//affectation de valeur
maVariable = "33.50";

console.log(maVariable, typeof maVariable);

//conversion en décimal
maVariable = parseFloat(maVariable);

console.log("parseFloat", maVariable, typeof maVariable);

//conversion en nombre entier
maVariable = parseInt(maVariable);

console.log("parseInt", maVariable, typeof maVariable);

//constante
const MA_CONSTANTE = "valeur";

/**
 * SAISIE UTILISATEUR
 */
// let user = window.prompt("message affiche à l'utilisateur");
// user = parseInt(user);
// console.log(user, typeof user);

/**
 * addition : +
 * soustraction : -
 * division : /
 * multiplication : *
 */
let nb = 2;
nb = nb + 2;
console.log(nb);

//CONCATENATION
let mot = "choses";
let chaine = nb + mot;
console.log("Ma chaine de caractère vaut : " + chaine);

//template string (altgr+7)
console.log(
  `Je fais une concaténation entre ${nb} et ${mot}, ce qui donne : ${chaine}`
);

console.clear();

/********************************
 * CALCULATRICE DE TVA
 ********************************/

//déclaration des variables
const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;

//affectation de valeur
montantHT = 150;

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul du montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;
console.log(
  `Pour un montant HT de ${montantHT}€, nous payons un TTC de ${montantTTC}€. Le montant de la TVA est donc de ${montantTVA}€.`
);
