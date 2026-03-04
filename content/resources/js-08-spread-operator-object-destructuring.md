---
title: "Object Destructuring & the Spread Operator"
group: "JavaScript Resources"
group_order: 4
order: 8
quicklink: 0
heading_max_level: 3
---

The spread operator and object destructuring are two powerful features in JavaScript that allow you to manipulate arrays and objects more easily. You will commonly see these two techniques in sample code and in the wild, so it's important to understand how they work.

## 1. Spread Operator
The spread operator (`...`) is like a way to "unpack" or "spread out" the contents of an array or object. Think of it like opening a package and taking all the items out. You can <a href="https://dev.to/marinamosti/understanding-the-spread-operator-in-javascript-485j" target="_blank">read more about the spread operator here</a>.

Here are some practical examples:

### 1. With Arrays
```javascript
// Imagine you have a box of fruits
const fruits = ['apple', 'banana', 'orange'];

// The spread operator (...) unpacks all the fruits
console.log(...fruits);
// Prints: apple banana orange

// It's great for combining arrays
const moreFruits = ['grape', 'mango'];
const allFruits = [...fruits, ...moreFruits];
// allFruits is now: ['apple', 'banana', 'orange', 'grape', 'mango']
```

### 2. With Objects
```javascript
// Let's say you have a student's basic info
const basicInfo = {
    name: 'Walter',
    age: 20
};

// And their academic info
const academicInfo = {
    major: 'Computer Science',
    gpa: 3.8
};

// Spread operator combines them into one object
const studentProfile = {...basicInfo, ...academicInfo};
// Result: {name: 'Walter', age: 20, major: 'Computer Science', gpa: 3.8}
```

### 3. Common Use Cases

#### 1. Making Copies

```javascript
// Create a new array with the same elements
const original = [1, 2, 3];
const copy = [...original];

// Changes to copy won't affect original
copy.push(4);
```

#### 2. Adding Elements

```javascript
// Add elements to the beginning or end easily
const numbers = [2, 3, 4];
const newNumbers = [1, ...numbers, 5];
// Result: [1, 2, 3, 4, 5]
```

#### 3. Function Arguments

```javascript
// Spread an array into function arguments
const numbers = [1, 2, 3];
Math.max(...numbers);  // Same as Math.max(1, 2, 3)
```

## 2. Object Destructuring

Object destructuring allows you to get specific items from an object. It's just a convenient shortcut.

### 1. Simple Example
```javascript
// Here's our backpack (object)
const backpack = {
    laptop: 'MacBook',
    water: 'Water Bottle',
    snack: 'Granola Bar'
};

// Old way of getting items:
const laptop = backpack.laptop;
const water = backpack.water;

// New way using destructuring:
const { laptop, water } = backpack;
// Now 'laptop' = 'MacBook' and 'water' = 'Water Bottle'
```

### 2. Renaming Variables
```javascript
// Sometimes you want to call your variables something else
const person = {
    name: 'Alex',
    age: 20
};

// You can rename while destructuring
const { name: fullName, age: yearsOld } = person;
// Now 'fullName' = 'Alex' and 'yearsOld' = 20
```

### 3. Nested Objects
```javascript
// Objects inside objects
const student = {
    name: 'Jamie',
    grades: {
        math: 90,
        science: 85
    }
};

// Getting nested values
const { name, grades: { math, science } } = student;
// name = 'Jamie', math = 90, science = 85
```

### 4. Common Use Cases

#### 1. Function Parameters
```javascript
// Instead of accessing props.name, props.age
function greetStudent({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}

greetStudent({ name: 'Sam', age: 19 });
```

#### 2. Working with API Responses

```javascript
// When you get data from an API
const response = {
    status: 200,
    data: {
        userId: 123,
        username: 'coder123'
    }
};

// Get just what you need
const { data: { username } } = response;
// username = 'coder123'
```

## 3. Practice Exercises

Practice using destructuring and the spread operator with arrays and objects. These patterns are essential for working with data in JavaScript.

### Setup

1. Create a folder for this practice (e.g., `destructuring-practice`).
2. Each exercise will be a separate `.mjs` file that you can run with Node.js.

### Exercise 1: Object Destructuring

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

{% no-copy %}
```text
Alice
25
alice@example.com
```

{% collapsible closed %}
### Show Answer

```javascript
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
};

// Destructure to extract name, age, and email
const { name, age, email } = user;

// Print them to the console
console.log(name);
console.log(age);
console.log(email);
```

