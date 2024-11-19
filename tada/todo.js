"use strict";
let idInput = document.querySelector("#idInput");

async function getToDo(id) {
  let promise = fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  let response = await promise;
  let todo = await response.json();
  console.log(todo);
}

function showDetails() {
  console.log(idInput.value);
  let id = idInput.value;
  getToDo(id);
}

let id = 1;
let message = `Hello, World! ${id}`;
console.log(message);
