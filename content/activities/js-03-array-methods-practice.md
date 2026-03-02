---
title: "Array Methods Practice"
type: "activity"
start_date: "2026-03-02"
draft: 0
ordering: 1
---

## Goal
Practice using array methods (`map`, `filter`, `forEach`, `join`) with arrays of numbers, strings, and objects. These methods are essential for working with data in JavaScript.


## Setup

Create a new folder called `js-array-methods-practice` in your `csci344` directory. We'll create several `.mjs` files to practice.

## Cheatsheet
| Function | Purpose | Callback Function Requirements |
|----------|---------|-------------------------------|
| `forEach` | Performs an action for each element (side effects like printing) | Takes three parameters: `(element, index, array)`. First parameter (element) is required; `index` and `array` are optional. Returns nothing (used for side effects). |
| `map` | Creates a new array with transformed values | Takes three parameters: `(element, index, array)`. First parameter (element) is required; `index` and `array` are optional. Must return a value that becomes an element in the new array. |
| `filter` | Creates a new array with only elements that pass a test | Takes three parameters: `(element, index, array)`. First parameter (element) is required; `index` and `array` are optional. Must return `true` (include) or `false` (exclude). |
| `toSorted` | Creates a sorted copy of an array | Optional. If provided, takes two parameters (`a`, `b`). Must return a negative number (a before b), zero (equal), or positive number (a after b). |


## Exercise 1: Using `map` with Numbers

Create a file called `map-numbers.mjs`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Use map to create a new array where each number is doubled
// Your code here

// Test your code
console.log(doubled);  // Should print [2, 4, 6, 8, 10]
```

Run it with: `node map-numbers.mjs`

<!-- collapsible closed -->
### Show Solution

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);  // [2, 4, 6, 8, 10]
```

## Exercise 2: Using `map` with Strings

Create a file called `map-strings.mjs`:

```javascript
const words = ["hello", "world", "javascript", "practice"];

// Use map to create a new array where each word is converted to uppercase
// Your code here

// Test your code
console.log(upperWords);  
// Should print ["HELLO", "WORLD", "JAVASCRIPT", "PRACTICE"]
```

<!-- collapsible closed -->
### Show Solution

```javascript
const words = ["hello", "world", "javascript", "practice"];

const upperWords = words.map(word => word.toUpperCase());

console.log(upperWords);  

// should print:
// ["HELLO", "WORLD", "JAVASCRIPT", "PRACTICE"]
```

## Exercise 3: Using `map` with Objects

Create a file called `map-objects.mjs`:

```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Use map to create a new array with just the names
// Your code here

// Test your code
console.log(names);  
// Should print ["Alice", "Bob", "Charlie"]
```

<!-- collapsible closed -->
### Show Solution

```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = people.map(person => person.name);

console.log(names);  // ["Alice", "Bob", "Charlie"]
```

## Exercise 4: Using `filter` with Numbers

Create a file called `filter-numbers.mjs`:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to create a new array with only even numbers
// Your code here

// Test your code
console.log(evens);  // Should print [2, 4, 6, 8, 10]
```

<!-- collapsible closed -->
### Show Solution

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens);  // [2, 4, 6, 8, 10]
```

## Exercise 5: Using `filter` with Strings

Create a file called `filter-strings.mjs`:

```javascript
const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Use filter to create a new array with only words longer than 5 characters
// Your code here

// Test your code
console.log(longWords);  // Should print ["banana", "cherry", "elderberry"]
```

<!-- collapsible closed -->
### Show Solution

```javascript
const words = ["apple", "banana", "cherry", "date", "elderberry"];

const longWords = words.filter(word => word.length > 5);

console.log(longWords);  // ["banana", "cherry", "elderberry"]
```

## Exercise 6: Using `filter` with Objects

Create a file called `filter-objects.mjs`:

```javascript
const todos = [
    { text: "Buy groceries", completed: false },
    { text: "Finish homework", completed: true },
    { text: "Call mom", completed: false },
    { text: "Read JavaScript documentation", completed: true },
    { text: "Go to the gym", completed: false },
    { text: "Write blog post", completed: true },
    { text: "Clean the house", completed: false },
    { text: "Prepare presentation", completed: true },
    { text: "Walk the dog", completed: false },
    { text: "Review code changes", completed: true }
];

// Use filter to create a new array with only completed todos
// Your code here

// Test your code
console.log(completedTodos);  // Should print an array with 5 completed todos
```

<!-- collapsible closed -->
### Show Solution

