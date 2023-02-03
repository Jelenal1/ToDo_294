function RenderList(list) {
    const listOfToDoItems = document.getElementById("list");
    listOfToDoItems.innerText = "";
    if (list == undefined) return;
    list.forEach((value) => {
        const li = newLi(value);
        li.append(deleteButton(value.id))
        li.append(editButton(value.id))
        listOfToDoItems.append(li);
    });
}

function deleteButton(ItemToDelete) {
    const deletebutton = document.createElement("button");
    deletebutton.classList.add("button");  
    deletebutton.classList.add("borderblueviolet");  
    deletebutton.classList.add("ms-2"); //code from getbootstrap.com
    deletebutton.innerText = "🗑️";
    deletebutton.addEventListener("click", () => {
        async function deleteLi (ItemToDelete) {
            const del = await fetch(`http://localhost:3000/task/${ItemToDelete}`, {
                method: "DELETE"});
            const res = await del.json();
            console.log(res);
            }  
            deleteLi(ItemToDelete);
            getData("http://localhost:3000/tasks");
    });
     return deletebutton;
    
    
}

function editButton(ItemToEdit) {
    const editbutton = document.createElement("button");
    editbutton.classList.add("button");    
    editbutton.classList.add("borderblueviolet");    
    editbutton.innerText = "✏️";
    editbutton.addEventListener("click", () => {
        const li = document.getElementById(ItemToEdit);
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        // code from chat.openai.com
        input.value = li.innerText.slice(0, li.innerText.length -5);
        li.innerText = "";
        li.appendChild(input);
        input.focus();
      
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter" && input.value !== "") {
            const updatedValue = input.value;
            li.removeChild(input);
           async function updateLi (ItemToEdit) {
               const update = await fetch(`http://localhost:3000/tasks`, {
                   method: "PUT",
                   headers: {
                       "Content-Type": "application/json"
                    }
                   
               });
           }
          }
        });
      });
    return editbutton;
}

function newLi(value) {
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item");   //code from getbootstrap.com
    newItem.classList.add("borderblueviolet");   
    newItem.classList.add("fw-bold");   //code from getbootstrap.com
    newItem.id = value.id;
    newItem.innerText = value.title;
    return newItem;
}

async function getNewItemsFromInput(url) {
    const getInputElements = document.getElementById("addtodo");
    if (getInputElements.value == "") return;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title: getInputElements.value})
    });
    getData("http://localhost:3000/tasks");
}


 async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);    
        RenderList(data);
 }



document.addEventListener("DOMContentLoaded", function () {
    const getSubmitElements = document.forms["todolist"];

    getData("http://localhost:3000/tasks");


    getSubmitElements.addEventListener("submit", function (event) {
        event.preventDefault();
        getNewItemsFromInput("http://localhost:3000/tasks");
    })
})