---
title: "Destructuring & Spread Operator Practice"
type: "activity"
start_date: "2026-03-04"
draft: 1
heading_max_level: 3
ordering: 2
---

## Goal
Practice using destructuring and the spread operator with arrays and objects. These patterns are essential for working with data in JavaScript.

## Setup

1. Create a folder for this activity (e.g., `destructuring-practice`).
2. Each exercise will be a separate `.mjs` file that you can run with Node.js.



## Exercise 1: Object Destructuring

Create `exercise1-object-destructuring.mjs` and use destructuring to extract properties from a user object:

```javascript
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
};

// Use destructuring to extract name, age, and email
// Print them to the console
```

Run: `node exercise1-object-destructuring.mjs`. Expected output:

<!-- no-copy-button -->
```text
Alice
25
alice@example.com
```

## Exercise 2: Array Destructuring

Create `exercise2-array-destructuring.mjs` and use array destructuring to extract the first two colors:

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Use array destructuring to get the first two colors
// Print them to the console
```

Run: `node exercise2-array-destructuring.mjs`. Expected output:

<!-- no-copy-button -->
```text
red
green
```

## Exercise 3: Spread Operator with Arrays

Create `exercise3-spread-arrays.mjs` and use the spread operator to combine arrays:

```javascript
const todos1 = ['Buy groceries', 'Finish homework'];
const todos2 = ['Call mom', 'Read docs'];

// Use spread operator to combine the arrays
// Print the combined array
```

Run: `node exercise3-spread-arrays.mjs`. Expected output:

<!-- no-copy-button -->
```js
['Buy groceries', 'Finish homework', 'Call mom', 'Read docs']
```

## Exercise 4: Spread Operator with Objects

Create `exercise4-spread-objects.mjs` and use the spread operator to merge objects:

```javascript
const basicInfo = { name: "Bob", age: 30 };
const contactInfo = { email: "bob@example.com", phone: "555-1234" };

// Use spread operator to merge the objects
// Print the merged object
```

Run: `node exercise4-spread-objects.mjs`. Expected output:

<!-- no-copy-button -->
```js
{ name: 'Bob', age: 30, email: 'bob@example.com', phone: '555-1234' }
```

## Exercise 5: Copying Arrays with Spread

Create `exercise5-copy-array.mjs` and use the spread operator to create a copy of an array:

```javascript
const original = [1, 2, 3, 4, 5];

// Use spread operator to create a copy
// Modify the copy (add a new element)
// Print both arrays to show they are independent
```

Run: `node exercise5-copy-array.mjs`. Expected output:

<!-- no-copy-button -->
```js
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6]
```

## Exercise 6: Copying Objects with Spread

Create `exercise6-copy-object.mjs` and use the spread operator to create a copy of an object:

```javascript
const original = { name: "Charlie", age: 28, city: "Boston" };

// Use spread operator to create a copy
// Modify the copy (change the age)
// Print both objects to show they are independent
```

Run: `node exercise6-copy-object.mjs`. Expected output:

<!-- no-copy-button -->
```js
{ name: 'Charlie', age: 28, city: 'Boston' }
{ name: 'Charlie', age: 29, city: 'Boston' }
```

## Exercise 7: Combining Destructuring and Spread

Create `exercise7-combine.mjs` and combine destructuring with spread to extract some properties and keep the rest:

```javascript
const user = {
    name: "Diana",
    age: 32,
    email: "diana@example.com",
    city: "Seattle",
    country: "USA"
};

// Use destructuring to extract name and age
// Use rest operator (...) to collect the remaining properties
// Print the extracted values and the rest object
```

Run: `node exercise7-combine.mjs`. Expected output:

<!-- no-copy-button -->
```text
Diana
32
{ email: 'diana@example.com', city: 'Seattle', country: 'USA' }
```

## Checklist

1. [ ] Completed `exercise1-object-destructuring.mjs`
2. [ ] Completed `exercise2-array-destructuring.mjs`
3. [ ] Completed `exercise3-spread-arrays.mjs`
4. [ ] Completed `exercise4-spread-objects.mjs`
5. [ ] Completed `exercise5-copy-array.mjs`
6. [ ] Completed `exercise6-copy-object.mjs`
7. [ ] Completed `exercise7-combine.mjs`

## Key Takeaways

- Destructuring extracts values from objects/arrays into variables
- Spread operator (`...`) expands arrays/objects for copying and merging
- Destructuring in function parameters allows flexible function signatures
- Spread creates shallow copies of arrays and objects
- Rest operator (`...`) collects remaining properties/elements

## Next Steps

- Review [Spread Operator & Object Destructuring](/spring2026/resources/js-08-spread-operator-object-destructuring)
- Practice these patterns - they're essential for working with data in JavaScript
