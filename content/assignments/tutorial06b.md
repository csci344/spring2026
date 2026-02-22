---
title: "Arrays & Template Literals"
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

## Goal (Quick Exercise - ~10 minutes)
Display a list of items from an array using template literals and loops.

## Setup
Create a folder `02-item-list` inside `tutorial06` with `index.html`, `styles.css`, and `script.js`.

### HTML
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

### CSS
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

## JavaScript Tasks

### 1. Create an array
```javascript
const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
const itemList = document.querySelector('#itemList');
```

### 2. Create a function to display items
Use a loop and template literals:

```javascript
function displayItems() {
  // 1. Clear itemList using innerHTML = ''
  
  // 2. Create a for loop that goes from 0 to items.length
  
  // 3. Inside the loop:
  //    - Use template literals (backticks) to create an HTML string
  //    - The HTML should be: `<li>${items[i]}</li>`
  //    - Store this in a variable (e.g., listItemHTML)
  //    - Use insertAdjacentHTML('beforeend', listItemHTML) to add it to itemList
}
```

### 3. Call the function
```javascript
displayItems();
```

## Test
Verify that all items from the array appear in the list.

<a href="/spring2026/assignments/tutorial06" class="nu-button">← Back to Tutorial 6</a>
