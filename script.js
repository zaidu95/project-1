function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="actions">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector(".task-text");

    const newTask = prompt("Edit your task:", span.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask;
    }
}