---
title: "Destructuring & Spread Operator Practice"
type: "activity"
start_date: "2026-03-04"
draft: 1
heading_max_level: 3
ordering: 2
---

## Goal
Practice using destructuring and the spread operator with DOM manipulation. These are essential patterns in React for working with props and state.

## Setup

Download the starter files:

<a href="/spring2026/course-files/activities/js-destructuring-practice.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

After downloading and unzipping, open `index.html` in your browser using Live Server.

See the downloads folder for hints.

## Exercise 1: Object Destructuring

Create a function `createUserCard` that takes a user object and uses destructuring to extract properties:

```javascript
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
};

function createUserCard(user) {
    // Use destructuring to extract name, age, and email
    // Return an HTML string for a user card
}
```

**Hints:**
- Use `const { name, age, email } = user;` to destructure
- Use template literals to create the HTML

## Exercise 2: Array Destructuring

Create a function that uses array destructuring:

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

function getFirstTwoColors(colors) {
    // Use array destructuring to get the first two colors
    // Return an object with first and second properties
}
```

## Exercise 3: Spread Operator with Arrays

Create a function that combines arrays using the spread operator:

```javascript
const todos1 = ['Buy groceries', 'Finish homework'];
const todos2 = ['Call mom', 'Read docs'];

function combineTodos(todos1, todos2) {
    // Use spread operator to combine the arrays
    // Return the combined array
}
```

## Exercise 4: Spread Operator with Objects

Create a function that merges user objects:

```javascript
const basicInfo = { name: "Bob", age: 30 };
const contactInfo = { email: "bob@example.com", phone: "555-1234" };

function mergeUserInfo(basicInfo, contactInfo) {
    // Use spread operator to merge the objects
    // Return the merged object
}
```

## Exercise 5: Destructuring Function Parameters

Create a function that uses destructuring in the parameter list:

```javascript
function createTodoItem({ text, completed = false, priority = 'medium' }) {
    // The function receives an object and destructures it in the parameters
    // Use the destructured values to create HTML
    // Return an HTML string
}

// Call it like this:
createTodoItem({ text: "Learn React", completed: false, priority: "high" });
```

## Exercise 6: Spread Operator for DOM Updates

Create a function that uses spread to add todos to a list:

```javascript
const existingTodos = ['Task 1', 'Task 2'];
const newTodos = ['Task 3', 'Task 4'];

function addTodosToList(existingTodos, newTodos) {
    // Use spread operator to combine arrays
    // Use forEach or map to add each todo to the DOM
    // Use insertAdjacentHTML to add items
}
```

## Exercise 7: Nested Destructuring

Create a function that destructures nested objects:

```javascript
const user = {
    name: "Charlie",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    }
};

function getUserLocation(user) {
    // Use nested destructuring to get city from address
    // Return the city name
}
```

## Challenge: Build a Component-Like Function

Create a reusable function that mimics React component patterns:

```javascript
function renderUserCard(props) {
    // Destructure props object
    // Use spread to add default values
    // Return HTML string
    // This pattern is very similar to React components!
}
```

## Key Takeaways

- Destructuring extracts values from objects/arrays into variables
- Spread operator (`...`) expands arrays/objects
- Destructuring in function parameters is common in React (props)
- Spread is used for copying and merging data
- These patterns are essential for React props and state management

## Next Steps

- Review [Spread Operator & Object Destructuring](/spring2026/resources/js-08-spread-operator-object-destructuring)
- Practice these patterns - you'll use them constantly in React!
- Get ready for React components where props are destructured
