// Sample data - array of todo objects
const todos = [
    { text: "Buy groceries", completed: false },
    { text: "Finish homework", completed: true },
    { text: "Call mom", completed: false },
    { text: "Read JavaScript docs", completed: true },
    { text: "Practice array methods", completed: false }
];

// Exercise 1: Using map to transform data
// Create a function renderTodoList that takes an array of todo objects
// and uses map to create HTML strings for each todo

// Exercise 2: Using filter to show filtered lists
// Create getCompletedTodos and getActiveTodos functions

// Exercise 3: Using forEach to update the DOM
// Create a displayTodos function that uses forEach

// Exercise 4: Using reduce to calculate totals
// Create getTotalCount and getCompletedCount functions

// Exercise 5: Combining methods
// Create renderFilteredTodos that combines filter and map

// Exercise 6: Chaining methods
// Create getActiveTodoTexts that chains filter and map

// Test your functions here (uncomment as you complete each exercise):

// Exercise 1 test:
// const htmlStrings = renderTodoList(todos);
// console.log(htmlStrings);

// Exercise 2 tests:
// console.log(getCompletedTodos(todos));
// console.log(getActiveTodos(todos));

// Exercise 3 test:
// displayTodos(todos);

// Exercise 4 tests:
// console.log("Total:", getTotalCount(todos));
// console.log("Completed:", getCompletedCount(todos));

// Exercise 5 test:
// const activeHtml = renderFilteredTodos(todos, false);
// console.log(activeHtml);

// Exercise 6 test:
// console.log(getActiveTodoTexts(todos));
