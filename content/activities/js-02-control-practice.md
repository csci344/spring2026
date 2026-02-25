---
title: "Control Structures Practice"
type: "activity"
start_date: "2026-02-25"
draft: 0
heading_max_level: 3
ordering: 2
---

## Goal
Practice using if/else statements, loops, and control structures in JavaScript with Node.js.

## Setup

Create a new folder called `js-control-practice` in your `csci344` directory. We'll create several `.mjs` files to practice.

## Exercise 1: Conditionals - Grade Calculator

Create a file called `grade-calculator.mjs`:

```javascript
// Write a function that takes a score (0-100) and returns a letter grade
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59

function getGrade(score) {
    // Your code here
}

// Test your function
console.log(getGrade(95));  // Should print "A"
console.log(getGrade(85));  // Should print "B"
console.log(getGrade(75));  // Should print "C"
console.log(getGrade(65));  // Should print "D"
console.log(getGrade(55));  // Should print "F"
```

Run it with: `node grade-calculator.mjs`

<!-- collapsible closed -->
### Show Solution

```javascript
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
```

## Exercise 2: Switch Statement - Day of Week

Create a file called `day-of-week.mjs`:

```javascript
// Write a function that takes a number (1-7) and returns the day name
// 1 = Sunday, 2 = Monday, etc.

function getDayName(dayNumber) {
    // Use a switch statement
}

// Test your function
console.log(getDayName(1));  // Should print "Sunday"
console.log(getDayName(3));  // Should print "Tuesday"
console.log(getDayName(7));  // Should print "Saturday"
```

<!-- collapsible closed -->
### Show Solution

```javascript
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
```

## Exercise 3: While Loop - Countdown

Create a file called `countdown.mjs`:

```javascript
// Use a while loop to count down from 10 to 1, then print "Blast off!"

let count = 10;

// Your while loop here

console.log("Blast off!");
```

<!-- collapsible closed -->
### Show Solution

```javascript
let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}

console.log("Blast off!");
```

## Exercise 4: For Loop - Multiplication Table

Create a file called `multiplication-table.mjs`:

```javascript
// Use a for loop to print the 5 times table (5 x 1 = 5, 5 x 2 = 10, etc.)

const number = 5;

// Your for loop here
```

<!-- collapsible closed -->
### Show Solution

```javascript
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

## Exercise 5: Nested Loops - Pattern

Create a file called `pattern.mjs`:

```text
Use nested loops to print this pattern:
 
**
***
****
*****
```

<!-- collapsible closed -->
### Show Solution

```javascript
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
```

## Exercise 6: Loop with Conditionals - Even Numbers

Create a file called `even-numbers.mjs`:

```text
// Use a for loop to print only the even numbers from 0 to 20

// Your code here
```

<!-- collapsible closed -->
### Show Solution

```javascript
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

## Exercise 7: Array Iteration

Create a file called `array-iteration.mjs`:

```javascript
const numbers = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];

// Use a for loop to find the sum of all numbers
let sum = 0;
// Your code here
console.log("Sum:", sum);

// Use a for loop to find the largest number
let max = numbers[0];
// Your code here
console.log("Max:", max);
```

<!-- collapsible closed -->
### Show Solution

```javascript
const numbers = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];

// Sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

// Max
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Max:", max);
```

## Exercise 8: For...of Loop

Create a file called `for-of.mjs`:

```javascript
const fruits = ["apple", "banana", "cherry", "date"];

// Use a for...of loop to print each fruit in uppercase
// Your code here
```

<!-- collapsible closed -->
### Show Solution

```javascript
const fruits = ["apple", "banana", "cherry", "date"];

for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
}
```

## Additional Practice

For more practice problems, see:
- [Basic Programming Practice](/spring2026/resources/js-02-basic-programming-practice)
- [Basic Programming in JavaScript - Control Section](/spring2026/resources/js-03-basic-programming#3-control)

## Key Takeaways

- `if/else` and `switch` statements control program flow
- `while` loops repeat while a condition is true
- `for` loops repeat a specific number of times
- Nested loops are useful for patterns and 2D structures
- Use `%` (modulus) to check for even/odd numbers
- `for...of` loops are simpler for iterating arrays
