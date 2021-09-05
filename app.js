//Selectors
const todoInput = document.querySelector(".todo-add");
const todoButton = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");

//EventListners
todoButton.addEventListener("click", todoClick);
todoList.addEventListener("click", deleteOrCheck);

//Functions
function todoClick(e) {
  e.preventDefault();

  //avoid saving null values as todo validation
  if (todoInput.value === "") {
    alert("No Data Found!!");
    return;
  }

  //Creating a new DIV container
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo-item-list");

  //Creating new li
  const newTodoList = document.createElement("li");
  newTodoList.classList.add("todo-item");
  newTodoList.innerText = todoInput.value;
  newTodo.appendChild(newTodoList); //adding this li to the div we created

  //creating a check box for completing the task
  const checkButton = document.createElement("button");
  checkButton.classList.add("todo-check");
  checkButton.type = "submit";
  checkButton.innerHTML = '<i class ="fas fa-check"></i>';
  newTodo.appendChild(checkButton);

  //creating a delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("todo-delete");
  deleteButton.type = "submit";
  deleteButton.innerHTML = '<i class ="fas fa-trash"></i>';
  deleteButton.style.cursor = "pointer";
  newTodo.appendChild(deleteButton);

  //append all the created elements in to the main div
  todoList.appendChild(newTodo);

  //clearing the values after click
  todoInput.value = "";
}

function deleteOrCheck(e) {
  const item = e.target;

  if (item.classList[0] === "todo-delete") {
    const todoItem = item.parentElement;
    console.log(todoItem);

    todoItem.classList.add("dlte");
    todoItem.addEventListener("transitionend ", function () {
      todoItem.remove();
      todoItem = "";
    });
  }

  if (item.classList[0] === "todo-check") {
    const todoItem = item.parentElement;
    todoItem.classList.toggle("completed");
  }
}
