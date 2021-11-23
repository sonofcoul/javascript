"use strict";

let table = [
  {
    prenom: "Toto",
    age: 12,
  },
  {
    prenom: "Lucette",
    age: 14,
  },
  {
    prenom: "Antoinette",
    age: 13,
  },
  {
    prenom: "Gribouille",
    age: 13,
  },
];

let index = 0;
while (index < table.length) {
  console.log(
    "Prénom : " + table[index].prenom + " | Age : " + table[index].age + " ans"
  );
  index++;
}

for (let i = 0; i < table.length; i++) {
  console.log(
    "Prénom : " + table[i].prenom + " | Age : " + table[i].age + " ans"
  );
}

for (let line of table) {
  console.log("Prénom : " + line.prenom + " | Age : " + line.age + " ans");
}

table.forEach((line) => {
  console.log("Prénom : " + line.prenom + " | Age : " + line.age + " ans");
});
