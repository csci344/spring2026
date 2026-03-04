---
title: "JavaScript Review Quiz (Up to Feb 27)"
type: "activity"
start_date: "2026-03-04"
heading_max_level: 2
ordering: 3
draft: 0
---

<blockquote class="info">

{% collapsible closed %}
## Answer Key

{% no-copy %}
```text 
---------------------------
Part 1
---------------------------
1.	B and D
2.	A
3.	B
4.	A, B, and C
5.	C
6.	E (All of the above)
7.	B
8.	B
9.	C
10.	C
11.	B
12.	C
13.	B
14.	C

---------------------------
Part 2
---------------------------
15.	6

16.	Bob

17. greet() 		    → "Hello, undefined!"
	greet('Alice') 		→ "Hello, Alice!"
	greet('Bob', 'Hi') 	→ "Hi, Bob!"
	greet('Hi', 'Bob') 	→ "Bob, Hi!" 

18.	The text “Hello, world!” appears in the <p id="output"> element.

---------------------------
Part 3
---------------------------
19.	const multiply = (a, b) => a * b;

20.	function addTodo() {
    	const input = document.querySelector('#item-input');
    	const itemsList = document.querySelector('#items');
    	const text = input.value;
    	itemsList.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
    	input.value = '';
	}	
```

</blockquote>

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
   - `var score = 0;` 
   - `const score = 0;`  

    {% collapsible closed %}
    ### Answer
    **B and D**
    
    `let` and `var` both create variables that can be reassigned. `const` creates a constant that cannot be reassigned after initialization. `score := 0;` is not valid JavaScript syntax (that's from other languages like Pascal or Go). Also, even though `var` allows for reassignment, the recommendation is that modern JavaScript code avoid `var` when possible.

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

    {% collapsible closed %}
    ### Answer
    **A**
    
    The `==` operator performs loose equality (type coercion). It converts the string `"5"` to the number `5` before comparing, so `5 == 5` evaluates to `true`.

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

    {% collapsible closed %}
    ### Answer
    **B**
    
    The `===` operator performs strict equality (no type coercion). Since `x` is a number (`5`) and `y` is a string (`"5"`), they are different types and the comparison evaluates to `false`.

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

    {% collapsible closed %}
    ### Answer
    **A, B, and C**
    
    - Option A is a function declaration
    - Option B is an arrow function with a block body
    - Option C is an arrow function with an implicit return (no braces needed for single expression)
    - Option D is invalid syntax: you cannot combine `function` keyword with arrow function syntax

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

    {% collapsible closed %}
    ### Answer
    **C**
    
    The function `add(2, 3)` adds the two numbers together: `2 + 3 = 5`. The `+` operator performs numeric addition when both operands are numbers.

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

    {% collapsible closed %}
    ### Answer
    **E (All of the above)**
    
    JavaScript is flexible with function arguments. Here's what each call actually outputs:
    
    - `greet('Alice')` → `"Hello, Alice! You are undefined years old."` (missing `age` argument)
    - `greet('Bob', 25)` → `"Hello, Bob! You are 25 years old."` (correct)
    - `greet(25, 'Alice')` → `"Hello, 25! You are Alice years old."` (arguments in wrong order)
    - `greet('Charlie', 30, 'extra')` → `"Hello, Charlie! You are 30 years old."` (third argument ignored)
    
    None of these will throw an error, though some won't produce the intended output.

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

    {% collapsible closed %}
    ### Answer
    **B**
    
    In JavaScript, you access object properties using dot notation (`user.name`) or bracket notation (`user["name"]`). The dot notation is more common for simple property names. `user["age"]` would access the age property, not the name. `user(name)` would try to call `user` as a function, and `user->name` is syntax from other languages like C++ or PHP.

<div class="page-break"></div>

<!-- .extra-list-spacing -->
8. **Which line correctly selects the first element with class `card`?**

    <!-- .alpha-list -->
   - `document.getElementById('.card')`  
   - `document.querySelector('.card')`  
   - `document.querySelectorAll('#card')`  
   - `document.querySelector('card')`  

    {% collapsible closed %}
    ### Answer
    **B**
    
    `querySelector('.card')` uses CSS selector syntax where `.card` selects elements with the class `card`. `getElementById` expects an ID (without the `#`), not a class selector. `querySelectorAll` returns a NodeList of all matching elements, not just the first one. `querySelector('card')` would look for a `<card>` element, not a class.

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

    {% collapsible closed %}
    ### Answer
    **C**
    
    `textContent` sets the text content of an element. `value` is for form inputs, not paragraph elements. `innerHTML` would kinda work but requires a string with quotes...and it's bad practice to put a paragraph inside of another paragraph. `innerText('Ready!')` is incorrect syntax -- `innerText` is a property, not a method. Also, `querySelector('status')` should be `querySelector('#status')` to select by ID.

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

    {% collapsible closed %}
    ### Answer
    **C**
    
    The `insertAdjacentHTML` positions are:
    - `beforebegin` - Before the element itself
    - `afterbegin` - Inside the element, at the beginning
    - `beforeend` - Inside the element, at the end (this is what we want)
    - `afterend` - After the element itself

1. **Why do we often call `event.preventDefault()` in a form submit handler?**

    <!-- .alpha-list -->
    - To stop JavaScript from running on the page  
    - To prevent the form from submitting and reloading the page  
    - To clear all form fields automatically  
    - To disable the submit button  

    {% collapsible closed %}
    ### Answer
    **B**
    
    By default, when a form is submitted, the browser sends the form data to the server and reloads the page. `preventDefault()` stops this default behavior, allowing JavaScript to handle the form submission without a page reload.

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

    {% collapsible closed %}
    ### Answer
    **C**
    
    `classList.toggle()` adds the class if it's not present, and removes it if it is present. Since the box initially has the `hidden` class, `toggle('hidden')` will remove it. `classList.toggle` works on any element, including divs.

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

    {% collapsible closed %}
    ### Answer
    **B**
    
    The `style` property on DOM elements allows you to set inline CSS styles. `heading.style.color = 'blue'` sets the element's inline `color` style to `blue`. This is different from adding a CSS class—it directly modifies the element's style attribute.

1. **Which method correctly selects an element by its ID?**

    <!-- .alpha-list -->
    - `document.querySelector('#myId')`  
    - `document.getElementById('myId')`  
    - Both (a) and (b) are correct  
    - Neither (a) nor (b) work for IDs  

    {% collapsible closed %}
    ### Answer
    **C**
    
    Both methods can select an element by ID:
    - `getElementById('myId')` - Specifically designed for IDs (no `#` needed)
    - `querySelector('#myId')` - Uses CSS selector syntax (requires `#` for IDs)
    Both will return the same element if it exists.

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

    {% collapsible closed %}
    ### Answer
    **`6`**
    
    The loop runs three times:
    - First iteration: `i = 1`, `total = 0 + 1 = 1`
    - Second iteration: `i = 2`, `total = 1 + 2 = 3`
    - Third iteration: `i = 3`, `total = 3 + 3 = 6`
    After the loop completes, `total` is `6`.

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

    {% collapsible closed %}
    ### Answer
    **`'Bob'`**
    
    Array indices start at 0, so:
    - `students[0]` is `{ name: 'Alice', grade: 90 }`
    - `students[1]` is `{ name: 'Bob', grade: 85 }`
    - `students[2]` is `{ name: 'Charlie', grade: 88 }`
    Therefore, `students[1].name` accesses the `name` property of the second object, which is `'Bob'`.

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

    {% collapsible closed %}
    ### Answer
    - `greet()` → `"Hello, undefined!"` - `name` is `undefined`, `greeting` defaults to `'Hello'`
    - `greet('Alice')` → `"Hello, Alice!"` - `name` is `'Alice'`, `greeting` defaults to `'Hello'`
    - `greet('Bob', 'Hi')` → `"Hi, Bob!"` - Both arguments provided correctly
    - `greet('Hi', 'Bob')` → `"Bob, Hi!"` - Arguments are in wrong order: `name` is `'Hi'`, `greeting` is `'Bob'`
    
    Default parameters only apply when an argument is `undefined` or not provided. The order matters—the first argument always maps to `name`, the second to `greeting`.

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

    {% collapsible closed %}
    ### Answer
    **The text "Hello, world!" appears in the `<p id="output">` element.**
    
    When the button is clicked:
    1. The click event fires
    2. The event listener's arrow function executes
    3. `output.textContent = 'Hello, world!'` sets the text content of the paragraph element
    4. The user sees "Hello, world!" displayed on the page

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

    {% collapsible closed %}
    ### Answer
    ```javascript
    const multiply = (a, b) => a * b;
    ```
    
    Or with explicit return:
    ```javascript
    const multiply = (a, b) => {
        return a * b;
    };
    ```
    
    Arrow functions can use implicit return (no braces, no `return` keyword) when the function body is a single expression.

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

    {% collapsible closed %}
    ### Answer
    ```javascript
    function addTodo() {
        const input = document.querySelector('#item-input');
        const itemsList = document.querySelector('#items');
        const text = input.value;
        
        itemsList.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
        input.value = '';
    }
    ```
    
    **Explanation:**
    - `querySelector('#item-input')` gets the input element by ID
    - `querySelector('#items')` gets the `<ul>` element by ID
    - `input.value` reads the text from the input
    - `insertAdjacentHTML('beforeend', ...)` adds the new `<li>` at the end of the list
    - `input.value = ''` clears the input field after adding the item