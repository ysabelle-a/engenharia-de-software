let tasks = [];

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const priority = document.getElementById("taskPriority").value;

    if (title === "") {
        alert("Informe o título da tarefa!");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        description,
        priority,
        status: "Pendente"
    };

    tasks.push(task);
    renderTasks();
    clearForm();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="task-header">
                <span>${task.title}</span>
                <span class="priority">${task.priority}</span>
            </div>
            <p>${task.description}</p>
            <p>Status: ${task.status}</p>

            <div class="actions">
                <button onclick="toggleStatus(${task.id})">Concluir</button>
                <button class="delete" onclick="deleteTask(${task.id})">Excluir</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function toggleStatus(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, status: task.status === "Pendente" ? "Concluída" : "Pendente" }
            : task
    );
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function clearForm() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
}

function soma(a, b) {
  return a + b;
}

module.exports = { soma };
