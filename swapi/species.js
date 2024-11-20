"use strict";

let speciesTBody = document.querySelector("#speciesTable tbody");
console.log(speciesTBody);

async function getSpecies() {
  let promise = fetch("https://swapi.dev/api/species/");
  let response = await promise;
  let species = await response.json();
  console.log(species);
  displaySpecies(species.results);
}

function buildTableRow(species) {
  let tr = speciesTBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = species.name;

  let td2 = tr.insertCell();
  td2.innerText = species.classification;

  let td3 = tr.insertCell();
  td3.innerText = species.average_height;

  let td4 = tr.insertCell();
  td4.innerText = species.language;
}

function displaySpecies(speciesArray) {
  for (const species of speciesArray) {
    buildTableRow(species);
  }
}

getSpecies();
