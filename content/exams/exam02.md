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

> ### Guidelines
> * Read each prompt carefully.
> * For multiple-choice questions, clearly circle or mark your answer(s).
> * For short-answer questions, explain your reasoning clearly.
> * For code-writing questions, keep your solution short and focused.
> * Unless a prompt says otherwise, assume all selectors match real elements and the code runs in a browser without syntax errors.

## 1. Multiple Choice + Select All [25pts] <a id="part-1-multiple-choice--select-all-25pts"></a>

<!-- .list-extra-spaced -->
1. Circle the true statements:

    <!-- .alpha-list -->
    - `map(...)` returns a new transformed array.
    - `filter(...)` accepts a callback function as an argument that should return `true` or `false`.
    - `forEach(...)` returns a new transformed array.
    - `toSorted(...)` returns a sorted copy.
    - `forEach(...)` is most useful when you want a return value to store in a new variable.

1. What will this code output? Circle the correct answer below:

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

1. Circle the true statements.

    <!-- .alpha-list -->
    - `document.querySelectorAll('.item')` returns every matching element.
    - The current text typed into an `<input>` is usually read with `textContent`.
    - `event.preventDefault()` is commonly used in submit handlers.
    - `classList.add('active')` removes a class if it already exists.
    - `insertAdjacentHTML('beforeend', html)` inserts HTML before the target element itself.


1. Explain what happens each time the button is clicked.

    {% no-copy %}
    ```javascript
    const button = document.querySelector('#toggle');
    const panel = document.querySelector('.panel');

    button.addEventListener('click', () => {
      panel.classList.toggle('open');

      if (panel.classList.contains('open')) {
        button.textContent = 'Hide details';
      } else {
        button.textContent = 'Show details';
      }
    });
    ```

    <p class="answer-lg"></p>
1. Suppose the input already contains `pear`, and then the JavaScript below runs once. What new HTML is added to the page?

    {% no-copy %}
    ```html
    <input id="fruit" value="pear" />
    <ul id="list"></ul>
    ```

    {% no-copy %}
    ```javascript
    const input = document.querySelector('#fruit');
    const list = document.querySelector('#list');

    list.insertAdjacentHTML('beforeend', `<li>${input.value.toUpperCase()}</li>`);
    ```

    <p class="answer-md"></p>
1. In your own words, when would you use `textContent` instead of `innerHTML`?

    <p class="answer-md"></p>
1. What is wrong with this code, and how would you fix it?

    {% no-copy %}
    ```javascript
    const cards = document.querySelectorAll('.card');
    cards.style.backgroundColor = 'yellow';
    ```

    <p class="answer-md"></p>

1. Use `map(...)` to transform the array of objects below into an array of HTML strings:

    {% no-copy %}
    ```javascript
    const books = [
      { id: 1, title: 'Parable of the Sower', author: 'Octavia Butler' },
      { id: 2, title: 'Dune', author: 'Frank Herbert' },
      { id: 3, title: 'Kindred', author: 'Octavia Butler' }
    ];
    ```

    Expected output:

    {% no-copy %}
    ```javascript
    [
      '<p><strong>Parable of the Sower</strong>Octavia Butler</p>',
      '<p><strong>Dune</strong>Frank Herbert</p>',
      '<p><strong>Kindred</strong>Octavia Butler</p>'
    ]
    ```

    <p class="answer-lg"></p>
2. Use `filter(...)` to create a new array containing only the assignments whose `completed` value is `false`.

    {% no-copy %}
    ```javascript
    const assignments = [
      { id: 1, title: 'Quiz 1', completed: true },
      { id: 2, title: 'Tutorial 10', completed: false },
      { id: 3, title: 'Homework 4', completed: false },
      { id: 4, title: 'Reflection', completed: true }
    ];
    ```

    Expected output:

    {% no-copy %}
    ```javascript
    [
      { id: 2, title: 'Tutorial 10', completed: false },
      { id: 3, title: 'Homework 4', completed: false }
    ]
    ```

    <p class="answer-lg"></p>
3. Write a function and event handler so that when the user clicks a button labeled `Show Results`, your code uses `forEach(...)` to append one `<p>` element per student inside the element with id `results`.

    {% no-copy %}
    ```javascript
    const students = [
      { id: 1, name: 'Ava' },
      { id: 2, name: 'Leo' },
      { id: 3, name: 'Mina' }
    ];
    ```

    You may assume these elements already exist:

    {% no-copy %}
    ```html
    <button id="show-results">Show Results</button>
    <section id="results"></section>
    ```

    Expected result after the button is clicked:

    {% no-copy %}
    ```html
    <button id="show-results">Show Results</button>
    <section id="results">
      <p>Ava</p>
      <p>Leo</p>
      <p>Mina</p>
    </section>
    ```



    <p class="answer-lg"></p>


1. Identify **two** problems in this function.

    {% no-copy %}
    ```javascript
    async function createComment(text, token) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: { text: text }
      });

      const data = response.json();
      return data;
    }
    ```

    <p class="answer-lg"></p>

1. Parsons Problem: Put these lines in the correct order to complete a function that fetches data from `/api/students` and renders each student's name inside `#results`.

    Assume this element already exists:

    {% no-copy %}
    ```html
    <section id="results"></section>
    ```

    Write the correct order using the letters only (for example: `B, D, A, C, ...`).

    <!-- .alpha-list -->
    - ```const html = students.map(student => `<p>${student.name}</p>`).join('');```
    - `async function loadStudents() {`
    - `document.querySelector('#results').innerHTML = html;`
    - `const response = await fetch('/api/students');`
    - `}`
    - `const students = await response.json();`

    <p class="answer-md"></p>
1. What is the purpose of a bearer token? Why do we put the bearer token in the `Authorization` header?

    <p class="answer-md"></p>


1. [5pts] Use `map(...)` to create a new array of HTML strings from the student objects below. Each string should look like this:

    {% no-copy %}
    ```html
    <p><strong>Alice:</strong> Computer Science</p>
    ```

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

    <p class="answer-lg"></p>
1. [5pts] Use `filter(...)` to create a new array containing only the students whose major is `"Computer Science"`.

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

    <p class="answer-lg"></p>
1. [5pts] Add a click event handler to the button below. When the user clicks the button, the paragraph with id `message` should display `Welcome to the exam review!`

    {% no-copy %}
    ```html
    <button id="show-message">Show Message</button>
    <p id="message"></p>
    ```

    <p class="answer-lg"></p>
1. [5pts] Loop through the `topics` array below and append one `<li>` per topic inside the element with id `topic-list`.

    {% no-copy %}
    ```javascript
    const topics = ["DOM", "Events", "fetch"];
    ```

    {% no-copy %}
    ```html
    <ul id="topic-list"></ul>
    ```

    <p class="answer-lg"></p>
