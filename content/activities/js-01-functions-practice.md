---
title: "Functions Practice with DOM Manipulation"
type: "activity"
start_date: "2026-02-25"
draft: 0
heading_max_level: 3
ordering: 1
---

## Goal
Practice writing JavaScript functions using DOM manipulation. You'll build on what you learned in Tutorial 5D (Todo List) while focusing on function syntax and concepts.

## Setup

Download the starter files:

<a href="/spring2026/course-files/activities/js-functions-practice-dom.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

After downloading and unzipping, open `index.html` in your browser using Live Server.


## 1. Function Declarations

Create a function called `createTodoItemHTML` that takes `text` as an argument and returns an HTML string for a todo list item. Use template literals (backticks) to create the HTML string.

**Hints:**
- Return a string like `` `<li>${text}</li>` ``
- See the commented test code in `script.js` for examples

## 2. Arrow Functions

Rewrite `createTodoItemHTML` as an arrow function. When you're done, test it with the same function calls from Exercise 1.

## 3. Functions That Return Values

Create a function `cleanTodoText` that validates and returns a cleaned version of todo text. 
* **Hint:** Use `.trim()` to remove whitespace and return an empty string if the text is invalid.


## 4. Functions That Call Other Functions

Create a function `addTodo` that uses both `cleanTodoText` and `createTodoItemHTML`. It should:
- Clean the text using `cleanTodoText()`
- Create the HTML using `createTodoItemHTML()`
- Add it to the todo list using `insertAdjacentHTML('beforeend', htmlString)`


## 5. Default Parameters

Modify `createTodoItemHTML` to have a default class name parameter: `className = 'todo-item'`. Include the class in the template literal: `` `<li class="${className}">${text}</li>` ``

Now you can call it with or without the class. 

## 6. Function Scope

Create a function `addTodoWithCount` that uses a variable `todoCount` declared outside the function. It should use your `addTodo()` function, increment `todoCount`, update the counter display (see `index.html` for the `#todoCount` element), and log the count.

**Hints:**
- Use `document.querySelector('#todoCount')` to select the counter element
- Update its `.textContent` with the new count: `counterElement.textContent = `Todos: ${todoCount}``

## 7. Event Handlers as Functions

Create a function `handleAddClick` that gets the input value, uses your `addTodo()` function, and clears the input field. Then attach it to the button using `addEventListener('click', handleAddClick)`.

## Challenge: Enhance the Todo List

Add these features using functions and template literals:

1. **Delete functionality**: 
   - Modify `createTodoItemHTML` to include a delete button in the HTML
   - Create a `deleteTodo(buttonElement)` function that removes the todo item
   - Use `buttonElement.closest('li')` to find the parent `<li>` and remove it

2. **Toggle complete**: 
   - Create a `toggleComplete(buttonElement)` function that toggles a "completed" class
   - Use `buttonElement.closest('li')` to find the `<li>` and `classList.toggle('completed')`

3. **Clear all**: 
   - Create a `clearAllTodos()` function that sets `innerHTML = ''` on the todo list

> ## Key Takeaways
> 
> - Function declarations are hoisted (can be called before definition)
> - Arrow functions are NOT hoisted
> - Functions can return values or just perform actions
> - Functions can call other functions
> - Default parameters make functions more flexible
> - Variables declared outside functions are accessible inside (global scope)
> - Event handlers are just functions passed to `addEventListener`
