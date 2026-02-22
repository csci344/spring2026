// ============================================
// Exercise 1: Function Declarations
// ============================================

// TODO: Create a function called drawCircle that draws a circle
// Parameters: x (number), y (number), size (number), color (string)
// Hints:
//   - Use p5.js's fill() function to set the color
//   - Use circle(x, y, size) to draw the circle
function drawCircle(x, y, size, color) {
    // First set the fill color
    // Then draw the circle
}

// Helper function to draw a grid (for visual reference)
// This is already implemented - you don't need to modify it
function drawGrid(width, height) {
    stroke(200);
    strokeWeight(1);
    for (let i = 0; i <= width; i += 50) {
        line(i, 0, i, height);
    }
    for (let i = 0; i <= height; i += 50) {
        line(0, i, width, i);
    }
}

// ============================================
// Exercise 2: Arrow Functions
// ============================================

// TODO: Rewrite drawCircle as an arrow function


// ============================================
// Exercise 3: Functions That Return Values
// ============================================

// TODO: Create a function that calculates and returns the distance between two points
// Parameters: x1, y1, x2, y2 (all numbers)
// Formula: sqrt((x2-x1)^2 + (y2-y1)^2)  // uses the Pythagorean Theorem
// Hints:
//   - Use Math.sqrt() for square root
//   - Use Math.pow() or ** for exponentiation
//   - Don't forget to return the result!
function distance(x1, y1, x2, y2) {
    // Your code here
    // Calculate the distance and return it
}

// ============================================
// Exercise 4: Functions That Call Other Functions
// ============================================

// TODO: Create a function that draws a target (concentric circles)
// Parameters: x, y, size, color1, color2
// This function should:
//   - Draw multiple circles of decreasing size
//   - Alternate between color1 and color2
//   - Use your drawCircle function from Exercise 1
// Hints:
//   - Use a loop (while or for) to draw multiple circles
//   - Decrease the size each iteration
//   - Use a boolean variable to alternate colors
function drawTarget(x, y, size, color1, color2) {
    // Your code here
    // Draw concentric circles using drawCircle()
}

// ============================================
// Exercise 5: Default Parameters
// ============================================

// TODO: Modify drawCircle to have a default color of '#000000' (black)
// Add a default parameter to the color parameter
// Syntax: function name(param1, param2, paramWithDefault = defaultValue) { ... }
// You can modify the drawCircle function above, or create a new one here
function drawCircleWithDefault(x, y, size, color = '#000000') {
    // Your code here
    // This should work the same as drawCircle, but color has a default value
}

// ============================================
// Exercise 6: Function Scope
// ============================================

// Global variable - accessible inside functions
let circleCount = 0;

// TODO: Create a function that uses the global circleCount variable
// This function should:
//   - Draw a circle using drawCircle()
//   - Increment circleCount
//   - Log the count to the console
function drawAndCountCircle(x, y, size, color) {
    // Your code here
    // 1. Draw a circle
    // 2. Increment circleCount
    // 3. Log the count (optional: include position info)
}

// ============================================
// Challenge: Create Your Own Function
// ============================================

// TODO: Create your own function that draws something interesting!
// Requirements:
//   1. Take at least 3 parameters
//   2. Use other functions you've created (like drawCircle)
//   3. Draw something visually interesting (house, face, pattern, etc.)
// 
// Example ideas:
//   - drawHouse(x, y, width, height, roofColor, wallColor, doorColor)
//   - drawFace(x, y, size, eyeColor, mouthExpression)
//   - drawFlower(x, y, size, petalColor, centerColor)
//   - drawPattern(x, y, size, color1, color2, repetitions)
function drawYourOwn(x, y, size, color1, color2, color3) {
    // Your creative code here!
    // Use drawCircle, rect, triangle, or other p5.js functions
}

// ============================================
// p5.js Setup and Draw Functions
// ============================================

function setup() {
    const canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');
    background(255);
    
    // ============================================
    // Exercise 1: Function Declarations
    // ============================================
    // Uncomment these lines after you implement drawCircle
    // drawCircle(100, 100, 50, '#ff0000');
    // drawCircle(200, 150, 75, '#00ff00');
    // drawCircle(300, 200, 100, '#0000ff');
    
    // ============================================
    // Exercise 3: Functions That Return Values
    // ============================================
    // Uncomment these lines after you implement distance
    // const d = distance(0, 0, 3, 4);
    // console.log("Distance:", d); // Should print 5
    // 
    // // Draw a line between the points (scaled up for visibility)
    // stroke(0);
    // strokeWeight(2);
    // line(0, 0, 3 * 20, 4 * 20);
    
    // ============================================
    // Exercise 4: Functions That Call Other Functions
    // ============================================
    // Uncomment these lines after you implement drawTarget
    // drawTarget(200, 200, 100, '#ff0000', '#ffffff');
    // drawTarget(500, 300, 150, '#0000ff', '#ffff00');
    
    // ============================================
    // Exercise 5: Default Parameters
    // ============================================
    // Uncomment these lines after you implement drawCircleWithDefault
    // drawCircleWithDefault(600, 100, 50);        // Uses default black
    // drawCircleWithDefault(700, 100, 75, '#ff0000');  // Uses red
    
    // ============================================
    // Exercise 6: Function Scope
    // ============================================
    // Uncomment these lines after you implement drawAndCountCircle
    // circleCount = 0; // Reset counter
    // drawAndCountCircle(100, 100, 50, '#ff0000');
    // drawAndCountCircle(200, 200, 75, '#00ff00');
    // drawAndCountCircle(300, 300, 100, '#0000ff');
    // console.log("Total circles drawn:", circleCount); // Should print 3
    
    // ============================================
    // Challenge: Create Your Own Function
    // ============================================
    // Uncomment and modify after you create your own function
    // drawYourOwn(400, 300, 100, '#ff0000', '#00ff00', '#0000ff');
    
    // Draw grid for reference
    drawGrid(800, 600);
}

function draw() {
    // Empty - we're doing everything in setup() for this exercise
    // You can add animation here later if you want!
}
