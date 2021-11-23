"use strict";

let choix = ["pierre", "feuille", "ciseau"];
let user;
let bot;

do {
  user = prompt("Votre choix :", "pierre").toLowerCase();
} while (user != "pierre" && user != "ciseau" && user != "feuille");

console.log(user);

bot = Math.random();
if (bot < 1 / 3) {
  bot = "pierre";
} else if (1 / 3 <= bot <= 2 / 3) {
  bot = "ciseau";
} else {
  bot = "feuille";
}

console.log(bot);

const div = document.querySelector("#content");
div.innerHTML = `<img src="img/${user}.png"> <br /> Vous <br /> <img src="img/${bot}.png"> <br /> Bot <br />`;

if (user == bot) {
  div.innerHTML += "égalité";
} else {
  switch (bot) {
    case "pierre":
      if (user == "feuille") {
        div.innerHTML += "gagné";
      } else {
        div.innerHTML += "perdu";
      }
      break;
    case "feuille":
      if (user == "pierre") {
        div.innerHTML += "perdu";
      } else {
        div.innerHTML += "gagné";
      }
      break;
    case "ciseaux":
      if (user == "pierre") {
        div.innerHTML += "gagné";
      } else {
        div.innerHTML += "perdu";
      }
      break;
  }
}
