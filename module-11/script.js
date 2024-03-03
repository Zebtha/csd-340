/* 
    Shane Tinsley - : Assignment 11.2 -3/2/24 
    Handles tasks for Tinsley_Mod11_2.html
    Resources: Textbook HTML & CSS design and build websites 
    https://github.com/Zebtha/csd-340.git
    https://zebtha.github.io/csd-340/
    https://zebtha.github.io/csd-340/module-11/Tinsley_Mod11_2.html
*/
// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task to the array
function addTask() {
    // Get the input value
    let taskInput = document.getElementById("taskInput").value;
    // Get the index where the task will be added
    let index = tasks.length;
    // Add the task to the array
    tasks.push(taskInput);
    // Show an alert with the added task and its index
    alert("Task added at index " + index + ": " + taskInput);
}

// Function to delete the last task from the array
function deleteLast() {
    // Check if there are tasks to delete
    if (tasks.length > 0) {
        // Remove the last task from the array
        tasks.pop();
        alert("Last task deleted.");
    } else {
        alert("No tasks to delete.");
    }
}

// Function to display tasks
function displayTasks() {
    // Get the element where tasks will be displayed
    let taskListElement = document.getElementById("taskList");
    // Clear previous tasks displayed
    taskListElement.innerHTML = "";

    // Display tasks one by one
    for (let i = 0; i < tasks.length; i++) {
        // Create a list item element
        let listItem = document.createElement("li");
        // Assign the task text to the list item
        listItem.textContent = (i + 1) + ". " + tasks[i];
        // Append the list item to the task list
        taskListElement.appendChild(listItem);
    }
}
