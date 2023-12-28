
// element.js

document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-item");
    const updateButton = document.getElementById("updated-item");
    const removeButton = document.getElementById("remove-item");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", addItem);
    updateButton.addEventListener("click", updateItem);
    removeButton.addEventListener("click", removeItem);

    function addItem() {
        const inputValue = todoInput.value.trim();
        if (inputValue !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = inputValue;
            todoList.appendChild(listItem);
            todoInput.value = "";
        }
    }

    function updateItem() {
        const firstItem = todoList.querySelector("li");
        if (firstItem) {
            const newValue = prompt("Enter the updated value:");
            if (newValue !== null) {
                firstItem.textContent = newValue;
            }
        } else {
            alert("No items to update.");
        }
    }

    function removeItem() {
        const firstItem = todoList.querySelector("li");
        if (firstItem) {
            const confirmation = confirm("Are you sure you want to remove the first item?");
            if (confirmation) {
                todoList.removeChild(firstItem);
            }
        } else {
            alert("No items to remove.");
        }
    }


function getTODOListFromBackend() {
    var http = new XMLHttpRequest();
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
}



getTODOListFromBackend();
});



function getTODOListFromBackend() {
    var http = new XMLHttpRequest(); 
    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                var response =JSON.parse(this.responseText);
                for(var i=0;i<response.Length;i++){
                    List.appendChild(createTODODynamically(response[i],id))
                    response[i].title));

                }
            }else{
                console.log('call failed')
            }
        }
    }
    
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
}


