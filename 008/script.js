document.addEventListener("DOMContentLoaded", function(){
// Created some variable to target HTML 
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");


    // added event listerner to listen the events which we are going to perfomr using Jvasacript

    addButton.addEventListener("click", function(){
    const taskText = taskInput.value.trim();
    if(taskText!==""){
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText} <button class="deleteButton">Delete</button>`;
        taskList.appendChild(listItem);
        taskInput.value = "";


        // below code will delete the added data from the list 
        const deleteButton = listItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function(){
            taskList.removeChild(listItem);
        })
    }
    })
})