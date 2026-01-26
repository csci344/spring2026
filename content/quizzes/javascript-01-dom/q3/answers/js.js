const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Your code here
const myList = [];

function addTodo() {
  myList.push(todoInput.value);
  todoInput.value = "";
  drawList();
}

function deleteItem(idx) {
  myList.splice(idx, 1);
  drawList();
}

function drawList() {
  todoList.innerHTML = myList.map((item, idx) => {
      return `<li>
            <button onclick="deleteItem(${idx})">x</button>
            ${item} 
        </li>`
  }).join('');
}

addBtn.addEventListener('click', addTodo);