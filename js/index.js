function RenderList(list){
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
    deletebutton.classList.add("btn");
    deletebutton.classList.add("btn-outline-dark");
    deletebutton.classList.add("ms-2");
        deletebutton.innerText = "🗑";
        deletebutton.addEventListener("click", () => {
            delete SavedItems[ItemToDelete];
            RenderList(SavedItems);
        });
        return deletebutton;
}

function editButton(SavedItems, ItemToEdit){
    const editbutton = document.createElement("button");
        editbutton.classList.add("btn");
        editbutton.classList.add("btn-outline-dark");
        editbutton.innerText = "Edit";
        editbutton.addEventListener("click", () => {
            SavedItems[ItemToEdit] = prompt();
            RenderList(SavedItems);
        });
        return editbutton;
}

function newLi(value){
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item");
    newItem.classList.add("border-dark");
    newItem.classList.add("fw-bold");
    newItem.id = value[0];
    newItem.innerText = value[1];
    return newItem;
}

function getNewItemsFromInput(SavedItems) {
    const getInputElements = document.getElementById("addtodo");
    const idOfNewItem = Object.keys(SavedItems).length +1; //Zeile von Kursleiter
    if (getInputElements.value == "") return;
    SavedItems[idOfNewItem] = getInputElements.value;
    RenderList(SavedItems);
}


document.addEventListener("DOMContentLoaded", function () {
    const InputElements = {1: "TODO"};
    const getSubmitElements = document.forms["todolist"];

    
    RenderList(InputElements);

    getSubmitElements.addEventListener("submit", function (event) {
        event.preventDefault();
        getNewItemsFromInput(InputElements);
    })
})