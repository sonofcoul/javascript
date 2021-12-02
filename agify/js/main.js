"use strict";
/* VARIABLES */

/* FONCTIONS */

function enterName() {
  let item = document.querySelector("#firstname").value.trim();

  // fetch("https://api.agify.io?name=" + item)
  fetch(`https://api.agify.io?name=${item}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (datas) {
      console.log(datas);

      document.querySelector("article").classList.remove("hide");
      document.querySelector(
        "article h2"
      ).innerHTML = `D'après Agify, avec le prénom ${item}, tu as ${datas.age} ans.`;
      document.querySelector("article strong").innerHTML = datas.count;
    })

    .catch(function (error) {
      alert("Erreur : " + error);
    });
}

function displayDatas(infos) {
  // peut mettre la function datas dedans et l'appeler en haut
}

/* CODE PRINCIPAL */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", enterName);
});
