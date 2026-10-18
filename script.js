const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");
        li.innerText = task + " ";

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        deleteButton.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

addButton.onclick = function() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);
    taskInput.value = "";
    saveTasks();
};

showTasks();