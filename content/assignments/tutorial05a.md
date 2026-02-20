---
title: "Theme Switcher"
type: "tutorial"
num: 5a
draft: 0
hide_from_list: 1
assigned_date: "2026-02-20"
due_date: "2026-02-23"
heading_max_level: 3
order: 5
points: 6
---

## Goal
Use JavaScript to change the `<body>` class when a user clicks theme buttons.

## Task
Open `01-theme-switcher/styles.css` and scroll to the theme classes (`ocean`, `desert`, and `high-contrast`).

Your job is to make the buttons dynamically change the page theme so it behaves like this:

<img class="large frame" src="/spring2026/images/tutorials/tutorial05/theme-switcher.gif" />

## Hints
1. In `index.js`, create a function named `changeClass()` that takes one parameter (the class name).
2. In `changeClass()`, use `classList` methods to set the `<body>` class to the class name you receive.
3. If the `default` button is clicked, remove all classes from the body (you may need to remove multiple classes).
4. Attach your `changeClass()` function to each button's click event.

## Optional
Create your own custom theme class in `styles.css` and add a new button that applies it.


## Quick Cheatsheet: classList

```javascript
// Add one class
element.classList.add('ocean');

// Add multiple classes
element.classList.add('ocean', 'rounded', 'dark');

// Remove one class
element.classList.remove('ocean');

// Remove multiple classes
element.classList.remove('ocean', 'desert', 'high-contrast');

// Toggle class (add if missing, remove if present)
element.classList.toggle('high-contrast');

// Check if a class exists
element.classList.contains('ocean'); // true / false

// Replace one class with another
element.classList.replace('ocean', 'desert');
```


<a href="/spring2026/assignments/tutorial05" class="nu-button">← Back to Tutorial 5</a>