```javascript
const todos = [
    { text: "Buy groceries", completed: false },
    { text: "Finish homework", completed: true },
    { text: "Call mom", completed: false },
    { text: "Read JavaScript documentation", completed: true },
    { text: "Go to the gym", completed: false },
    { text: "Write blog post", completed: true },
    { text: "Clean the house", completed: false },
    { text: "Prepare presentation", completed: true },
    { text: "Walk the dog", completed: false },
    { text: "Review code changes", completed: true }
];

const completedTodos = todos.filter(todo => todo.completed === true);

console.log(completedTodos);  // Array with 5 completed todos
```

## Exercise 7: Using `forEach` with Numbers

Create a file called `forEach-numbers.mjs`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Use forEach to print each number multiplied by 3
// Your code here
```

<!-- collapsible closed -->
### Show Solution

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num * 3);
});
// Prints: 3, 6, 9, 12, 15
```

## Exercise 8: Using `forEach` with Strings

Create a file called `forEach-strings.mjs`:

```javascript
const fruits = ["apple", "banana", "cherry"];

// Use forEach to print each fruit with its index
// Format: "0: apple", "1: banana", etc.
// Your code here
```

<!-- collapsible closed -->
### Show Solution

```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Prints: "0: apple", "1: banana", "2: cherry"
```

## Exercise 9: Using `forEach` with Objects

Create a file called `forEach-objects.mjs`:

```javascript
const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

// Use forEach to print each product's name and price
// Format: "Laptop: $999", etc.
// Your code here
```

<!-- collapsible closed -->
### Show Solution

```javascript
const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

products.forEach(product => {
    console.log(`${product.name}: $${product.price}`);
});
// Prints: "Laptop: $999", "Mouse: $25", "Keyboard: $75"
```

## Exercise 10: Using `join` with Strings

Create a file called `join-strings.mjs`:

```javascript
const words = ["Hello", "world", "from", "JavaScript"];

// Use join to create a single string with spaces between words
// Your code here

// Test your code
console.log(sentence);  // Should print "Hello world from JavaScript"
```

<!-- collapsible closed -->
### Show Solution

```javascript
const words = ["Hello", "world", "from", "JavaScript"];

const sentence = words.join(" ");

console.log(sentence);  // "Hello world from JavaScript"
```

## Exercise 11: Using `join` with Different Separators

Create a file called `join-separators.mjs`:

```javascript
const items = ["apple", "banana", "cherry"];

// Use join with a comma and space
const commaList = items.join(", ");
console.log(commaList);  // Should print "apple, banana, cherry"

// Use join with a dash
const dashList = items.join("-");
console.log(dashList);  // Should print "apple-banana-cherry"

// Use join with no separator (empty string)
const noSeparator = items.join("");
console.log(noSeparator);  // Should print "applebananacherry"
```

## Exercise 12: Combining Methods - Chaining

Create a file called `chaining.mjs`:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain filter and map:
// 1. Filter to get only even numbers
// 2. Map to multiply each by 3
// Your code here

// Test your code
console.log(result);  // Should print [6, 12, 18, 24, 30]
```

<!-- collapsible closed -->
### Show Solution

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 3);

console.log(result);  // [6, 12, 18, 24, 30]
```

## Challenge: Complex Data Processing

Create a file called `challenge.mjs`:

```javascript
const students = [
    { name: "Alice", score: 85, grade: "B" },
    { name: "Bob", score: 92, grade: "A" },
    { name: "Charlie", score: 78, grade: "C" },
    { name: "Diana", score: 95, grade: "A" },
    { name: "Eve", score: 88, grade: "B" }
];

// 1. Use filter to get only students with grade "A"
// 2. Use map to get just their names
// 3. Use join to create a comma-separated string of names
// Your code here

// Test your code
console.log(gradeANames);  // Should print "Bob, Diana"
```

<!-- collapsible closed -->
### Show Solution

```javascript
const students = [
    { name: "Alice", score: 85, grade: "B" },
    { name: "Bob", score: 92, grade: "A" },
    { name: "Charlie", score: 78, grade: "C" },
    { name: "Diana", score: 95, grade: "A" },
    { name: "Eve", score: 88, grade: "B" }
];

const gradeANames = students
    .filter(student => student.grade === "A")
    .map(student => student.name)
    .join(", ");

console.log(gradeANames);  // "Bob, Diana"
```

## Key Takeaways

- `map` transforms each element and returns a new array
- `filter` creates a new array with only matching elements
- `forEach` performs actions for each element but doesn't return a value
- `join` combines array elements into a single string with a separator
- Methods can be chained: `array.filter(...).map(...).join(...)`
- These patterns are essential for working with data in JavaScript

## Additional Practice

For more practice problems, see:
- [Higher Order Array Functions](/spring2026/resources/js-06-higher-order-array-functions)
- [Higher Order Practice](/spring2026/resources/js-07-higher-order-practice)
