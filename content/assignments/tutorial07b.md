---
title: "Destructuring & Object Copying"
type: "tutorial"
num: 7b
draft: 0
hide_from_list: 1
assigned_date: "2026-03-06"
due_date: "2026-03-16"
heading_max_level: 3
order: 7
points: 6
---

> ## Goal
> Practice using array and object destructuring, and learn how to properly copy objects in JavaScript. These patterns are essential for working with data and will be important when you learn React.

## Setup

1. Within your `tutorial07` folder, create a folder called `02-destructuring` for this exercise.
2. Each exercise will be a separate `.mjs` file that you can run with Node.js.

<blockquote class='reference'>

## Before You Start: Reference

Before working on the exercises, familiarize yourself with these patterns:

{% collapsible %}
### 1. Destructuring
Destructuring allows you to extract values from arrays or properties from objects into separate variables. It's a convenient way to access data without repeatedly using dot notation or bracket notation.

```javascript
// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;  // first = 'red', second = 'green'

// Object destructuring
const student = { name: "Alice", age: 20, major: "CS" };
const { name, age } = student;  // name = 'Alice', age = 20

// Renaming
const person = { firstName: "Bob", yearsOld: 25 };
const { firstName: first, yearsOld: age } = person;  // first = 'Bob', age = 25
```

{% collapsible %}
### 2. Copying Objects and Arrays
The spread operator (`...`) can be used to create copies of arrays and objects. When copying objects, this creates a "shallow" copy<sup><a href="#footnote-1">1</a></sup> where top-level properties are independent, but nested arrays or objects are still shared between the original and copy.


```javascript
// Shallow copy (spread operator)
const original = { name: "Alice", courses: ['CSCI 182'] };
// Top-level properties copied, nested arrays/objects shared
const copy = { ...original };  

// Array copy
const arr = [1, 2, 3];
// New array with same elements
const arrCopy = [...arr];  
```

</blockquote>

## Your Tasks
Please complete the 3 destructuring exercises below:

{% collapsible closed %}
### 1. Spread operator with arrays

Create `exercise1-spread-array.mjs` and use the spread operator to combine arrays:

```javascript
const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'grape'];

// Use spread operator to combine both arrays into a new array
// Print the result: console.log(allFruits);
```

Run: `node exercise1-spread-array.mjs`. Expected output:

{% no-copy %}
```js
['apple', 'banana', 'orange', 'grape']
```

{% collapsible closed %}
### 2. Spread operator with objects

Create `exercise2-spread-object.mjs` and use the spread operator to merge objects:

```javascript
const basicInfo = { name: "Diana", age: 22 };
const contactInfo = { email: "diana@example.com", phone: "555-1234" };

// Use spread operator to merge both objects into a new object
// Print the result: console.log(merged);
```

Run: `node exercise2-spread-object.mjs`. Expected output:

{% no-copy %}
```js
{ name: 'Diana', age: 22, email: 'diana@example.com', phone: '555-1234' }
```

{% collapsible closed %}
### 3. Shallow copy of an object

Create `exercise3-shallow-copy.mjs` and create a shallow copy of an object:

```javascript
const original = {
    name: "Eve",
    age: 20,
    courses: ['CSCI 182', 'CSCI 344']
};

// Use spread operator to create a shallow copy
// Modify the copy's name property
// Modify the copy's courses array (add a new course)
// Print both original and copy to see the difference
```

Run: `node exercise3-shallow-copy.mjs`. Expected output:

{% no-copy %}
```js
// Original: 
{ 
    name: 'Eve', 
    age: 20, 
    courses: [ 'CSCI 182', 'CSCI 344' ] 
}
// Copy: 
{ 
    name: 'Eve Modified', 
    age: 20, 
    courses: [ 'CSCI 182', 'CSCI 344', 'CSCI 370' ] 
}
```

**Note:** Notice that modifying the copy's `courses` array also modifies the original! This is because spread only does a "shallow" copy - nested arrays/objects are still shared.



## Checklist

1. [ ] Completed `exercise1-spread-array.mjs`
1. [ ] Completed `exercise2-spread-object.mjs`
1. [ ] Completed `exercise3-shallow-copy.mjs`

> ## Takeaways
> 
> - **Spread operator:** (`...`) expands arrays/objects for copying, merging, or combining
> - **Shallow copy**: `{...obj}` copies top-level properties only; nested objects/arrays are still shared (modifying nested properties affects the original)
> - **Function parameters**: Destructuring in parameters is common in React (props pattern)

## Next Steps

After completing these exercises, you'll be ready to build the Course Search Interface in Tutorial 7C, where you'll use array methods with DOM manipulation!

<a href="/spring2026/assignments/tutorial07" class="nu-button">← Back to Tutorial 7</a>

---

<span id="footnote-1" class="mt-4"><sup>1</sup></span> **Deep Copying:** If you need a completely independent copy where nested properties are also separate, you can use `JSON.parse(JSON.stringify(obj))`. However, this method only works with objects that can be serialized to JSON (no functions, dates, or circular references). For most cases, shallow copying with the spread operator is sufficient.
