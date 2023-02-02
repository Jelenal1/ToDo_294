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
    deletebutton.classList.add("btn");  //code from getbootstrap.com
    deletebutton.classList.add("btn-outline-dark"); //code from getbootstrap.com
    deletebutton.classList.add("ms-2"); //code from getbootstrap.com
        deletebutton.innerText = "🗑";
        deletebutton.addEventListener("click", () => {
            delete SavedItems[ItemToDelete];
            RenderList(SavedItems);
        });
        return deletebutton;
}

function editButton(SavedItems, ItemToEdit){
    const editbutton = document.createElement("button");  
        editbutton.classList.add("btn");    //code from getbootstrap.com
        editbutton.classList.add("btn-outline-dark");   //code from getbootstrap.com
        editbutton.innerText = "Edit";
        editbutton.addEventListener("click", () => {
            SavedItems[ItemToEdit] = prompt();
            RenderList(SavedItems);
        });
        return editbutton;
}

function newLi(value){
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item");   //code from getbootstrap.com
    newItem.classList.add("border-dark");   //code from getbootstrap.com
    newItem.classList.add("fw-bold");   //code from getbootstrap.com
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