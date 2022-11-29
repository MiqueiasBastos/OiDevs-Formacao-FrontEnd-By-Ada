const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let taskList = [];
let categories = [];

const localTaskList = localStorage.getItem("taskList");
const localCategories = localStorage.getItem("categories");

if (localTaskList) {
    taskList = [...JSON.parse(localTaskList)];
}
if (localCategories) {
    categories = [...JSON.parse(localCategories)];
}
function addCategory(categoryName) {
    if (categories.includes(categoryName) === false) {
        categories.push(categoryName);
        categories.sort();
    }
}
function updateLocalData() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    localStorage.setItem("categories", JSON.stringify(categories));
    renderList();
}
function addTask(title, category, hour) {
    taskList.push({ title, category, hour, completed: false });
    addCategory(category);
    updateLocalData();
}
function removeTask(index) {
    taskList.splice(index, 1);
    updateLocalData();
}
function editTask(index, title, category, hour) {
    taskList[index] = { ...taskList[index], title, category, hour };
    addCategory(category);
    updateLocalData();
}
function toggleCompletedTask(index) {
    taskList[index].completed = !taskList[index].completed;
    updateLocalData();
}
function showTask(index) {
    return taskList[index];
}
function renderList() {
    let listRender = "";
    taskList.forEach(({ title, category, hour, completed }, index) => {
        listRender += `
            <li class="list-group-item d-flex justify-content-between align-items-center mb-3 rounded border ps-0">
                <button type="button" class="btn btn-link p-2" onclick="toggleCompletedTask(${index})">
                    <i class="bi ${completed ? 'bi-check-circle-fill' : 'bi-circle'} fs-4 text-dark"></i>
                </button>
                <div class="me-auto">
                    <span class="fw-bold fs-5 m-0">${title}</span>
                    <div class="d-flex align-items-center justify-content-start">
                        <span class="text-muted">${category}</span>
                        <span class="fs-2 px-1 lh-1">•</span>
                        <span class="text-muted">
                            <i class="bi bi-clock"></i> ${hour}
                        </span>
                    </div>
                </div>
                <div class="text-end d-flex justify-content-between align-items-center" style="min-width: 81px">
                    <button type="button" class="btn btn-dark px-2 py-1" data-bs-toggle="modal" data-bs-target="#task-modal" data-bs-action="edit" data-bs-index="${index}">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button type="button" class="btn btn-outline-dark px-2 py-1" onclick="removeTask(${index})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </li>
        `;
    });
    if (listRender === "") {
        listRender = `
            <div class="alert alert-dark text-center" role="alert">
                Ainda não há tarefas para este dia
            </div>
        `;
    }
    document.querySelector("#list-tasks").innerHTML = listRender;
    renderCategoriesSuggestions();
}
function renderCategoriesSuggestions() {
    let suggestionsList = "";
    categories.forEach(
        (category) => (suggestionsList += `<option value="${category}" />`)
    );
    document.querySelector("#categories-suggestions").innerHTML = suggestionsList;
}
function updateDateAndTime() {
    const date = new Date();
    const hour = numberTwoDigits(date.getHours());
    const minutes = numberTwoDigits(date.getMinutes());
    const dayName = days[date.getDay()];
    const dayNumber = numberTwoDigits(date.getDate());
    const monthName = months[date.getMonth()];

    hourArea.innerHTML = `${hour}:${minutes}`;
    dateArea.innerHTML = `${dayName}, ${dayNumber} de ${monthName}`;
}
function numberTwoDigits(number) {
    return number.toString().padStart(2, "0");
}

const hourArea = document.querySelector("#hour");
const dateArea = document.querySelector("#date");
const taskModalElement = document.getElementById("task-modal");
const taskModal = new bootstrap.Modal(taskModalElement, {});

taskModalElement.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const action = button.getAttribute("data-bs-action");
    const indexTask = button.getAttribute("data-bs-index");

    const inputTitle = document.querySelector("#input-title");
    const inputCategory = document.querySelector("#input-category");
    const inputHour = document.querySelector("#input-hour");
    const btnSave = document.querySelector("#btn-save");
    const modalTitle = taskModalElement.querySelector(".modal-title");

    modalTitle.textContent = action === "add" ? "Nova Tarefa" : "Editar Tarefa";

    switch (action) {
        case "add":
            inputTitle.value = "";
            inputCategory.value = "";
            inputHour.value = "";
            break;
        case "edit":
            let taskEdit = showTask(indexTask);
            inputTitle.value = taskEdit.title;
            inputCategory.value = taskEdit.category;
            inputHour.value = taskEdit.hour;
            break;
        default:
            break;
    }

    btnSave.onclick = () => {
        if (inputTitle.value === "" || inputCategory.value === "" || inputHour.value === "") {
            alert("Por favor, Preencha todos os campos");
            return;
        }
        switch (action) {
            case "add":
                addTask(inputTitle.value, inputCategory.value, inputHour.value);
                break;
            case "edit":
                editTask(indexTask, inputTitle.value, inputCategory.value, inputHour.value);
                break;
            default:
                break;
        }
        taskModal.hide(taskModalElement);
    };
});

renderList();
updateDateAndTime();
setInterval(updateDateAndTime, 1000);
