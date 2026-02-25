---
title: "Arrays & Template Literals Exercise"
type: "tutorial"
num: 6b
draft: 0
hide_from_list: 1
assigned_date: "2026-02-27"
due_date: "2026-03-02"
heading_max_level: 3
order: 6
points: 6
---

## 1. Setup
* Create a `tutorial06` folder (if you haven't already). 
* Within `tutorial06`, create another folder called `02-item-list` folder for this exercise
* Within `02-item-list`, create three files:
    * `index.html`
    * `styles.css`
    * `script.js`.

> ## What This Exercise Practices
> - Creating and working with arrays
> - Using `for` loops to iterate through arrays
> - Using template literals (backticks) to create HTML strings
> - Selecting DOM elements with `document.querySelector()`
> - Using `innerHTML` to clear element content
> - Using `insertAdjacentHTML()` to add HTML to the DOM

<!-- collapsible -->
### Starter HTML Code
Copy the HTML starter code into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Item List</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>My Items</h1>
    <ul id="itemList"></ul>
  </div>
</body>
</html>
```

<!-- collapsible -->
### Starter CSS Code
```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

#itemList {
  list-style: none;
  padding: 0;
}

#itemList li {
  padding: 12px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 4px;
  border-left: 4px solid #4CAF50;
}
```

## 2. JavaScript Tasks
Your job is to write the JavaScript functionality from scratch so that your application displays all items from an array in a list. 

<img class="small frame" src="/spring2026/images/tutorials/tutorial06/exercise2.png" />

Please refer to the [JavaScript Cheatsheet](#javascript-cheatsheet) at the bottom of the page, which lists all of the relevant JavaScript language features that you will need to complete the assignment.

<!-- collapsible -->
### 1. Create an array and select the list element
At the top of your JavaScript file:
1. Create a `const` array called `items` with at least 5 string values (e.g., `['Apple', 'Banana', 'Orange', 'Grape', 'Mango']`).
2. Use `document.querySelector()` to select the `#itemList` element and store it in a `const` variable.

> **Tip**: You can check if it worked by printing the array and element to the console using `console.log(items)` and `console.log(itemList)`. View the console in the browser inspector.

<!-- collapsible -->
### 2. Create a function to display items
Create a function called `displayItems()` that:
1. Clears the `itemList` element by setting its `innerHTML` to an empty string (`''`).
2. Uses a `for` loop to iterate through the `items` array (from index `0` to `items.length`).
3. Inside the loop:
   - Use template literals (backticks) to create an HTML string for each list item
   - Add the HTML string to the `itemList` element

> **Tip**: Template literals use backticks (`` ` ``) instead of quotes, and allow you to embed expressions using `${...}`. Examples:
> * `${ myVar }`
> * `${ 2 + 2 }`
> * `${ Math.random() * 5 }`
> * `${ myVar.toString().toUpperCase() }`

<!-- collapsible -->
### 3. Call the function
At the bottom of your JavaScript file, call `displayItems()` to initialize the list when the page loads.

<!-- collapsible -->
### JavaScript Cheatsheet
Here's a list of JavaScript language features you'll need to complete this exercise:

<table>
<thead>
<tr>
<th>Concept</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Arrays</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">const fruits = ['Apple', 'Banana', 'Orange'];
const firstFruit = fruits[0];  // 'Apple'
const length = fruits.length;  // 3
</code></pre>
</td>
</tr>
<tr>
<td><strong>For Loops</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
</code></pre>
</td>
</tr>
<tr>
<td><strong>Template Literals</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">const name = 'Alice';
const greeting = `Hello, ${name}!`;  // 'Hello, Alice!'
const html = `<div>${name}</div>`;
</code></pre>
</td>
</tr>
<tr>
<td><strong>DOM Selection</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">const listEl = document.querySelector('#itemList');
const divEl = document.querySelector('div');
</code></pre>
</td>
</tr>
<tr>
<td><strong>innerHTML</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">element.innerHTML = '';  // Clear content
element.innerHTML = `<p>Hello</p>`;  // Set content
</code></pre>
</td>
</tr>
<tr>
<td><strong>insertAdjacentHTML</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">element.insertAdjacentHTML('beforeend', `<li>Item</li>`);
// 'beforeend' adds content inside the element, at the end
</code></pre>
</td>
</tr>
<tr>
<td><strong>Functions</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">function myFunction() {
  // code here
}

// Call the function
myFunction();
</code></pre>
</td>
</tr>
</tbody>
</table>

## Test
Verify that all items from the array appear in the list when you open the page in your browser.

<a href="/spring2026/assignments/tutorial06" class="nu-button">← Back to Tutorial 6</a>
