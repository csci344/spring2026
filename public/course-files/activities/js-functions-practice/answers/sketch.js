// ============================================
// Exercise 1: Function Declarations
// ============================================

function drawCircle(x, y, size, color) {
    fill(color);
    circle(x, y, size);
}

// Helper function to draw a grid (for visual reference)
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

// Arrow function version (commented out since we're using the declaration version)
// const drawCircle = (x, y, size, color) => {
//     fill(color);
//     circle(x, y, size);
// };

// ============================================
// Exercise 3: Functions That Return Values
// ============================================

function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
    // Alternative: return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    // Alternative: return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// ============================================
// Exercise 4: Functions That Call Other Functions
// ============================================

function drawTarget(x, y, size, color1, color2) {
    // Draw concentric circles, alternating colors
    let currentSize = size;
    let useColor1 = true;
    
    while (currentSize > 0) {
        if (useColor1) {
            drawCircle(x, y, currentSize, color1);
        } else {
            drawCircle(x, y, currentSize, color2);
        }
        currentSize -= size / 5; // Decrease by 20% each time
        useColor1 = !useColor1; // Alternate colors
    }
}

// ============================================
// Exercise 5: Default Parameters
// ============================================

// Modified drawCircle with default parameter
function drawCircleWithDefault(x, y, size, color = '#000000') {
    fill(color);
    circle(x, y, size);
}

// ============================================
// Exercise 6: Function Scope
// ============================================

let circleCount = 0;

function drawAndCountCircle(x, y, size, color) {
    drawCircle(x, y, size, color);
    circleCount++;
    console.log(`Circle ${circleCount} drawn at (${x}, ${y})`);
}

// ============================================
// Challenge: Create Your Own Function
// ============================================

function drawHouse(x, y, width, height, roofColor, wallColor, doorColor) {
    // Draw walls
    fill(wallColor);
    rect(x, y + height * 0.4, width, height * 0.6);
    
    // Draw roof (triangle)
    fill(roofColor);
    triangle(
        x, y + height * 0.4,           // Top left
        x + width / 2, y,               // Top center (peak)
        x + width, y + height * 0.4     // Top right
    );
    
    // Draw door
    fill(doorColor);
    const doorWidth = width * 0.2;
    const doorHeight = height * 0.3;
    rect(x + width * 0.4, y + height * 0.7, doorWidth, doorHeight);
    
    // Draw windows
    fill('#87CEEB'); // Sky blue
    const windowSize = width * 0.15;
    // Left window
    rect(x + width * 0.15, y + height * 0.5, windowSize, windowSize);
    // Right window
    rect(x + width * 0.7, y + height * 0.5, windowSize, windowSize);
}

// ============================================
// p5.js Setup and Draw Functions
// ============================================

function setup() {
    const canvas = createCanvas(1200, 800);
    canvas.parent('sketch-container');
    background(255);
    
    // Exercise 1: Function Declarations
    console.log("=== Exercise 1: Function Declarations ===");
    drawCircle(100, 100, 50, '#ff0000');
    drawCircle(200, 150, 75, '#00ff00');
    drawCircle(300, 200, 100, '#0000ff');
    
    // Exercise 3: Functions That Return Values
    console.log("\n=== Exercise 3: Functions That Return Values ===");
    const d = distance(0, 0, 3, 4);
    console.log("Distance:", d); // Should print 5
    
    // Draw a line between the points (scaled up for visibility)
    stroke(0);
    strokeWeight(2);
    line(50, 350, 50 + 3 * 20, 350 + 4 * 20);
    
    // Exercise 4: Functions That Call Other Functions
    console.log("\n=== Exercise 4: Functions That Call Other Functions ===");
    drawTarget(200, 500, 100, '#ff0000', '#ffffff');
    drawTarget(500, 500, 150, '#0000ff', '#ffff00');
    
    // Exercise 5: Default Parameters
    console.log("\n=== Exercise 5: Default Parameters ===");
    drawCircleWithDefault(600, 100, 50); // Uses default black
    drawCircleWithDefault(700, 100, 75, '#ff0000'); // Uses red
    
    // Exercise 6: Function Scope
    console.log("\n=== Exercise 6: Function Scope ===");
    circleCount = 0; // Reset counter
    drawAndCountCircle(800, 200, 50, '#ff0000');
    drawAndCountCircle(900, 200, 75, '#00ff00');
    drawAndCountCircle(1000, 200, 100, '#0000ff');
    console.log("Total circles drawn:", circleCount); // Should print 3
    
    // Challenge: Create Your Own Function
    console.log("\n=== Challenge: Create Your Own Function ===");
    drawHouse(400, 300, 200, 200, '#8B4513', '#D3D3D3', '#654321');
    drawHouse(700, 250, 150, 180, '#654321', '#F5F5DC', '#8B4513');
    
    // Draw grid for reference
    drawGrid(1200, 800);
}

function draw() {
    // Empty - we're doing everything in setup() for this exercise
}
