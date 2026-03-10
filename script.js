// Retrieve todo from local storage or initialize and empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.getElementById(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialzie
