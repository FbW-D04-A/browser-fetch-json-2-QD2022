// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

import { newRecipes } from "./data";

let objectRecipes = JSON.parse(newRecipes);
const sections = [
  document.getElementById("cakes"),
  document.getElementById("biscuits"),
  document.getElementById("bread"),
];

let newData = Object.entries(objectRecipes);
console.log(newData);
newData.forEach((entryCards) => {
  entryCards[1].map((card) => {
    sections.forEach((section) => {
      if (card.type === section.id) {
        let cardInfo = `<div class= "card m-3" style = "width 15rem">
                <img src="${card.image}" class= "card-img-top" height ="200rem">
                <div class="card-body">
                <h3>${card.title}</h3>
                <h5>${card.author}</h5>
                <p>${card.ingredients.join(",")}</p>
                </div>
                </div>`;
        section.insertAdjacentHTML("afterbegin", cardInfo);
      }
    });
  });
});

// function createSomeCards(x) {
//   let createDiv = document.createElement("div");
//   let createImg = document.createElement("img");
//   createImg.src = x.image;
//   createDiv.appendChild(createImg);
//   let createHeader = document.createElement("h2");
//   createHeader.innerText = x.title;
//   createDiv.appendChild(createHeader);
//   let createText = document.createElement("p");
//   createText.innerHTML = x.author + x.ingredients;
//   createDiv.appendChild(createText);
//   return createDiv;
// }
// createSomeCards(objectRecipes.cake);
