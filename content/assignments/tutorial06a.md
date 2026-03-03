---
title: "Counter Exercise"
type: "tutorial"
num: 6a
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
* Within `tutorial06`, create another folder called `01-counter` folder for this exercise
* Within `01-counter`, create three files:
    * `index.html`
    * `styles.css`
    * `script.js`.

{% collapsible %}
### Starter HTML Code
Copy the HTML starter code into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Counter</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>Counter</h1>
    <div id="counter">0</div>
    <button id="incrementBtn">+</button>
    <button id="decrementBtn">-</button>
    <button id="resetBtn">Reset</button>
  </div>
</body>
</html>
```


{% collapsible %}
### Starter CSS Code
```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
}

.container {
  max-width: 300px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

#counter {
  font-size: 48px;
  font-weight: bold;
  margin: 20px 0;
  color: #4CAF50;
}

button {
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#incrementBtn { background-color: #4CAF50; color: white; }
#decrementBtn { background-color: #f44336; color: white; }
#resetBtn { background-color: #2196F3; color: white; }
```

## 2. JavaScript Tasks
Your job is to write the JavaScript functionality from scratch so that your application behaves as shown below. Please refer to the [JavaScript Cheatsheet](#javascript-cheatsheet) at the bottom of the page, which lists all of the relevant JavaScript language features that you will need to complete the assignment.

<img class="small frame" src="/spring2026/images/tutorials/tutorial06/counter.gif" />

{% collapsible %}
### 1. Create variables and select elements
At the top of your JavaScript file, create global variables to store:
1. The current count (start at `0`).
2. The counter display element (`#counter`).
3. The increment button (`#incrementBtn`).
4. The decrement button (`#decrementBtn`).
5. The reset button (`#resetBtn`).

Use `document.querySelector()` for each element selection.

> **Tip**: You can check if it worked by printing the variable values to the console using `console.log(yourValueHere)`. View the console in the browser inspector.

{% collapsible %}
### 2. Create functions
Create four functions:

| Function | Requirements |
| --- | --- |
| `increment()` | Increase the count by 1, then call `updateDisplay()` |
| `decrement()` | Decrease the count by 1, then call `updateDisplay()` |
| `reset()` | Set the count back to 0, then call `updateDisplay()` |
| `updateDisplay()` | <ul><li>Update the counter display text to the current count.</li><li>Use <code>if / else if / else</code> for color:<ul><li> <code>count</code> is positive: set color to green (<code>#4CAF50</code>)</li><li><code>count</code> is negative: set color to red (<code>#f44336</code>)</li><li><code>count</code> is zero: set color to gray (<code>#666</code>)</li></ul></li></ul> |

{% collapsible %}
### 3. Attach functions to buttons
- Add a `'click'` event listener to each of the three buttons. You can either do this using the JavaScript method or using the HTML method (see the cheatsheet below)

{% collapsible %}
### 4. Run `updateDisplay()` on initialization

Call `updateDisplay()` at the bottom of your JavaScript file to initialize the display.

{% collapsible %}
### JavaScript Cheatsheet <span id="javascript-cheatsheet"></span>
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
<td><strong>Variables</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">let count = 0;  // value can change after assignment
count = 3;
const PI = 3.14159;  // cannot be reassigned  
</code></pre>
</td>
</tr>
<tr>
<td><strong>DOM Selection</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">const btnEl = document.querySelector('#incrementBtn');
const divEl = document.querySelector('div');
const inputEl = document.querySelector('#firstName');
</code></pre>
</td>
</tr>
<tr>
<td><strong>Ways of defining Functions</strong></td>
<td>
<strong>Function declarations:</strong>
<pre><code class="hljs language-javascript" data-no-copy="true">function nameOfFunction(a, b) {
  ...
}</code></pre>
<strong>Arrow functions:</strong>
<pre><code class="hljs language-javascript" data-no-copy="true">const nameOfFunction = (a, b) => {
  ...
}</code></pre>
</td>
</tr>
<tr>
<td><strong>Updating Text or Inner HTML</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">counterEl.textContent = count;
counterEl.innerHTML = `<p>${count}</p>`;</code></pre>
</td>
</tr>
<tr>
<td><strong>Updating Styles</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">counterEl.style.color = '#4CAF50';</code></pre>
</td>
</tr>
<tr>
<td><strong>Conditional Statements</strong></td>
<td>
<pre><code class="hljs language-javascript" data-no-copy="true">if (count > 0) {
  // ...
} else if (count < 0) {
  // ...
} else {
  // ...
}</code></pre>
</td>
</tr>
<tr>
<td><strong>Event Listeners</strong></td>
<td><strong>Option 1: Add an event listener via JavaScript:</strong>
<pre><code class="hljs language-javascript" data-no-copy="true">btnEl.addEventListener('click', myFunction);</code></pre><strong>Option 2: Manually add an event listener via HTML:</strong>
<pre><code class="hljs language-html" data-no-copy="true">&lt;button onclick="myFunction()"&gt;Click me&lt;/button&gt;</code></pre>
</td>
</tr>
<tr>
<td><strong>Operators</strong></td>
<td>
    <ul>
        <li><code>++myVar;</code> Increments the value of myVar by 1</li>
        <li><code>--myVar;</code> Decrements the value of myVar by 1</li>
    </ul>
</td>
</tr>
</tbody>
</table>

## Test
Click the buttons and verify the counter updates and changes color based on the value.


<a href="/spring2026/assignments/tutorial06" class="nu-button">← Back to Tutorial 6</a>
