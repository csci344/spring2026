// Sample data - array of todo objects
const todos = [
    { text: "Buy groceries", completed: false },
    { text: "Finish homework", completed: true },
    { text: "Call mom", completed: false },
    { text: "Read JavaScript docs", completed: true },
    { text: "Practice array methods", completed: false }
];

// Exercise 1: Using map to transform data
function renderTodoList(todos) {
    return todos.map(todo => {
        const completedClass = todo.completed ? 'completed' : '';
        return `<li class="${completedClass}">${todo.text}</li>`;
    });
}

// Exercise 2: Using filter to show filtered lists
function getCompletedTodos(todos) {
    return todos.filter(todo => todo.completed === true);
}

function getActiveTodos(todos) {
    return todos.filter(todo => todo.completed === false);
}

// Exercise 3: Using forEach to update the DOM
function displayTodos(todos) {
    const todoList = document.querySelector('#todoList');
    const htmlStrings = renderTodoList(todos);
    htmlStrings.forEach(html => {
        todoList.insertAdjacentHTML('beforeend', html);
    });
}

// Exercise 4: Using reduce to calculate totals
function getTotalCount(todos) {
    return todos.reduce((count, todo) => count + 1, 0);
}

function getCompletedCount(todos) {
    return todos.reduce((count, todo) => {
        return todo.completed ? count + 1 : count;
    }, 0);
}

// Exercise 5: Combining methods
function renderFilteredTodos(todos, showCompleted = true) {
    const filtered = todos.filter(todo => 
        showCompleted ? todo.completed : !todo.completed
    );
    return filtered.map(todo => {
        const completedClass = todo.completed ? 'completed' : '';
        return `<li class="${completedClass}">${todo.text}</li>`;
    });
}

// Exercise 6: Chaining methods
function getActiveTodoTexts(todos) {
    return todos
        .filter(todo => !todo.completed)
        .map(todo => todo.text);
}

// Test functions
// const htmlStrings = renderTodoList(todos);
// console.log(htmlStrings);

// console.log(getCompletedTodos(todos));
// console.log(getActiveTodos(todos));

// displayTodos(todos);

// console.log("Total:", getTotalCount(todos));
// console.log("Completed:", getCompletedCount(todos));

// const activeHtml = renderFilteredTodos(todos, false);
// console.log(activeHtml);

// console.log(getActiveTodoTexts(todos));
