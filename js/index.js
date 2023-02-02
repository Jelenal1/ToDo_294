function putNewItemsIntoList(list){
    const listOfToDoItems = document.getElementById("list");
    listOfToDoItems.innerText = "";
    if (list == undefined) return;
    Object.entries(list).forEach((value) => {
        const li = newLi(value);
        li.append(deleteButton(list, li.id))
        li.append(editButton(list, li.id))
        listOfToDoItems.append(li);
    });
}

function deleteButton(SavedItems, ItemToDelete){
    const deletebutton = document.createElement("button");
        deletebutton.className = "deletebutton";
        deletebutton.innerText = "🗑";
        deletebutton.addEventListener("click", () => {
            delete SavedItems[ItemToDelete];
            putNewItemsIntoList(SavedItems);
        });
        return deletebutton;
}

function editButton(SavedItems, ItemToEdit){
    const editbutton = document.createElement("button");
        editbutton.className = "editbutton";
        editbutton.innerText = "Edit";
        editbutton.addEventListener("click", () => {
            SavedItems[ItemToEdit] = prompt();
            putNewItemsIntoList(SavedItems);
        });
        return editbutton;
}

function newLi(value){
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item");
    newItem.id = value[0];
    newItem.innerText = value[1];
    return newItem;
}

function getNewItemsFromInput(SavedItems) {
    const getInputElements = document.getElementById("addtodo");
    const idOfNewItem = Object.keys(SavedItems).length; //Zeile von Kursleiter
    if (getInputElements.value == "") return;
    SavedItems[idOfNewItem] = getInputElements.value;
    putNewItemsIntoList(SavedItems);
}


document.addEventListener("DOMContentLoaded", function () {
    const InputElements = {1: "ToDo1", 2: "ToDo2"};
    const getSubmitElements = document.forms["todolist"];

    
    putNewItemsIntoList(InputElements);

    getSubmitElements.addEventListener("submit", function (event) {
        event.preventDefault();
        getNewItemsFromInput(InputElements);
    })
})