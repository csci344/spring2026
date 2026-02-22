---
title: "Array Methods Practice with DOM"
type: "activity"
start_date: "2026-03-02"
draft: 1
heading_max_level: 3
ordering: 1
---

## Goal
Practice using array methods (`map`, `filter`, `reduce`, `forEach`) with DOM manipulation. These methods are essential for React, where you'll frequently transform data arrays into UI elements.

## Setup

Download the starter files:

<a href="/spring2026/course-files/activities/js-array-methods-practice.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

After downloading and unzipping, open `index.html` in your browser using Live Server.

See the downloads folder for hints.

## Exercise 1: Using `map` to Transform Data

Create a function `renderTodoList` that takes an array of todo objects and uses `map` to create HTML strings for each todo:

```javascript
const todos = [
    { text: "Buy groceries", completed: false },
    { text: "Finish homework", completed: true },
    { text: "Call mom", completed: false }
];

function renderTodoList(todos) {
    // Use map to transform each todo object into an HTML string
    // Return an array of HTML strings
}
```

**Hints:**
- Use `map` to transform each todo into an HTML string
- Use template literals to create the HTML
- Each todo should become a `<li>` element

## Exercise 2: Using `filter` to Show Filtered Lists

Create a function `getCompletedTodos` that filters the todos array:

```javascript
function getCompletedTodos(todos) {
    // Use filter to return only todos where completed === true
}
```

Create a function `getActiveTodos` that returns only incomplete todos:

```javascript
function getActiveTodos(todos) {
    // Use filter to return only todos where completed === false
}
```

## Exercise 3: Using `forEach` to Update the DOM

Create a function `displayTodos` that uses `forEach` to add todos to the page:

```javascript
function displayTodos(todos) {
    const todoList = document.querySelector('#todoList');
    // Use forEach to add each todo's HTML to the page
    // Use insertAdjacentHTML('beforeend', htmlString) for each todo
}
```

## Exercise 4: Using `reduce` to Calculate Totals

Create a function `getTotalCount` that counts todos:

```javascript
function getTotalCount(todos) {
    // Use reduce to count the total number of todos
    // Return the count
}
```

Create a function `getCompletedCount` that counts only completed todos:

```javascript
function getCompletedCount(todos) {
    // Use reduce to count todos where completed === true
    // Return the count
}
```

## Exercise 5: Combining Methods

Create a function `renderFilteredTodos` that combines `filter` and `map`:

```javascript
function renderFilteredTodos(todos, showCompleted = true) {
    // First filter the todos based on showCompleted
    // Then map the filtered todos to HTML strings
    // Return the array of HTML strings
}
```

## Exercise 6: Chaining Methods

Create a function that chains multiple array methods:

```javascript
function getActiveTodoTexts(todos) {
    // Chain filter and map:
    // 1. Filter to get only active (incomplete) todos
    // 2. Map to extract just the text property
    // Return an array of text strings
}
```

## Challenge: Build a Filterable Todo List

Create a complete todo list application that:
1. Displays all todos using `map` to create HTML
2. Has filter buttons (All, Active, Completed) using `filter`
3. Shows counts using `reduce`
4. Updates the display when filters change

## Key Takeaways

- `map` transforms each element and returns a new array
- `filter` creates a new array with only matching elements
- `reduce` accumulates values into a single result
- `forEach` performs actions but doesn't return a value
- Methods can be chained: `array.filter(...).map(...)`
- These patterns are essential for React (rendering lists, filtering data)

## Next Steps

- Review [Higher Order Array Functions](/spring2026/resources/js-06-higher-order-array-functions)
- Complete [Higher Order Practice](/spring2026/resources/js-07-higher-order-practice)
- Practice these patterns - you'll use them constantly in React!
