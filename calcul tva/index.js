"use strict";

const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;
let isRemise, tauxRemise;
let textRemise;

//affectation de valeur
do {
  montantHT = parseFloat(prompt("Montant HT ?", 100));
} while (isNaN(montantHT));

isRemise = prompt("Avez vous une remise ?");

if (isRemise === "oui" || isRemise === "yes") {
  do {
    tauxRemise = parseFloat(
      prompt("Quel est le taux de la remise ?").replace(",", ".")
    );
  } while (isNaN(tauxRemise));
  montantHT -= (montantHT * tauxRemise) / 100;
}

if (isRemise === "oui" || isRemise === "yes") {
  textRemise = `Une remise de ${tauxRemise} % a été appliquée sur le montant HT.`;
} else {
  textRemise = "Aucune remise n'a été appliquée.";
}

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul du montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;

//calcul remise

document.querySelector(
  "#content"
).innerHTML = `<p>Pour un montant HT de ${montantHT}€, il y a ${montantTVA}€ de TVA. <br /> Le montant TTC est donc de ${montantTTC}€. <br /> ${textRemise}</p>`;
