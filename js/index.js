function putNewItemsIntoList(list){
    const listOfToDoItems = document.getElementById("list");
    listOfToDoItems.innerText = "";
    if (list == undefined) return;
    Object.entries(list).forEach((value) => {
        const newItem = document.createElement("li");
        newItem.innerText = value[1];
        listOfToDoItems.append(newItem);
    });
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