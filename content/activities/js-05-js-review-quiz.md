---
title: "JavaScript Review Quiz (Up to Feb 27)"
type: "activity"
start_date: "2026-03-04"
heading_max_level: 3
ordering: 3
draft: 0
---

<!-- .print-only -->
Your Name: ________________________________________

## Part A – Multiple Choice

Circle the best answer for each question.


<!-- .extra-list-spacing -->
1. **Which declaration creates a variable whose value can be changed later?** Circle all that apply.

    <!-- .alpha-list -->
   - `const score = 0;`  
   - `let score = 0;`  
   - `score := 0;`  
   - `var score = 0` 
   - `const score = 0;`  

1. **What is the result of this code?**

    {% no-copy %}
    ```javascript
    let x = 5;
    let y = "5";
    console.log(x == y);
    ```

    <!-- .alpha-list -->
   - `true`  
   - `false`  
   - `undefined`  
   - Throws an error  

<div class="page-break"></div>

<!-- .extra-list-spacing -->
3. **What is the result of this code?**

    {% no-copy %}
    ```javascript
    let x = 5;
    let y = "5";
    console.log(x === y);
    ```
    <!-- .alpha-list -->
    - `true`  
    - `false`  
    - `undefined`  
    - Throws an error  

1. **Which of the following functions all do the same thing?** 

    {% no-copy %}
    ```javascript
    function add(a, b) {                // Option A
        return a + b;
    }
    
    const add = (a, b) => {             // Option B
        return a + b;
    }

    const add = (a, b) => a + b;        // Option C
    

    function add = (a, b) => a + b;     // Option D
    ```

    **Circle all that apply:**
    
    <!-- .alpha-list -->
   - Option A  
   - Option B  
   - Option C  
   - Option D  

<div class="page-break"></div>

<!-- .extra-list-spacing -->
5. **What does this code block print to the screen?**

    {% no-copy %}
    ```javascript
    function add(a, b) {
        return a + b;
    }

    console.log(add(2, 3));
    ```
    <!-- .alpha-list -->
   - `2`  
   - `3`  
   - `5`  
   - `"2 3"`  

1. **Given this function definition:**

    {% no-copy %}
    ```javascript
    function greet(name, age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    ```

    **Which of the following function calls will work (not throw an error)?** Circle all that apply.

    <!-- .alpha-list -->
   - `greet('Alice')`  
   - `greet('Bob', 25)`  
   - `greet(25, 'Alice')`  
   - `greet('Charlie', 30, 'extra')`  
   - All of the above (though not all invocations will work as intended)
   - None of the above

1. **Given:**

    {% no-copy %}
    ```javascript
    const user = { name: "Alice", age: 20 };
    ```

    How do you read the user’s name?

    <!-- .alpha-list -->
    - `user["age"]`  
    - `user.name`  
    - `user(name)`  
    - `user->name`  

<div class="page-break"></div>

<!-- .extra-list-spacing -->
8. **Which line correctly selects the first element with class `card`?**

    <!-- .alpha-list -->
   - `document.getElementById('.card')`  
   - `document.querySelector('.card')`  
   - `document.querySelectorAll('#card')`  
   - `document.querySelector('card')`  

1. **Given:**

    {% no-copy %}
    ```html
    <p id="status">Not ready</p>
    ```

    Which line correctly changes the text to `Ready!`?

     <!-- .alpha-list -->
    - `document.querySelector('#status').value = 'Ready!';`  
    - `document.querySelector('#status').innerHTML = <p>Ready!</p>;`  
    - `document.querySelector('#status').textContent = 'Ready!';`  
    - `document.querySelector('status').innerText('Ready!');`  

1. **Which `insertAdjacentHTML` call adds a new `<li>` as the last item in the list?**

    {% no-copy %}
    ```html
    <ul id="todo-list"></ul>
    ```

    <!-- .alpha-list -->
    - `list.insertAdjacentHTML('afterbegin', '<li>Task</li>');`  
    - `list.insertAdjacentHTML('beforebegin', '<li>Task</li>');`  
    - `list.insertAdjacentHTML('beforeend', '<li>Task</li>');`  
    - `list.insertAdjacentHTML('afterend', '<li>Task</li>');`  

