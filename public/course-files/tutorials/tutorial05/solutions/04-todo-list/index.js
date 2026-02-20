// Solution for Todo List

// Function to add a new todo item to the list
function addTodo() {
    // 1) Get the input element
    const input = document.getElementById('todoInput');
    
    // 2) Get the value from the input (use .value property)
    const todoText = input.value;
    
    // 3) Get the ul element (the todo list)
    const todoList = document.getElementById('todoList');
    
    // 4) Use insertAdjacentHTML('beforeend', '<li>...</li>') to add the item
    //    Make sure to include the todo text in the <li>
    todoList.insertAdjacentHTML('beforeend', `<li>${todoText}</li>`);
    
    // 5) Clear the input field (set .value to empty string)
    input.value = '';
}
