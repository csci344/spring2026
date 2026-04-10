---
title: "JavaScript"
type: "exam"
num: 2
draft: 0
assigned_date: "2026-04-08"
due_date: "2026-04-08"
heading_max_level: 3
order: 2
points: 100
---

## Introduction
This is a paper-based 75-minute JavaScript exam. It focuses on reading code, reasoning about what code will do, and writing short JavaScript snippets by hand.

**Name:** ______________________________________

> ### Guidelines
> * Read each prompt carefully.
> * For multiple-choice questions, clearly circle or mark your answer(s).
> * For short-answer questions, explain your reasoning clearly.
> * For code-writing questions, keep your solution short and focused.
> * Unless a prompt says otherwise, assume all selectors match real elements and the code runs in a browser without syntax errors.

<blockquote class="info">

{% collapsible closed %}
## Answer Key

{% no-copy %}
```js
1. Value: 4
   Data type: number

2. Value: 21
   Data type: number

3. Value: true
   Data type: boolean

4. tulip

5. x = 3
   y = 4
   z = 3

6. B -  true then false

7. Sample answer:
   `let` can be reassigned; `const` cannot be reassigned after it is created.
   For objects and arrays, a `const` variable cannot be reassigned to a new object/array,
   but the contents of that object or array can still change.

8. A - Hello, Guest then Hello, Alice

9. Correct definitions: A, B, C, and E

10. True statements: A, B, and D

11. D - { theme: 'light', compact: true, fontSize: 'large' }

12. Sample answer:
   GET = retrieve data
   POST = create/send new data
   PATCH = update part of a resource
   DELETE = remove a resource

13. Sample answer:
   A bearer token is a token that proves the user is authenticated.
   We put it in the Authorization header because that is the standard place to send
   authentication credentials with an HTTP request.

14. Sample answer:
   `fetch()` sends an HTTP request to a server or API.
   We usually use it with `async` / `await` because the request takes time and
   `fetch()` returns a Promise, so we need to wait for the response.

15.
   async function loadStudents() {
     const response = await fetch('/api/students');
     const students = await response.json();
     const html = students.map(student => `<p>${student.name}</p>`).join('');
     document.querySelector('#results').innerHTML = html;
   }

16.
   function courseToHTML(course) {
     return `
       <article class="course">
         <h3>${course.title}</h3>
         <p>Room: ${course.room}</p>
         <p>Credits: ${course.credits}</p>
         <p>Instructor: ${course.instructors[0].fullName}</p>
       </article>
     `;
   }

17.
   const csStudents = students.filter(student => student.major === "Computer Science");

18.
   function showMascot() {
     const mascot = document.querySelector('#mascot');
     const caption = document.querySelector('#caption');
     mascot.src = 'bulldog.png';
     mascot.alt = 'Bulldog mascot';
     caption.textContent = 'UNCA Bulldogs';
   }

   // You can either attach the event handler using JavaScript....
   document.querySelector('#show-mascot').addEventListener('click', showMascot);

   // ...or you can attach the event handler via HTML:
   <button id="show-mascot" onclick="showMascot()">Show Mascot</button>
```

</blockquote>

<!-- .list-extra-spaced -->
1. [4 pts] Consider the following:

    {% no-copy %}
    ```javascript
    let myList = [[1, 8], [6, 9], [0, 7], [3, 2]];
    let result = myList.length;
    ```

    <!-- .list-medium-spaced -->
    1. What is the VALUE stored in `result`?  ______________________________
    1. What is the DATA TYPE of `result`?     ______________________________



<div class="page-break"></div>

2. [4 pts] Consider the following:

    {% no-copy %}
    ```javascript
    let myList = [[1, 8], [6, 9], [0, 7], [3, 2]];
    let result = myList[2][1] * myList[3][0];
    ```

    <!-- .list-medium-spaced -->
    1. What is the VALUE stored in `result`? ______________________________
    1. What is the DATA TYPE of `result`?    ______________________________



3. [4 pts] Consider the following:

    {% no-copy %}
    ```javascript
    let a = 4;
    let b = 6;
    let c = false;
    let result = c || !(b <= a);
    ```

    <!-- .list-medium-spaced -->
    1. What is the VALUE stored in `result`?  ______________________________
    1. What is the DATA TYPE of `result`?     ______________________________


4. [4 pts] After the following code block runs, what prints to the screen?

    {% no-copy %}
    ```javascript
    let a = false;
    let b = true;
    let c = true;
    let result = null;

    if (a || !c) {
        result = 'rose';
    } else if (!b || !a) {
        result = 'tulip';
    } else if (b) {
        result = 'daisy';
    } else {
        result = 'buttercup';
    }
    console.log(result);
    ```

    <p class="answer-sm"></p>

<div class="page-break"></div>

<!-- .list-extra-spaced -->
5. [8 pts] Consider the following code:

    {% no-copy %}
    ```javascript
    function f1(a, b) {
        return b / a + 1;
    }

    function f2(a, b) {
        return (a - b) * 2;
    }

    let x = f1(2, 4);
    let y = f2(5, x);
    let z = f1(f2(2, 1), y);
    console.log(x, y, z);
    ```

    <!-- .list-medium-spaced -->
    1. What is the value stored in `x`?   ______________________________
    1. What is the value stored in `y`?   ______________________________
    1. What is the value stored in `z`?   ______________________________


6. [4 pts] What will this code output? Circle the correct answer below:

    {% no-copy %}
    ```javascript
    console.log(5 == '5');
    console.log(5 === '5');
    ```
    <!-- .alpha-list -->
    - `true` then `true`
    - `true` then `false`
    - `false` then `true`
    - `false` then `false`


