"use strict";

let game = new Object();

const DIV = document.querySelector("#game");

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

  DIV.innerHTML += `<h3>Point de vie de départ</h3>
  <table>
    <tr>
      <th>Personnage</th>
      <th>PV</th>
    </tr>
    <tr>
      <td>Chevalier</td>
      <td>${game.knighthp} </td>
    </tr>
    <tr>
      <td>Dragon</td>
      <td>${game.dragonhp}</td>
    </tr>
  </table>`;
}

function computeDragonDamagePoint() {
  let dmgdragon;
  switch (game.difficulty) {
    case 1:
      dmgdragon = getRandomInt(10, 20);
      break;
    case 2:
      dmgdragon = getRandomInt(20, 30);
      break;
    case 3:
      dmgdragon = getRandomInt(20, 30);
      break;
  }
  return Math.floor(dmgdragon * game.armorRatio);
}

function computePlayerDamagePoint() {
  let dmgknight;
  switch (game.difficulty) {
    case 1:
      dmgknight = getRandomInt(25, 30);
      break;
    case 2:
      dmgknight = getRandomInt(15, 20);
      break;
    case 3:
      dmgknight = getRandomInt(5, 10);
      break;
  }
  return Math.floor(dmgknight * game.swordRatio);
}

function gameLoop() {
  do {
    game.round++;
    DIV.innerHTML += `<h3>--- Tour n°${game.round} ---</h3>`;
    let speedAttack = getRandomInt(1, 2);
    if (speedAttack == 1) {
      let dmgdragon = computeDragonDamagePoint();
      game.knighthp -= dmgdragon;
      DIV.innerHTML += `Le dragon est plus rapide et vous brûle, il vous enlève ${dmgdragon} PV. <br /> <br /><table>
      <tr>
        <th>Personnage</th>
        <th>PV</th>
      </tr>
      <tr>
        <td>Chevalier</td>
        <td>${game.knighthp} </td>
      </tr>
      <tr>
        <td>Dragon</td>
        <td>${game.dragonhp}</td>
      </tr>
    </table>`;
    } else {
      let dmgknight = computePlayerDamagePoint();
      game.dragonhp -= dmgknight;
      DIV.innerHTML += `Vous êtes plus rapide et frappez le dragon, vous lui enlevez ${dmgknight} PV. <br /> <br /> <table>
      <tr>
        <th>Personnage</th>
        <th>PV</th>
      </tr>
      <tr>
        <td>Chevalier</td>
        <td>${game.knighthp} </td>
      </tr>
      <tr>
        <td>Dragon</td>
        <td>${game.dragonhp}</td>
      </tr>
    </table>`;
    }
  } while (game.knighthp > 0 && game.dragonhp > 0);
}

function showGameWinner() {
  if (game.knighthp > 0) {
    DIV.innerHTML =
      `<div id="article"><img src="img/knight.png" /><b>Vous avez gagné, vous êtes vraiment fort !</b><p> Il vous restait ${game.knighthp} PV.</p></div>` +
      DIV.innerHTML;
  } else {
    DIV.innerHTML =
      `<div id="article"><img src="img/dragon.png" /><b>Le dragon a gagné, vous avez été carbonisé !</b> <p>Il restait ${game.dragonhp} PV au dragon.</p></div>` +
      DIV.innerHTML;
  }
}

function startGame() {
  initializeGame();
  gameLoop();
  showGameWinner();
}

startGame();
