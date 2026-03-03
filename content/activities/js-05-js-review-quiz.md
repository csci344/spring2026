---
title: "JavaScript Review Quiz (Up to March 2)"
type: "activity"
start_date: "2026-03-04"
heading_max_level: 3
ordering: 3
draft: 0
---

## Part A – Multiple Choice

Circle the best answer for each question.


<!-- extra-list-spacing -->
1. **Which declaration creates a variable whose value can be changed later?** Circle all that apply.

    <!-- alpha-list -->
   - `const score = 0;`  
   - `let score = 0;`  
   - `score := 0;`  
   - `var score = 0` 
   - `const score = 0;`  

2. **What is the result of this code?**

    <!-- no-copy-button -->
    ```javascript
    let x = 5;
    let y = "5";
    console.log(x == y);
    ```

    <!-- alpha-list -->
   - `true`  
   - `false`  
   - `undefined`  
   - Throws an error  

3. **What is the result of this code?**

    <!-- no-copy-button -->
    ```javascript
    let x = 5;
    let y = "5";
    console.log(x === y);
    ```
    <!-- alpha-list -->
    - `true`  
    - `false`  
    - `undefined`  
    - Throws an error  

4. **Which `if` statement correctly checks that `age` is at least 18?**

    <!-- alpha-list -->
   - `if (age = 18) { ... }`  
   - `if (age => 18) { ... }`  
   - `if (age >= 18) { ... }`  
   - `if (age == 18 && age == 21) { ... }`  

5. **What does this code block print to the screen?**

    <!-- no-copy-button -->
    ```javascript
    function add(a, b) {
        return a + b;
    }

    console.log(add(2, 3));
    ```
    <!-- alpha-list -->
   - `2`  
   - `3`  
   - `5`  
   - `"2 3"`  

6. **Which of the following loops will run exactly 5 times?**

    <!-- alpha-list -->
   - `for (let i = 1; i <= 5; i++) { /* ... */ }`
   - `for (let i = 0; i < 5; i++) { /* ... */ }`
   - `for (let i = 0; i <= 5; i++) { /* ... */ }`
   - Both (a) and (b)

7. **Which statement is true about arrays in JavaScript?**

    <!-- alpha-list -->
   - Arrays can only store numbers.  
   - The first element in an array is at index `1`.  
   - Arrays can store different types (numbers, strings, objects).  
   - Arrays cannot be changed after they are created.  

8. **Given:**

    <!-- no-copy-button -->
    ```javascript
    const user = { name: "Alice", age: 20 };
    ```

    How do you read the user’s name?

    <!-- alpha-list -->
    - `user["age"]`  
    - `user.name`  
    - `user(name)`  
    - `user->name`  

9. **Which line correctly selects the first element with class `card`?**

    <!-- alpha-list -->
   - `document.getElementById('.card')`  
   - `document.querySelector('.card')`  
   - `document.querySelectorAll('#card')`  
   - `document.querySelector('card')`  

10. **Given:**

    <!-- no-copy-button -->
    ```html
    <p id="status">Not ready</p>
    ```

    Which line correctly changes the text to `Ready!`?

     <!-- alpha-list -->
    - `document.querySelector('#status').value = 'Ready!';`  
    - `document.querySelector('#status').innerHTML = <p>Ready!</p>;`  
    - `document.querySelector('#status').textContent = 'Ready!';`  
    - `document.querySelector('status').innerText('Ready!');`  

11. **Which `insertAdjacentHTML` call adds a new `<li>` as the last item in the list?**

    <!-- no-copy-button -->
    ```html
    <ul id="todo-list"></ul>
    ```

    <!-- alpha-list -->
    - `list.insertAdjacentHTML('afterbegin', '<li>Task</li>');`  
    - `list.insertAdjacentHTML('beforebegin', '<li>Task</li>');`  
    - `list.insertAdjacentHTML('beforeend', '<li>Task</li>');`  
    - `list.insertAdjacentHTML('afterend', '<li>Task</li>');`  

12. **Why do we often call `event.preventDefault()` in a form submit handler?**

    <!-- alpha-list -->
    - To stop JavaScript from running on the page  
    - To prevent the form from submitting and reloading the page  
    - To clear all form fields automatically  
    - To disable the submit button  

13. **Which is the recommended way to attach a click handler in JavaScript?**

    <!-- alpha-list -->
    - `<button onclick="save()">Save</button>`  
    - `button.onClick = save();`  
    - `button.addEventListener('click', save);`  
    - `document.addEventListener('save', button);`  

---

## Part B – Short Answer (Code Reading)

14. **What does this code log to the console?**

    ```javascript
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        total = total + i;
    }
    console.log(total);
    ```

    <!-- no-copy-button -->
    ```text



    ```

15. **What will be the value of `message` after this code runs?**

    ```javascript
    const isMember = true;
    let message = "";

    if (isMember) {
        message = "Welcome back!";
    } else {
        message = "Please sign up.";
    }
    ```
    **Answer:**
    <!-- no-copy-button -->
    ```text



    ```

16. Consider the following code:

    **HTML:**

    <!-- no-copy-button -->
    ```html
    <button id="hello-btn">Say Hello</button>
    <p id="output"></p>
    ```

    **JavaScript:**
    <!-- no-copy-button -->
    ```javascript
    const button = document.querySelector('#hello-btn');
    const output = document.querySelector('#output');

    button.addEventListener('click', () => {
        output.textContent = 'Hello, world!';
    });
    ```

    <!-- alpha-list -->
    - What happens when the user clicks the button?  

        <!-- no-copy-button -->
        ```text
    




        ```

    - If the programmer decided to add the event handler in the HTML file instead, how would they do it?

        <!-- no-copy-button -->
        ```text
    




        ```

    

---

## Part C – Short Answer (Code Writing)

17. **Write a function `isEven(n)` that returns `true` if `n` is even and `false` otherwise.**

    <!-- no-copy-button -->
    ```javascript
    function isEven(n) {
    // your code here





    }
    ```

18. **Write a `for` loop that prints the numbers from 1 to 5 (inclusive) to the console.**

    <!-- no-copy-button -->
    ```javascript
    // your code here






    ```

19. You have this HTML:

    <!-- no-copy-button -->
    ```html
    <input type="text" id="item-input">
    <button id="add-btn">Add</button>
    <ul id="items"></ul>
    ```

    Write JavaScript that:

    - Reads the text from `#item-input` when the button is clicked  
    - Appends a new `<li>` with that text to `#items` using `insertAdjacentHTML`  
    - Clears the input after adding

    <!-- no-copy-button -->
    ```javascript
    // your code here











    ```