<div class="page-break"></div>

<!-- .list-extra-spaced -->
7. [4 pts] In your own words, explain the difference between `let` and `const`.

    <p class="answer-md"></p>

8. [4 pts] What will this code output? Circle the correct answer below:

    {% no-copy %}
    ```javascript
    function greet(name = 'Guest') {
      console.log('Hello, ' + name);
    }
    greet();
    greet('Alice');
    ```
    <!-- .alpha-list -->
    - `Hello, Guest` then `Hello, Alice`
    - `Hello, undefined` then `Hello, Alice`
    - `Hello, Guest` then `Hello, Guest`
    - Error

9. [4 pts] Which of the following function definitions are written correctly? Circle all that apply.

    <!-- .alpha-list -->
    - `function double(x) { return x * 2; }`
    - `const double = (x) => x * 2;`
    - `const double = x =>  x * 2;`
    - `const double = (x) => { x * 2; }`
    - `const double = (x) => { return x * 2; }`
    - `function = double(x) { return x * 2; }`


<div class="page-break"></div>

<!-- .list-extra-spaced -->
10. [4 pts] Circle the true statements:

    <!-- .alpha-list -->
    - `myArray.map(...)` returns a new transformed array.
    - `myArray.filter(...)` accepts a callback function as an argument that should return `true` or `false`.
    - `myArray.forEach(...)` returns a new transformed array.
    - `myArray.toSorted(...)` returns a sorted copy.
    - `myArray.forEach(...)` is most useful when you want a return value to store in a new variable.

11. [4 pts] What will this code output? Circle the correct answer below:

    {% no-copy %}
    ```javascript
    const settings = { theme: 'light', compact: false };
    const updated = { ...settings, compact: true, fontSize: 'large' };
    console.log(updated);
    ```
    <!-- .alpha-list -->
    - `{ theme: 'light' }`  
    - `{ compact: true, fontSize: 'large' }`  
    - `{ theme: 'light', compact: false, fontSize: 'large' }`  
    - `{ theme: 'light', compact: true, fontSize: 'large' }`  
    - Error

12. [6 pts] Name 3 HTTP methods and describe their purpose.

    <p class="answer-lg"></p>

<div class="page-break"></div>

<!-- .list-extra-spaced -->
13. [6 pts] What is the purpose of a bearer token? Why do we put the bearer token in the `Authorization` header?

    <p class="answer-lg"></p>


14. [6 pts] In your own words, what does `fetch()` do, and why do we usually use it with `async` / `await`?

    <p class="answer-lg"></p>

<div class="page-break"></div>

<!-- .list-extra-spaced -->
15. [8 pts] Put these lines in the correct order to complete a function that fetches data from `/api/students` and renders each student's name inside `#results`.

    <!-- .alpha-list -->
    - ```const html = students.map(student => `<p>${student.name}</p>`).join('');```
    - `async function loadStudents() {`
    - `document.querySelector('#results').innerHTML = html;`
    - `const response = await fetch('/api/students');`
    - `}`
    - `const students = await response.json();`

    <!-- .mt-4 -->
    Assume this element already exists:

    {% no-copy %}
    ```html
    <section id="results"></section>
    ```


    Write the correct function in the area below:
    <p class="answer-lg"></p>


<div class="page-break"></div>

<!-- .list-extra-spaced -->
16. [10 pts] Write a function named `courseToHTML(course)` that takes a course object (like the one shown below) and returns the following string. 

    {% no-copy %}
    ```html
    <article class="course">
      <h3>JavaScript</h3>
      <p>Room: RB 244</p>
      <p>Credits: 3</p>
      <p>Instructor: Walter Jones</p>
    </article>
    ```

    - Use a template literal.  
    - Your function should work for any course object (not just a course on JavaScript) 


    {% no-copy %}
    ```javascript
    const course = {
      title: "JavaScript",
      room: "RB 244",
      credits: 3, 
      instructors: [{ fullName: 'Walter Jones' }]
    };
    ```

    <p class="answer-lg"></p>

<div class="page-break"></div>

<!-- .list-extra-spaced -->
17. [8 pts] Use `filter(...)` to create a new array containing only the students whose major is `"Computer Science"`.

    {% no-copy %}
    ```javascript
    const students = [
      { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
      { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
      { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
      { name: "Diana", age: 22, grade: 95, major: "Physics" },
      { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
    ];
    ```

    <p class="answer-xl"></p>


<div class="page-break"></div>

<!-- .list-extra-spaced -->
18. [12 pts] Write a function and event handler so that when the user clicks a button labeled `Show Mascot`, your code updates the image and caption in the DOM.

    You may assume these elements already exist:

    {% no-copy %}
    ```html
    <button id="show-mascot">Show Mascot</button>
    <img id="mascot" src="" alt="">
    <p id="caption"></p>
    ```

    When the button is clicked:
    1. set the image `src` to `"bulldog.png"`
    1. set the image `alt` to `"Bulldog mascot"`
    1. set the paragraph text to `UNCA Bulldogs`

    Expected result after the button is clicked:

    {% no-copy %}
    ```html
    <button id="show-mascot">Show Mascot</button>
    <img id="mascot" src="bulldog.png" alt="Bulldog mascot">
    <p id="caption">UNCA Bulldogs</p>
    ```

    In the section below, write the JavaScript (and if necessary, also rewrite the HTML button code). 
    <p class="answer-xl"></p>
