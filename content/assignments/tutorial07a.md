---
title: "Higher Order Function Practice"
type: "tutorial"
num: 7a
draft: 0
hide_from_list: 1
assigned_date: "2026-03-06"
due_date: "2026-03-16"
heading_max_level: 3
order: 7
points: 6
---

> ## Goal
> Practice using array methods (`forEach`, `map`, `filter`, `toSorted`) with arrays of objects. These methods are essential for working with data in JavaScript.

## Setup

1. Create a `tutorial07` folder (if you haven't already).
2. Within `tutorial07`, create a folder called `01-array-methods` for this exercise.
3. Each exercise will use a sample list of student objects. You'll copy the data into each file as you work through the exercises.

<blockquote class='reference'>

## Before You Start: Reference

Before working on the exercises, familiarize yourself with these array methods:

<!-- collapsible -->
### 1. forEach
`forEach` invokes a callback function on every element in an array. It doesn't return a value. Rather, it's used for side effects like printing or modifying elements.


<!-- no-copy-button -->
```javascript
const numbers = [1, 2, 3];

// you can defined the callback function in advance:
const myCallback = (num) => {
    console.log(num * 2);  // Prints: 2, 4, 6
}
numbers.forEach(myCallback);

// you can also define the callback function as an anonymous function:
numbers.forEach((num) => {
    console.log(num * 2)
});
```

<!-- collapsible -->
### 2. map
Like `forEach`, `map` invokes a callback function on every element in an array. The callback function returns a value for each element, and these return values become the elements in the new array. The key difference from `forEach` is that `map` returns a new array with the transformed values, while the original array remains unchanged.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);  // [2, 4, 6]
```

<!-- collapsible -->
### 3. filter
`filter` creates a new array with only the elements that pass a test. The callback function must return `true` or `false` for each element. Elements where the callback returns `true` are included in the new array, while elements where it returns `false` are excluded. The original array is not modified.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);  // [2, 4]
```

<!-- collapsible -->
### 4. toSorted
`toSorted` creates a sorted copy of an array. It doesn't modify the original array. Without a comparison function, it sorts elements as strings (which works for numbers but may not give the expected order). You can provide a comparison function that takes two elements (`a` and `b`) and returns a negative number if `a` should come before `b`, zero if they're equal, or a positive number if `a` should come after `b`.

```javascript
const numbers = [3, 1, 4, 2];
const sorted = numbers.toSorted();  // [1, 2, 3, 4]

// Sort objects by a property
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 }
];
const byGrade = students.toSorted((a, b) => b.grade - a.grade);  // Highest first
```

<!-- collapsible -->
### Summary of higher-order functions

Here is a quick guide to each of the higher-order functions used here:

<!-- width-auto -->
| Function | Purpose | Callback Function Requirements |
|----------|---------|-------------------------------|
| `forEach` | Performs an action for each element (side effects like printing) | Takes three parameters: `(element, index, array)`. First parameter (element) is required; `index` and `array` are optional. Returns nothing (used for side effects). |
| `map` | Creates a new array with transformed values | Takes three parameters: `(element, index, array)`. First parameter (element) is required; `index` and `array` are optional. Must return a value that becomes an element in the new array. |
| `filter` | Creates a new array with only elements that pass a test | Takes three parameters: `(element, index, array)`. First parameter (element) is required; `index` and `array` are optional. Must return `true` (include) or `false` (exclude). |
| `toSorted` | Creates a sorted copy of an array | Optional. If provided, takes two parameters (`a`, `b`). Must return a negative number (a before b), zero (equal), or positive number (a after b). |

</blockquote>

## Your Tasks
Please complete the following 9 exercises. When you're done, you should have 9 `*.mjs` files inside of `tutorial07/01-array-methods`.

<!-- collapsible closed -->
### 1. Use `forEach` to display student names to the console

Create `exercise1-foreach.mjs` and use `forEach` to print each student's name:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise1-foreach.mjs`. Expected output:

<!-- no-copy-button -->
```text
Alice
Bob
Charlie
Diana
Eve
```


<!-- collapsible closed -->
### 2. Use `map` to create a new array of strings with just students names

Create `exercise2-map.mjs` and use `map` to create an array of student names, then print it:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise2-map.mjs`. Expected output:

<!-- no-copy-button -->
```text
["Alice", "Bob", "Charlie", "Diana", "Eve"]
```

<!-- collapsible closed -->
### 3. Use `map` to format student information

Create `exercise3-map-format.mjs` and use `map` to create an array of HTML strings that look like this:

<!-- no-copy-button -->
```html
<p><strong>Alice:</strong> Computer Science</p>
```

Code:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
// Hint: Use map + build a template literal (backticks) in the callback function
```

