// Retrieve todo from local storage or initialize and empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.getElementById(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialzie
document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteALLTasks());
    displayTasks();
});

function addTask() {
    // some logic

}

function deleteALLTasks() {
    // some logic
}

function displayTasks() {
    // some logic
}