1. **Why do we often call `event.preventDefault()` in a form submit handler?**

    <!-- .alpha-list -->
    - To stop JavaScript from running on the page  
    - To prevent the form from submitting and reloading the page  
    - To clear all form fields automatically  
    - To disable the submit button  

<div class="page-break"></div>

<!-- .extra-list-spacing -->
12. **Given this HTML:**
    
    {% no-copy %}
    ```html
    <button id="toggle-btn">Toggle</button>
    <div id="box" class="hidden">Content</div>
    ```
    
    **And this JavaScript:**
    
    {% no-copy %}
    ```javascript
    const box = document.getElementById('box');
    box.classList.toggle('hidden');
    ```
    
    What happens when this code runs?

    <!-- .alpha-list -->
    - The `hidden` class is added to the box  
    - The `hidden` class is removed from the box  
    - The `hidden` class is toggled (added if missing, removed if present)  
    - Nothing happens because `classList.toggle` doesn't work on divs  


1. **Given this code:**
    
    {% no-copy %}
    ```javascript
    const heading = document.getElementById('title');
    heading.style.color = 'blue';
    ```
    
    What does this do?

    <!-- .alpha-list -->
    - Adds a CSS class called `color` with value `blue`  
    - Sets the inline style `color` property to `blue`  
    - Changes the text content to "blue"  
    - Nothing, because `style.color` is not a valid property  

1. **Which method correctly selects an element by its ID?**

    <!-- .alpha-list -->
    - `document.querySelector('#myId')`  
    - `document.getElementById('myId')`  
    - Both (a) and (b) are correct  
    - Neither (a) nor (b) work for IDs  


<div class="page-break"></div>


## Part B – Short Answer (Code Reading)

<!-- .extra-list-spacing -->
15. **What does this code log to the console?**

    {% no-copy %}
    ```javascript
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        total = total + i;
    }
    console.log(total);
    ```

    <p class="answer-md"></p>

1. **Given this array of objects, what will be logged to the console?**

    {% no-copy %}
    ```javascript
    const students = [
        { name: 'Alice', grade: 90 },
        { name: 'Bob', grade: 85 },
        { name: 'Charlie', grade: 88 }
    ];

    console.log(students[1].name);
    ```

    <p class="answer-md"></p>


<div class="page-break"></div>

<!-- .extra-list-spacing -->
17. **Given this arrow function with default parameters:**

    {% no-copy %}
    ```javascript
    const greet = (name, greeting = 'Hello') => {
        return `${greeting}, ${name}!`;
    };
    ```

    **What will be the output of each function call?**

    {% no-copy %}
    ```javascript
    console.log(greet());
    console.log(greet('Alice'));
    console.log(greet('Bob', 'Hi'));
    console.log(greet('Hi', 'Bob'));
    ```

    <p class="answer-md"></p>

1. Consider the following code:

    **HTML:**

    {% no-copy %}
    ```html
    <button id="hello-btn">Say Hello</button>
    <p id="output"></p>
    ```

    **JavaScript:**
    
    {% no-copy %}
    ```javascript
    const button = document.querySelector('#hello-btn');
    const output = document.querySelector('#output');

    button.addEventListener('click', () => {
        output.textContent = 'Hello, world!';
    });
    ```

    What happens when the user clicks the button?  

    <p class="answer-sm"></p>

    

<div class="page-break"></div>

## Part C – Short Answer (Code Writing)

<!-- .extra-list-spacing -->
19. **Rewrite this function declaration as an arrow function:**

    {% no-copy %}
    ```javascript
    function multiply(a, b) {
        return a * b;
    }
    ```

    <p class="answer-md"></p>

1. You have this HTML:

    {% no-copy %}
    ```html
    <input type="text" id="item-input">
    <button id="add-btn" onclick="addTodo()">Add</button>
    <ul id="items"></ul>
    ```

    Write a JavaScript function named `addTodo` that:

    - Reads the text from `#item-input` when the button is clicked  
    - Appends a new `<li>` with that text to `#items` using `insertAdjacentHTML`  
    - Clears the input after adding

    
    <p class="answer-lg"></p>