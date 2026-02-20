---
title: "Functions Practice with p5.js"
type: "activity"
start_date: "2026-02-23"
draft: 1
heading_max_level: 3
ordering: 2
---

## Goal
Practice writing JavaScript functions using p5.js to create visual output. This helps you see immediate results from your code.

## Setup

Download the starter files:

<a href="/spring2026/course-files/activities/js-functions-practice.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

After downloading and unzipping, open `index.html` in your browser using Live Server.

## Exercises

### Exercise 1: Function Declarations

Create a function called `drawCircle` that draws a circle at a given position with a given size and color.

**Function signature:**
```javascript
function drawCircle(x, y, size, color) {
    // Your code here
}
```

**Test your function:**
```javascript
function setup() {
    createCanvas(800, 600);
    drawCircle(100, 100, 50, '#ff0000');
    drawCircle(200, 150, 75, '#00ff00');
    drawCircle(300, 200, 100, '#0000ff');
    drawGrid(800, 600);
}
```

**Hints:**
- Use p5.js's `fill()` function to set the color
- Use `circle(x, y, size)` to draw the circle
- Don't forget to call `noFill()` if you want an outline only

### Exercise 2: Arrow Functions

Rewrite `drawCircle` as an arrow function:

```javascript
const drawCircle = (x, y, size, color) => {
    // Your code here
};
```

Test it with the same function calls from Exercise 1.

### Exercise 3: Functions That Return Values

Create a function that calculates and returns the distance between two points:

```javascript
function distance(x1, y1, x2, y2) {
    // Calculate distance using: sqrt((x2-x1)^2 + (y2-y1)^2)
    // Return the result
}
```

**Test your function:**
```javascript
function setup() {
    createCanvas(800, 600);
    
    const d = distance(0, 0, 3, 4);
    console.log("Distance:", d);  // Should print 5
    
    // Draw a line between the points
    line(0, 0, 3, 4);
    drawGrid(800, 600);
}
```

**Hints:**
- Use `Math.sqrt()` for square root
- Use `Math.pow()` or `**` for exponentiation

### Exercise 4: Functions That Call Other Functions

Create a function `drawTarget` that draws a target (concentric circles) using your `drawCircle` function:

```javascript
function drawTarget(x, y, size, color1, color2) {
    // Draw multiple circles of decreasing size
    // Alternate between color1 and color2
}
```

**Test your function:**
```javascript
function setup() {
    createCanvas(800, 600);
    drawTarget(200, 200, 100, '#ff0000', '#ffffff');
    drawTarget(500, 300, 150, '#0000ff', '#ffff00');
    drawGrid(800, 600);
}
```

### Exercise 5: Default Parameters

Modify `drawCircle` to have a default color of `'#000000'` (black):

```javascript
function drawCircle(x, y, size, color = '#000000') {
    // Your code here
}
```

Now you can call it with or without the color:
```javascript
drawCircle(100, 100, 50);        // Uses default black
drawCircle(200, 200, 75, '#ff0000');  // Uses red
```

### Exercise 6: Function Scope

Create a function that uses a variable declared outside the function:

```javascript
let circleCount = 0;

function drawAndCountCircle(x, y, size, color) {
    // Draw a circle
    // Increment circleCount
    // Log the count
}
```

**Test:**
```javascript
function setup() {
    createCanvas(800, 600);
    drawAndCountCircle(100, 100, 50, '#ff0000');
    drawAndCountCircle(200, 200, 75, '#00ff00');
    drawAndCountCircle(300, 300, 100, '#0000ff');
    console.log("Total circles drawn:", circleCount);  // Should print 3
    drawGrid(800, 600);
}
```

## Challenge: Create Your Own Function

Create a function that draws something interesting (a house, a face, a pattern, etc.). Your function should:

1. Take at least 3 parameters
2. Use other functions you've created
3. Draw something visually interesting

Share your creation with the class!

## Key Takeaways

- Function declarations are hoisted (can be called before definition)
- Arrow functions are NOT hoisted
- Functions can return values or just perform actions
- Functions can call other functions
- Default parameters make functions more flexible
- Variables declared outside functions are accessible inside (global scope)

## Next Steps

- Complete the [Control Structures Practice](js-control-practice) activity
- Review function concepts in [Basic Programming in JavaScript](/spring2026/resources/js-03-basic-programming#2-expressions--statements)
