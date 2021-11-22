"use strict";

const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;

//affectation de valeur
montantHT = parseFloat(prompt("Montant HT ?", 100));

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul du montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;
console.log(
  `Pour un montant HT de ${montantHT}€, il y a ${montantTVA}€ de TVA. Le montant TTC est donc de ${montantTTC}€.`
);

document.querySelector(
  "#content"
).innerHTML = `<p>Pour un montant HT de ${montantHT}€, il y a ${montantTVA}€ de TVA. <br /> Le montant TTC est donc de ${montantTTC}€.</p>`;
