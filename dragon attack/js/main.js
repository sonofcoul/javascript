"use strict";

let game = new Object();

function initializeGame() {
  game.round = 0;

  game.difficulty = requestInteger(
    "Niveau de difficulté ? \n 1- Facile 2- Normal 3- Difficile",
    1,
    3
  );
  game.sword = requestInteger("Epée ? \n 1- Bois 2- Acier 3- Excalibur", 1, 3);
  game.armor = requestInteger("Armure ? \n 1- Cuivre 2- Fer 3- Magique", 1, 3);

  switch (game.difficulty) {
    case 1:
      game.knighthp = getRandomInt(200, 250);
      game.dragonhp = getRandomInt(150, 200);
      break;
    case 2:
      game.knighthp = getRandomInt(200, 250);
      game.dragonhp = getRandomInt(200, 250);
      break;
    case 3:
      game.knighthp = getRandomInt(150, 200);
      game.dragonhp = getRandomInt(200, 250);
      break;
  }

  switch (game.sword) {
    case 1:
      game.swordRatio = 0.5;
      break;
    case 2:
      game.swordRatio = 1;
      break;
    case 3:
      game.swordRatio = 1.5;
      break;
  }

  switch (game.armor) {
    case 1:
      game.armorRatio = 1;
      break;
    case 2:
      game.armorRatio = 0.75;
      break;
    case 3:
      game.armorRatio = 0.5;
      break;
  }
}

function computeDragonDamagePoint() {
  switch (game.difficulty) {
    case 1:
      game.dmgdragon = getRandomInt(10, 20);
      break;
    case 2:
      game.dmgdragon = getRandomInt(20, 30);
      break;
    case 3:
      game.dmgdragon = getRandomInt(20, 30);
      break;
  }
  return game.dmgdragon * game.armorRatio;
}

function computePlayerDamagePoint() {
  switch (game.difficulty) {
    case 1:
      game.dmgknight = getRandomInt(25, 30);
      break;
    case 2:
      game.dmgknight = getRandomInt(15, 20);
      break;
    case 3:
      game.dmgknight = getRandomInt(5, 10);
      break;
  }
  return game.dmgknight * game.swordRatio;
}

function gameLoop() {
  console.log(game.knighthp, game.dragonhp);
  do {
    console.log("----------tour------------");
    game.round++;
    console.log("round : " + game.round);
    let speedAttack = getRandomInt(1, 2);
    if (speedAttack == 1) {
      game.knighthp = game.knighthp - computeDragonDamagePoint();
      console.log(game.knighthp, game.dragonhp);
    } else {
      game.dragonhp = game.dragonhp - computePlayerDamagePoint();
      console.log(game.knighthp, game.dragonhp);
    }
  } while (game.knighthp > 0 && game.dragonhp > 0);
}

function showGameWinner() {
  if (game.knighthp > 0) {
    console.log(
      "Vous avez gagné, vous êtes vraiment fort ! Il vous restait " +
        game.knighthp +
        " PV"
    );
  } else {
    console.log(
      "Le dragon a gagné, vous avez été carbonisé ! Il restait " +
        game.dragonhp +
        " PV au dragon."
    );
  }
}

function startGame() {
  initializeGame();
  gameLoop();
  showGameWinner();
}

startGame();

console.log(game);
console.log(game.knighthp, game.dragonhp);
