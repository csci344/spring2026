---
title: "JavaScript Review Quiz (Up to March 2)"
type: "activity"
start_date: "2026-03-02"
heading_max_level: 3
ordering: 3
draft: 1
---

## Part A – Multiple Choice

Circle the best answer for each question.

1. **Which declaration creates a variable whose value can be changed later?**

   - a) `const score = 0;`  
   - b) `let score = 0;`  
   - c) `score := 0;`  
   - d) `var score; const score;`  

2. **What is the result of this code?**

    ```javascript
    let x = 5;
    let y = "5";
    console.log(x == y);
    ```

   - a) `true`  
   - b) `false`  
   - c) `undefined`  
   - d) Throws an error  

3. **What is the result of this code?**

    ```javascript
    let x = 5;
    let y = "5";
    console.log(x === y);
    ```

   - a) `true`  
   - b) `false`  
   - c) `undefined`  
   - d) Throws an error  

4. **Which `if` statement correctly checks that `age` is at least 18?**

   - a) `if (age = 18) { ... }`  
   - b) `if (age => 18) { ... }`  
   - c) `if (age >= 18) { ... }`  
   - d) `if (age == 18 && age == 21) { ... }`  

5. **What does this function return?**

    ```javascript
    function add(a, b) {
    return a + b;
    }

    console.log(add(2, 3));
    ```

   - a) `2`  
   - b) `3`  
   - c) `5`  
   - d) `"2 3"`  

6. **Which of the following loops will run exactly 5 times?**

   - a)

    ```javascript
    for (let i = 1; i <= 5; i++) { /* ... */ }
    ```

   - b)

    ```javascript
    for (let i = 0; i < 5; i++) { /* ... */ }
    ```

   - c)

    ```javascript
    for (let i = 0; i <= 5; i++) { /* ... */ }
    ```

   - d) Both a) and b)  

7. **Which statement is true about arrays in JavaScript?**

   - a) Arrays can only store numbers.  
   - b) The first element in an array is at index `1`.  
   - c) Arrays can store different types (numbers, strings, objects).  
   - d) Arrays cannot be changed after they are created.  

8. **Given:**

    ```javascript
    const user = { name: "Alice", age: 20 };
    ```

    How do you read the user’s name?

    - a) `user["age"]`  
    - b) `user.name`  
    - c) `user(name)`  
    - d) `user->name`  

9. **Which line correctly selects the first element with class `card`?**

   - a) `document.getElementById('.card')`  
   - b) `document.querySelector('.card')`  
   - c) `document.querySelectorAll('#card')`  
   - d) `document.querySelector('card')`  

10. **Given:**

```html
<p id="status">Not ready</p>
```

Which line correctly changes the text to `Ready!`?

   - a) `document.querySelector('#status').value = 'Ready!';`  
   - b) `document.querySelector('#status').innerHTML = <p>Ready!</p>;`  
   - c) `document.querySelector('#status').textContent = 'Ready!';`  
   - d) `document.querySelector('status').innerText('Ready!');`  

11. **Which `insertAdjacentHTML` call adds a new `<li>` as the last item in the list?**

```html
<ul id="todo-list"></ul>
```

   - a) `list.insertAdjacentHTML('afterbegin', '<li>Task</li>');`  
   - b) `list.insertAdjacentHTML('beforebegin', '<li>Task</li>');`  
   - c) `list.insertAdjacentHTML('beforeend', '<li>Task</li>');`  
   - d) `list.insertAdjacentHTML('afterend', '<li>Task</li>');`  

12. **Why do we often call `event.preventDefault()` in a form submit handler?**

   - a) To stop JavaScript from running on the page  
   - b) To prevent the form from submitting and reloading the page  
   - c) To clear all form fields automatically  
   - d) To disable the submit button  

13. **Which is the recommended way to attach a click handler in JavaScript?**

   - a) `<button onclick="save()">Save</button>`  
   - b) `button.onClick = save();`  
   - c) `button.addEventListener('click', save);`  
   - d) `document.addEventListener('save', button);`  

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

Answer: `____________`

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

Answer: `____________`

16. Consider:

```html
<button id="hello-btn">Say Hello</button>
<p id="output"></p>
```

```javascript
const button = document.querySelector('#hello-btn');
const output = document.querySelector('#output');

button.addEventListener('click', () => {
  output.textContent = 'Hello, world!';
});
```

**a)** What happens when the user clicks the button?  
**b)** Which DOM method is used to select the button?

a) `________________________________________________`  
b) `________________________________________________`  

---

## Part C – Short Answer (Code Writing)

17. **Write a function `isEven(n)` that returns `true` if `n` is even and `false` otherwise.**

```javascript
function isEven(n) {
  // your code here
}
```

18. **Write a `for` loop that prints the numbers from 1 to 5 (inclusive) to the console.**

```javascript
// your code here
```

19. You have this HTML:

```html
<input type="text" id="item-input">
<button id="add-btn">Add</button>
<ul id="items"></ul>
```

Write JavaScript that:

- Reads the text from `#item-input` when the button is clicked  
- Appends a new `<li>` with that text to `#items` using `insertAdjacentHTML`  
- Clears the input after adding

```javascript
// your code here
```

20. You have this HTML form:

```html
<form id="login-form">
  <input type="text" id="username">
  <input type="password" id="password">
  <button type="submit">Log In</button>
</form>
```

Write a `submit` event handler in JavaScript that:

- Prevents the default form submission  
- Reads `username` and `password` values  
- Logs `"Logging in USERNAME"` to the console (replace USERNAME with the actual value)

```javascript
// your code here
```

