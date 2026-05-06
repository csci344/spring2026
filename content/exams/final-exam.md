---
title: "Final Exam: HTML, CSS, JavaScript, HTTP, React"
type: "exam"
num: 3
draft: 0
assigned_date: "2026-05-06"
due_date: "2026-05-06"
heading_max_level: 3
order: 3
points: 125
---

## Introduction
This is a paper-based cumulative final exam. It asks you to read code, reason about what code will do, explain important web-development concepts, and write short HTML, CSS, JavaScript, HTTP, and React snippets by hand.

**Name:** ______________________________________

> ### Guidelines
> * Read each prompt carefully.
> * You may bring one 8.5-by-11-inch cheatsheet. You may use both the front and back.
> * For multiple-choice questions, clearly circle or mark your answer(s).
> * For short-answer questions, explain your reasoning clearly.
> * For code-writing questions, keep your solution short and focused.
> * Unless a prompt says otherwise, assume selectors match real elements and the code runs without syntax errors.
> * No internet allowed, and you may not communicate with anyone during the exam.


<blockquote class="info">

{% collapsible closed %}
## Answer Key

{% no-copy %}
```txt
1. header, nav, main, section/article, footer. Sample explanation: semantic tags describe the role of page content and help browsers, screen readers, search engines, and developers understand the structure.

2. pages/contact.html

3. A and C. The image needs a meaningful alt attribute. If it is decorative, alt="" is acceptable.

4. display: flex; justify-content: space-between; align-items: center; gap: 10px;

5. Three equal columns with 24px gaps.

6. At 700px wide, the cards become one column.

7. CSS specificity is a way of deciding which rule wins when multiple rules target the same element. #featured wins over .card because an ID selector is more specific than a class selector.

8. "one". The first condition, `a || b`, is true because `b` is true, so the first branch runs and the later branches are skipped.

9. [8, 12, 16]

10. The code prints 1, then 3, then 6.

11. querySelector returns the first matching element. querySelectorAll returns a list of all matching elements.

12. Sample:
function showMessage() {
  const message = document.querySelector('#message');
  message.textContent = 'Saved';
  message.classList.add('success');
}
document.querySelector('#save-btn').addEventListener('click', showMessage);

13. Sample:
const html = posts
  .filter(post => post.isPublished)
  .map(post => `<article><h3>${post.title}</h3><p>${post.likes} likes</p></article>`)
  .join('');

14. Sample:
async function loadCourses() {
  const response = await fetch('/api/courses');
  const courses = await response.json();
  document.querySelector('#courses').innerHTML = courses.map(courseToHTML).join('');
}

15. Sample:
GET /api/coffee-spots?neighborhood=Downtown

This route lists coffee spots filtered by neighborhood. Each returned record might include fields such as id, name, neighborhood, rating, drink_notes, latitude, and longitude.

16. Sample:
async function loadSneakers() {
  const response = await fetch('/api/sneakers?name=running');
  const data = await response.json();
  return data;
}

The query parameter is `name=running`, and the `?` starts the query string. Since this is a GET request, the filter goes in the URL instead of in a request body.

17. Sample:
Frontend: rendering cards, showing the login form, storing the access token in the browser, sending a GET request.
Backend: storing records in SQLite, defining REST resources/routes, checking whether a bearer token is valid.
Both: authentication flow overall, because the frontend collects/stores/sends the token and the backend issues/checks it.

18. Sample: `export` makes a function, component, or value available to import from another file. In React, this lets you define a component in one module and use it in another module, such as importing a `Card` component into `App.jsx`.

19. Capitalized component names tell React it is a custom component. Lowercase JSX names are treated like built-in HTML tags.

20. "Hello Grace"

21. The component returns sibling elements without a wrapper. Wrap them in a fragment <>...</> or one parent element.

22. count starts at 0, setCount updates state, and React re-renders when state changes.

23. The button will show 1 after one click.

24. Sample:
function SneakerCard({ sneaker }) {
  return (
    <article className="card">
      <h3>{sneaker.name}</h3>
      <p>{sneaker.brand}</p>
      <p>${sneaker.price}</p>
    </article>
  );
}

```

</blockquote>

<div class="page-break"></div>

## 1. HTML + Accessibility

<!-- .list-extra-spaced -->
1. [5 pts] Name at least five semantic HTML tags you might use to structure a page. In 1-2 sentences, explain why semantic HTML is useful.

    <p class="answer-lg"></p>

2. [4 pts] Given this file structure, what ***relative path*** should `index.html` use to link to `contact.html`?

    {% no-copy %}
    ```txt
    website
    ├── index.html
    └── pages
        └── contact.html
    ```

    <p class="answer-sm"></p>

3. [4 pts] Circle all statements that are true.

    <!-- .alpha-list -->
    - Every meaningful image should have an `alt` attribute.
    - The `alt` text should usually say "image of" before describing the image.
    - Decorative images can use an empty alt attribute: `alt=""`.
    - A link with display text of "click here" is usually more descriptive than a link that names where it goes.

<div class="page-break"></div>

## 2. CSS Layout + Responsive Design

<!-- .list-extra-spaced -->
4. [6 pts] Write CSS for `.site-header` that uses flexbox to place its children in a row, spread them apart horizontally, center them vertically, and add a `10px` gap.

    <p class="answer-xl"></p>

5. [5 pts] What layout does this CSS create?

    {% no-copy %}
    ```css
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    ```

    <p class="answer-md"></p>

6. [4 pts] What happens when the viewport is 700px wide?

    {% no-copy %}
    ```css
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
      .cards {
        grid-template-columns: 1fr;
      }
    }
    ```

    <p class="answer-md"></p>

7. [4 pts] In your own words, explain CSS specificity. Which selector is more specific: `.card` or `#featured`?

    <p class="answer-md"></p>

