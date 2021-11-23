"use strict";

let rndInt = Math.floor(Math.random() * 500);
console.log(rndInt);
let user;
let message;
do {
  user = prompt("Un nombre :", 100);
  if (user == rndInt) {
    console.log("C'est gagné !");
  } else if (user < rndInt) {
    console.log("C'est plus !");
  } else {
    console.log("C'est moins !");
  }
} while (rndInt != user);
