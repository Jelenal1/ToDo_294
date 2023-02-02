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

function getNewItemsFromInput() {
    const getInputElements = document.getElementById("addtodo");
    const getSubmitElements = document.forms["todolist"];

}

document.addEventListener("DOMContentLoaded", function () {
    const InputElements = {1: "ToDo1", 2: "ToDo2"};
    
    putNewItemsIntoList(InputElements);

    getSubmitElements.addEventListener("submit", function (event) {
        event.preventDefault();
        putNewItemsIntoList(InputElements);
    })
})