<div class="page-break"></div>

## 3. JavaScript Fundamentals + DOM

<!-- .list-extra-spaced -->
8. [4 pts] What will this code output? Briefly explain which branch runs.

    {% no-copy %}
    ```javascript
    let a = false;
    let b = true;
    let c = false;
    let result = '';

    if (a || b) {
      result = 'one';
    } else if (!c && b) {
      result = 'two';
    } else if (a || !b) {
      result = 'three';
    } else {
      result = 'four';
    }

    console.log(result);
    ```

    <p class="answer-sm"></p>

9. [8 pts] What will this code output?

    {% no-copy %}
    ```javascript
    const numbers = [2, 4, 6, 8];
    const result = numbers
      .filter(number => number > 3)
      .map(number => number * 2);

    console.log(result);
    ```

    <p class="answer-md"></p>

<div class="page-break"></div>

10. [4 pts] What will this code output?

    {% no-copy %}
    ```javascript
    let count = 1;
    let total = 0;

    while (count <= 3) {
      total = total + count;
      console.log(total);
      count = count + 1;
    }
    ```

    <p class="answer-md"></p>

11. [4 pts] Explain the difference between `document.querySelector('.card')` and `document.querySelectorAll('.card')`.

    <p class="answer-md"></p>

12. [10 pts] Write a JavaScript function that changes the paragraph text to `Saved` and adds the class `success` to the paragraph. Then write the code that attaches that function to the button's `click` event.

    {% no-copy %}
    ```html
    <button id="save-btn">Save</button>
    <p id="message"></p>
    ```

    <p class="answer-md"></p>

<div class="page-break"></div>

13. [10 pts] Given the array below, write one expression using `filter`, `map`, and `join` that creates HTML ***only for published posts***.

    {% no-copy %}
    ```javascript
    const posts = [
      { id: 1, title: 'Hello', likes: 4, isPublished: true },
      { id: 2, title: 'Draft', likes: 0, isPublished: false },
      { id: 3, title: 'Update', likes: 8, isPublished: true }
    ];
    ```

    Each published post should become:

    {% no-copy %}
    ```html
    <article><h3>Hello</h3><p>4 likes</p></article>
    ```

    <p class="answer-xl"></p>

<div class="page-break"></div>

## 4. HTTP, REST, JSON + Authentication

<!-- .list-extra-spaced -->
14. [5 pts] Put these lines in the correct order to complete a function that fetches courses and renders them inside `#courses`.

    <!-- .alpha-list -->
    - `const courses = await response.json();`
    - `async function loadCourses() {`
    - `document.querySelector('#courses').innerHTML = courses.map(courseToHTML).join('');`
    - `const response = await fetch('/api/courses');`
    - `}`

    <p class="answer-xl"></p>


<div class="page-break"></div>

15. [9 pts] You are designing a "Favorite Coffee Spots" app. Users can log in, browse coffee shops, and filter shops by neighborhood.

    Design one API route that lets the frontend ask for coffee shops in a specific neighborhood. Include:
    - the HTTP method
    - the path
    - the query parameter
    - 3-5 fields the response should include

    <p class="answer-xl"></p>

<div class="page-break"></div>

16. [4 pts] Suppose your Sneakers API endpoint is `/api/sneakers`, and `name` is a queryable field. Write an async function named `loadSneakers` that asks the server for sneakers whose name includes `running`, stores the resulting JSON response in a variable called `data`, and returns `data`.

    <p class="answer-lg"></p>

17. [4 pts] For each task, say whether it belongs mostly in the **frontend**, **backend**, or **both**:
    
    <!-- .list-spaced-more -->
    1. storing records in a database: __________________________________________
    1. rendering cards on the page: ____________________________________________
    1. validating whether a bearer token is accepted: ______________________________
    1. sending a `GET /api/posts` request: _________________________________________
    1. showing a login form: _______________________________________________________
    1. defining `/api/comments` as a REST resource: ________________________________
    1. storing the access token in the browser:  __________________________________

<div class="page-break"></div>

## 5. React Components, State, Lists + Effects

<!-- .list-extra-spaced -->
18. [4 pts] What is the purpose of the `export` keyword in some of your React modules?

    <p class="answer-md"></p>

19. [4 pts] Why do React component names usually start with a capital letter?

    <p class="answer-md"></p>

20. [4 pts] What text appears on the page?

    {% no-copy %}
    ```jsx
    function Greeting({ name = 'Guest' }) {
      return <h2>Hello {name}</h2>;
    }

    <Greeting name="Grace" />
    ```

    <p class="answer-sm"></p>


<div class="page-break"></div>

21. [4 pts] What is wrong with this component? How would you fix it?

    {% no-copy %}
    ```jsx
    function Card() {
      return (
        <h2>Title</h2>
        <p>Description</p>
      );
    }
    ```

    <p class="answer-md"></p>

22. [5 pts] Explain what `count`, `setCount`, and `useState(0)` mean in this line:

    {% no-copy %}
    ```javascript
    const [count, setCount] = useState(0);
    ```

    <p class="answer-lg"></p>


<div class="page-break"></div>

23. [4 pts] What will the button show after it is clicked once?

    {% no-copy %}
    ```jsx
    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <button onClick={() => setCount(count + 1)}>
          {count}
        </button>
      );
    }
    ```

    <p class="answer-sm"></p>


24. [6 pts] Write a component named `SneakerCard` that receives a `sneaker` prop and renders its `name`, `brand`, and `price` in an article with className `card`.

    {% no-copy %}
    ```javascript
    const sneaker = {
      id: 7,
      name: 'Air Zoom',
      brand: 'Nike',
      price: 120
    };
    ```

    <p class="answer-xl"></p>
