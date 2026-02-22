---
title: "Functions & Control Structures"
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

## Goal (Quick Exercise - ~10 minutes)
Build a simple counter that practices functions and if/else statements.

## Setup
Create a folder `01-counter` inside `tutorial06` with `index.html`, `styles.css`, and `script.js`.

### HTML
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

### CSS
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

## JavaScript Tasks

### 1. Create variables and select elements
```javascript
let count = 0;
const counterDisplay = document.querySelector('#counter');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const resetBtn = document.querySelector('#resetBtn');
```

### 2. Create functions
```javascript
function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  counterDisplay.textContent = count;
  
  // Use if/else to change color
  if (count > 0) {
    counterDisplay.style.color = '#4CAF50'; // green
  } else if (count < 0) {
    counterDisplay.style.color = '#f44336'; // red
  } else {
    counterDisplay.style.color = '#666'; // gray
  }
}
```

### 3. Attach functions to buttons
```javascript
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDisplay();
```

## Test
Click the buttons and verify the counter updates and changes color based on the value.

<a href="/spring2026/assignments/tutorial06" class="nu-button">← Back to Tutorial 6</a>
