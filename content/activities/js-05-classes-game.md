---
title: "Classes Practice: Simple Game"
type: "activity"
start_date: "2026-02-25"
draft: 1
ordering: 2
heading_max_level: 3
---

## Goal
Build a simple interactive game using JavaScript classes to manage game state and entities.

## Setup

Download the starter files:

<a href="/spring2026/course-files/activities/js-classes-game.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

After downloading and unzipping, open `index.html` in your browser using Live Server.

## Game Overview

We'll build a simple "Click the Target" game where:
- A target appears on the screen
- Players click the target to score points
- The target moves to a new random position after each click
- The game tracks score and time

## Exercise 1: Create a Target Class

Open `game.js` and create a `Target` class:

```javascript
class Target {
    constructor(x, y, size) {
        // Store position and size
        // Add a color property (pick any color you like)
    }
    
    // Method to draw the target on the canvas
    draw() {
        // Use DOM manipulation to create/update a div element
        // Position it at this.x, this.y
        // Set its size and color
    }
    
    // Method to check if a click hit the target
    wasClicked(clickX, clickY) {
        // Return true if clickX, clickY is within the target's bounds
        // Hint: Check if click is within the rectangle defined by:
        //   x to x+size (horizontally)
        //   y to y+size (vertically)
    }
    
    // Method to move to a random position
    moveRandom(maxWidth, maxHeight) {
        // Set this.x and this.y to random values
        // Make sure the target stays within bounds (0 to maxWidth-size, etc.)
    }
}
```

## Exercise 2: Create a Game Class

Create a `Game` class to manage the game state:

```javascript
class Game {
    constructor() {
        // Initialize score to 0
        // Create a new Target instance
        // Set up initial target position
        // Track start time
    }
    
    // Method to handle a click
    handleClick(x, y) {
        // Check if target was clicked
        // If yes: increment score, move target, update display
        // If no: maybe show a message?
    }
    
    // Method to update the display
    updateDisplay() {
        // Update the score display element
        // Call target.draw() to show the target
    }
    
    // Method to get elapsed time
    getElapsedTime() {
        // Return time in seconds since game started
    }
}
```

## Exercise 3: Wire Up the Game

In the `main.js` file (or at the bottom of `game.js`):

```javascript
// Create a game instance
let game = new Game();

// Set up click handler on the game area
const gameArea = document.querySelector('#game-area');
gameArea.addEventListener('click', (event) => {
    // Get click coordinates relative to game area
    const rect = gameArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Handle the click
    game.handleClick(x, y);
});

// Initial display update
game.updateDisplay();
```

## Exercise 4: Add Features

Enhance your game with:

1. **Timer**: Show how long the player has been playing
2. **High Score**: Track and display the best score
3. **Difficulty**: Make the target smaller or move faster as score increases
4. **Visual Feedback**: Add animations when the target is clicked

## Starter HTML Structure

Your `index.html` should have something like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click the Target Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Click the Target!</h1>
        <div class="stats">
            <div>Score: <span id="score">0</span></div>
            <div>Time: <span id="time">0</span>s</div>
        </div>
        <div id="game-area"></div>
    </div>
    <script src="game.js"></script>
    <script src="main.js"></script>
</body>
</html>
```

## Hints

- Use `document.querySelector()` to get DOM elements
- Use `element.style.left` and `element.style.top` to position elements
- Use `Math.random()` to generate random positions
- Use `setInterval()` to update the timer every second
- Use `localStorage` to save high scores

## Example CSS

```css
#game-area {
    position: relative;
    width: 600px;
    height: 400px;
    border: 2px solid #333;
    background: #f0f0f0;
}

.target {
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
}

.target:hover {
    transform: scale(1.1);
}
```

## Challenge: Add More Classes

Create additional classes:

1. **Player Class**: Track player name and statistics
2. **PowerUp Class**: Special targets that give bonus points
3. **Obstacle Class**: Things to avoid clicking

## Key Takeaways

- Classes help organize code into logical units
- Each class has a specific responsibility
- Classes can work together (Game uses Target)
- DOM manipulation can be encapsulated in class methods
- Game state is managed through class properties

## Next Steps

- Try the [JavaScript Classes Quiz](/spring2026/quizzes/javascript-classes)
- Experiment with adding more features to your game
- Consider how you could use classes in other projects
