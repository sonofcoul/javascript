"use strict";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function requestInteger(message, min, max) {
  let nb;
  do {
    nb = parseInt(prompt(message, 1));
  } while (nb < min || nb > max || isNaN(nb));
  return nb;
}