### Exercise 2: Array Destructuring

Create `exercise2-array-destructuring.mjs` and use array destructuring to extract the first two colors:

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Use array destructuring to get the first two colors
// Print them to the console
```

Run: `node exercise2-array-destructuring.mjs`. Expected output:

{% no-copy %}
```text
red
green
```

{% collapsible closed %}
### Show Answer

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Array destructuring to get the first two colors
const [first, second] = colors;

// Print them to the console
console.log(first);
console.log(second);
```

### Exercise 3: Spread Operator with Arrays

Create `exercise3-spread-arrays.mjs` and use the spread operator to combine arrays:

```javascript
const todos1 = ['Buy groceries', 'Finish homework'];
const todos2 = ['Call mom', 'Read docs'];

// Use spread operator to combine the arrays
// Print the combined array
```

Run: `node exercise3-spread-arrays.mjs`. Expected output:

{% no-copy %}
```js
['Buy groceries', 'Finish homework', 'Call mom', 'Read docs']
```

{% collapsible closed %}
### Show Answer

```javascript
const todos1 = ['Buy groceries', 'Finish homework'];
const todos2 = ['Call mom', 'Read docs'];

// Use spread operator to combine the arrays
const allTodos = [...todos1, ...todos2];

// Print the combined array
console.log(allTodos);
```

### Exercise 4: Spread Operator with Objects

Create `exercise4-spread-objects.mjs` and use the spread operator to merge objects:

```javascript
const basicInfo = { name: "Bob", age: 30 };
const contactInfo = { email: "bob@example.com", phone: "555-1234" };

// Use spread operator to merge the objects
// Print the merged object
```

Run: `node exercise4-spread-objects.mjs`. Expected output:

{% no-copy %}
```js
{ name: 'Bob', age: 30, email: 'bob@example.com', phone: '555-1234' }
```

{% collapsible closed %}
### Show Answer

```javascript
const basicInfo = { name: "Bob", age: 30 };
const contactInfo = { email: "bob@example.com", phone: "555-1234" };

// Use spread operator to merge the objects
const merged = { ...basicInfo, ...contactInfo };

// Print the merged object
console.log(merged);
```

### Exercise 5: Copying Arrays with Spread

Create `exercise5-copy-array.mjs` and use the spread operator to create a copy of an array:

```javascript
const original = [1, 2, 3, 4, 5];

// Use spread operator to create a copy
// Modify the copy (add a new element)
// Print both arrays to show they are independent
```

Run: `node exercise5-copy-array.mjs`. Expected output:

{% no-copy %}
```js
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6]
```

{% collapsible closed %}
### Show Answer

```javascript
const original = [1, 2, 3, 4, 5];

// Use spread operator to create a copy
const copy = [...original];

// Modify the copy (add a new element)
copy.push(6);

// Print both arrays to show they are independent
console.log(original);
console.log(copy);
```

### Exercise 6: Copying Objects with Spread

Create `exercise6-copy-object.mjs` and use the spread operator to create a copy of an object:

```javascript
const original = { name: "Charlie", age: 28, city: "Boston" };

// Use spread operator to create a copy
// Modify the copy (change the age)
// Print both objects to show they are independent
```

Run: `node exercise6-copy-object.mjs`. Expected output:

{% no-copy %}
```js
{ name: 'Charlie', age: 28, city: 'Boston' }
{ name: 'Charlie', age: 29, city: 'Boston' }
```

{% collapsible closed %}
### Show Answer

```javascript
const original = { name: "Charlie", age: 28, city: "Boston" };

// Use spread operator to create a copy
const copy = { ...original };

// Modify the copy (change the age)
copy.age = 29;

// Print both objects to show they are independent
console.log(original);
console.log(copy);
```

### Exercise 7: Combining Destructuring and Spread

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

{% no-copy %}
```text
Diana
32
{ email: 'diana@example.com', city: 'Seattle', country: 'USA' }
```

{% collapsible closed %}
### Show Answer

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
const { name, age, ...rest } = user;

// Print the extracted values and the rest object
console.log(name);
console.log(age);
console.log(rest);
```

### Key Takeaways

- Destructuring extracts values from objects/arrays into variables
- Spread operator (`...`) expands arrays/objects for copying and merging
- Destructuring in function parameters allows flexible function signatures
- Spread creates shallow copies of arrays and objects
- Rest operator (`...`) collects remaining properties/elements
