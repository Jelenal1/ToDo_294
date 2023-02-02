function putNewItemsIntoList(list){
    const listOfToDoItems = document.getElementById("list");
    listOfToDoItems.innerText = "";
    if (list == undefined) return;
    Object.entries(list).forEach((value) => {
        const newItem = document.createElement("li");
        newItem.id = value[0];
        newItem.innerText = value[1];
        
        newItem.append(deleteButton(list, newItem.id))
        listOfToDoItems.append(newItem);
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

function editButton(SavedItems){
    const editbutton = document.createElement("button");
        editbutton.className = "editbutton";
        editbutton.innerText = "Edit";
    const ParentElement = editButton.parentElement;
    const ItemToEdit = ParentElement.id;
    SavedItems[ItemToEdit] = prompt();
}

function getNewItemsFromInput(SavedItems) {
    const getInputElements = document.getElementById("addtodo");
    const idOfNewItem = parseInt(Object.keys(SavedItems)[Object.keys(SavedItems).length - 1]) + 1;
    if (getInputElements.value == "") return;
    SavedItems[idOfNewItem] = getInputElements.value;
    console.log(SavedItems);
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