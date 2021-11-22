"use strict";

let day = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

let month = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

let today = new Date();
let year = today.getFullYear();
let days = today.getDate();

let dayIndex = today.getDay();
let monthIndex = today.getMonth();

let hours = today.getHours();
let min = today.getMinutes();

let testh = today.toLocaleTimeString();

let dateFR = today.toLocaleDateString("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

document.querySelector(
  "#content"
).innerHTML = `Nous sommes le ${day[dayIndex]} ${days} ${month[monthIndex]} ${year} ${hours}:${min} ${testh}`;
