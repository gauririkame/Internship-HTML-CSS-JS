const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let selectedTask = null;

function addOrUpdateTask() {
    if (inputBox.value.trim() === '') {
        alert("You have to add something....");
        return;
    }

    if (selectedTask !== null) {
        // Update the selected task
        selectedTask.innerHTML = inputBox.value;
        selectedTask = null;

        // Change the button label back to "Add"
        document.getElementById("add-button").textContent = "Add";
    } else {
        // Add a new task
        let li = document.createElement("li");

        let taskSpan = document.createElement("span");
        taskSpan.innerHTML = inputBox.value;

        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00D7"; // Delete button

        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        deleteButton.addEventListener("click", deleteTask, false);
        taskSpan.addEventListener("dblclick", function () {
            selectedTask = taskSpan;
            inputBox.value = taskSpan.innerText;

            // Change the button label to "Update" while editing
            document.getElementById("add-button").textContent = "Update";
        }, false);

        listContainer.appendChild(li);
    }

    inputBox.value = "";
}

function deleteTask(e) {
    e.target.parentElement.remove();
}
