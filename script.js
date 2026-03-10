// Retrieve todo from local storage or initialize and empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");

console.log(todoInput);