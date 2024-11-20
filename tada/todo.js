"use strict";
let idInput = document.querySelector("#idInput");
let infoDiv = document.querySelector("#infoDiv")


async function getToDo(id) {
  let promise = fetch("https://jsonplaceholder.typicode.com/users/" + id);
    let response = await promise; 
    let todo = await response.json(); 
    console.log(todo)
    infoDiv.innerText = todo.tittle
  }

function displayDetails(){
    //console.log(idInput.value);
    infoDiv.innerText = todo.name;
    let id = idInput.value;
    getToDo(id);
}