Run: `node exercise3-map-format.mjs`. Expected output:

<!-- no-copy-button -->
```js
[
    "<p><strong>Alice:</strong> Computer Science</p>",
    "<p><strong>Bob:</strong> Mathematics</p>",
    "<p><strong>Charlie:</strong> Computer Science</p>",
    "<p><strong>Diana:</strong> Physics</p>",
    "<p><strong>Eve:</strong> Computer Science</p>"
]
```

> **Note:** In a real web application, you could use this array of HTML strings to display the information in the DOM. For example:
>
> ```javascript
> // After creating the array with map (stored in a variable like htmlStrings)
> const containerEl = document.querySelector('#student-list');
> containerEl.innerHTML = htmlStrings.join('');
> ```
>
> This would insert all the HTML strings into the container element, displaying each student's information as formatted HTML on the page.


<!-- collapsible closed -->
### 4. Use `filter` to find students by major

Create `exercise4-filter-major.mjs` and use `filter` to find all Computer Science majors, then print the array:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise4-filter-major.mjs`. Expected output:

<!-- no-copy-button -->
```js
[
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
]
```


<!-- collapsible closed -->
### 5. Use `filter` to find younger students

Create `exercise5-filter-age.mjs` and use `filter` to find all students age 20 or younger, then print the array:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise5-filter-age.mjs`. Expected output:

<!-- no-copy-button -->
```js
[
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
]
```


<!-- collapsible closed -->
### 6. Use `toSorted` to sort students by major

Create `exercise6-sorted.mjs` and use `toSorted` to sort students alphabetically by major, then print the sorted array:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise6-sorted.mjs`. Expected output:

<!-- no-copy-button -->
```js
[
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" }
]
```

<!-- collapsible closed -->
### 7. Use `toSorted` to sort by grade

Create `exercise7-sorted-grade.mjs` and use `toSorted` to sort students by grade (highest first), then print the sorted array:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise7-sorted-grade.mjs`. Expected output:

<!-- no-copy-button -->
```js
[
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" },
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" }
]
```


<!-- collapsible closed -->
### 8. Combine methods - filter and map

Create `exercise8-combine.mjs` and chain `filter` and `map`: filter for Computer Science majors with grade >= 85, then map to extract names:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
```

Run: `node exercise8-combine.mjs`. Expected output:

<!-- no-copy-button -->
```js
[ "Alice", "Eve" ]
```


<!-- collapsible closed -->
### 9. Challenge - complex data processing

Create `exercise9-challenge.mjs` and chain `filter`, `toSorted`, and `map`: filter for Computer Science majors, sort by grade (lowest first), then format as `"<p><strong>NAME:</strong> GRADE (MAJOR)</p>`:

```javascript
const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here (hint: use template literals)
```

Run: `node exercise9-challenge.mjs`. Expected output:

<!-- no-copy-button -->
```js
[
    "<p><strong>Charlie:</strong> 78 (Computer Science)</p>",
    "<p><strong>Alice:</strong> 85 (Computer Science)</p>",
    "<p><strong>Eve:</strong> 88 (Computer Science)</p>"
]
```


## Checklist

Because these are JS files, you do not need to link them to your homepage, but you do need to complete them and ensure that you have committed and pushed them to your GitHub repository.

1. [ ] Completed `exercise1-foreach.mjs`
1. [ ] Completed `exercise2-map.mjs`
1. [ ] Completed `exercise3-map-format.mjs`
1. [ ] Completed `exercise4-filter-major.mjs`
1. [ ] Completed `exercise5-filter-age.mjs`
1. [ ] Completed `exercise6-sorted.mjs`
1. [ ] Completed `exercise7-sorted-grade.mjs`
1. [ ] Completed `exercise8-combine.mjs`
1. [ ] Completed `exercise9-challenge.mjs`


> ## Takeaways
> 
> - `forEach` performs an action for each element but doesn't return a value
> - `map` transforms each element and returns a new array
> - `filter` creates a new array with only matching elements
> - `toSorted` creates a sorted copy of an array (doesn't modify the original)
> - Methods can be chained: `array.filter(...).map(...).toSorted(...)`
> - These patterns are essential for working with data in JavaScript

## Next Steps

After completing these exercises, you'll be ready to practice destructuring and object copying in Tutorial 7B!

<a href="/spring2026/assignments/tutorial07" class="nu-button">← Back to Tutorial 7</a>
