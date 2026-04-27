---
title: "Final Exam Practice"
type: "practice exam"
num: 3
draft: 0
assigned_date: "2026-04-27"
heading_max_level: 3
order: 4
points: 150
---

## Introduction
This practice exam is designed to help you prepare for the final exam. It reviews the main ideas from the semester:

1. HTML structure, semantic tags, links, images, forms, and accessibility
2. CSS selectors, box model, flexbox, grid, and media queries
3. JavaScript functions, arrays, DOM updates, events, and array methods
4. HTTP methods, JSON, `fetch`, `async` / `await`, and bearer-token authentication
5. React modules, JSX, components, props, state, rendering lists, and effects
6. REST endpoint design and frontend/backend responsibilities

> ### Guidelines
> * Try to answer each question before looking anything up.
> * If a prompt asks you to write code, keep your solution short and focused.
> * You may use your notes, course website, quizzes, activities, and prior work while practicing.
> * The goal is to identify what you already understand and what you still need to review.

<blockquote class="info">

{% collapsible closed %}
## Practice Answer Key

{% no-copy %}
```txt
1.
+------------------------------------------------+
| header                                         |
|  +------------------------------------------+  |
|  | h1                                       |  |
|  +------------------------------------------+  |
|  +------------------------------------------+  |
|  | nav                                      |  |
|  |  +----------+  +----------+              |  |
|  |  | a        |  | a        |              |  |
|  |  +----------+  +----------+              |  |
|  +------------------------------------------+  |
+------------------------------------------------+
| main                                           |
|  +------------------------------------------+  |
|  | article                                  |  |
|  |  +------------------------------------+  |  |
|  |  | h2                                 |  |  |
|  |  +------------------------------------+  |  |
|  |  +------------------------------------+  |  |
|  |  | p                                  |  |  |
|  |  +------------------------------------+  |  |
|  +------------------------------------------+  |
|  +------------------------------------------+  |
|  | article                                  |  |
|  |  +------------------------------------+  |  |
|  |  | h2                                 |  |  |
|  |  +------------------------------------+  |  |
|  |  +------------------------------------+  |  |
|  |  | p                                  |  |  |
|  |  +------------------------------------+  |  |
|  +------------------------------------------+  |
+------------------------------------------------+
| footer                                         |
|  +------------------------------------------+  |
|  | p                                        |  |
|  +------------------------------------------+  |
+------------------------------------------------+

2. ../images/logo.png

3. Label/input association, meaningful button text, required input type if appropriate, and semantic form structure.

4. .card p selects p elements anywhere inside .card. .card > p selects only direct child p elements.

5. padding is inside the border. margin is outside the border.

6. Use flex for one-dimensional row/column alignment. Use grid for two-dimensional rows and columns.

7. It starts as one column, then becomes three columns on screens at least 900px wide.

8. .button-row { display: flex; align-items: center; gap: 12px; }

9. .profile-card img { width: 100%; max-width: 100%; display: block; }

10. "large"

11. [4, 8, 12]

12. map returns a new transformed array; forEach runs code for each item and returns undefined.

13. Sample:
function addTax(price) {
  return price * 1.07;
}

const addTax = (price) => price * 1.07;

14. Sample:
function showName() {
  const input = document.querySelector('#name-input');
  const output = document.querySelector('#output');
  output.textContent = input.value;
}

document.querySelector('#show-name').addEventListener('click', showName);

15. Sample:
const html = products
  .filter(product => product.inStock)
  .map(product => `<article class="product"><h3>${product.name}</h3><p>$${product.price}</p></article>`)
  .join('');

document.querySelector('#results').insertAdjacentHTML('beforeend', html);

16. GET retrieve, POST create/send, PATCH update part, DELETE remove.

17. Sample:
GET /api/comments = list comments
POST /api/comments = create a comment
PATCH /api/comments/42 = update comment 42
DELETE /api/comments/42 = delete comment 42

18. Sample:
Resource: CoffeeSpot
Path: /api/coffee-spots
Fields: name, neighborhood, rating, notes
Queryable: name, neighborhood, rating

Resource: Category
Path: /api/categories
Fields: name, description
Queryable: name

19. Backend: storing records in SQLite, validating a bearer token, defining /api/comments as a REST resource. Frontend: rendering cards, showing a login form, storing the access token in the browser.

20. A JWT is used to prove the user is authenticated. Passwords should be hashed before storage so the database does not contain readable passwords if it is exposed.

21. JSX is JavaScript syntax that lets React describe UI with HTML-like tags.

22. Props are inputs passed into a component. State is data a component remembers and can update.

23. count starts at 0, setCount updates state, and React re-renders when state changes.

24. The component needs a wrapper around sibling JSX elements.

25. Use key={item.id} or another stable unique key.

26. React will warn that each repeated element should have a unique key prop.

27. useEffect is for side effects like fetching data after render.

28. Full answer should include state, effect, fetch, JSON parse, setState, and map rendering.

29. "RB 244"

30. Sample:
function courseToHTML(course) {
  return `
    <article class="course">
      <h3>${course.title}</h3>
      <p>Room: ${course.room}</p>
      <p>Instructor: ${course.instructor.name}</p>
    </article>
  `;
}

31. Sample:
const honorsStudents = students.filter(student => student.grade >= 90);

32. The bug is that response.json() is missing await. Without await, data is a Promise instead of the parsed JSON.

33. Sample:
await fetch('/api/comments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({ post_id: 42, body: 'Great photo!' })
});

34. /api/sneakers?name=running

35. Sample order:
1. user logs in and receives a token
2. frontend stores the token
3. React requests data with the token in the `Authorization` header
4. backend verifies the token, reads user-specific records from the database, and returns JSON
5. React stores the response in state and renders the list with `map`

36. `export` makes a component, function, or value available to import from another file. This lets a React app split components into separate modules.

37. Sample:
function StudentList({ students }) {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

38. Sample:
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

</blockquote>

## 1. HTML [15pts]

<!-- .list-spaced -->
1. [4 pts] Sketch a semantic HTML structure for a small website that has a title, navigation links, a main content area with two articles, and a copyright footer.

    <p class="answer-xl"></p>

2. [3 pts] Given this file structure, what relative path should `index.html` use for `logo.png`?

    {% no-copy %}
    ```txt
    site
    ├── pages
    │   └── index.html
    └── images
        └── logo.png
    ```

    <p class="answer-sm"></p>

3. [4 pts] Write one short HTML form field for an email address. Include a label.

    <p class="answer-md"></p>

4. [4 pts] Explain the difference between `.card p` and `.card > p`.

    <p class="answer-md"></p>

## 2. CSS [20pts]

<!-- .list-spaced -->
5. [4 pts] Explain the difference between padding and margin.

    <p class="answer-md"></p>

6. [4 pts] When would you choose flexbox? When would you choose CSS Grid?

    <p class="answer-md"></p>

7. [4 pts] What layout does this create?

    {% no-copy %}
    ```css
    .cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    @media (min-width: 900px) {
      .cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    ```

    <p class="answer-md"></p>

8. [4 pts] Write CSS for `.button-row` that puts buttons in a row, centers them vertically, and adds a `12px` gap.

    <p class="answer-lg"></p>

9. [4 pts] Write CSS for `.profile-card img` so the image fills the width of its card and does not overflow.

    <p class="answer-lg"></p>

## 3. JavaScript [29pts]

<!-- .list-spaced -->
10. [4 pts] What value prints?

    {% no-copy %}
    ```javascript
    const sizes = ['small', 'medium', 'large'];
    console.log(sizes[2]);
    ```

    <p class="answer-sm"></p>

11. [5 pts] What value prints?

    {% no-copy %}
    ```javascript
    const numbers = [1, 2, 3, 4];
    const result = numbers.map(number => number * 4);
    console.log(result);
    ```

    <p class="answer-md"></p>

12. [4 pts] Explain the difference between `map` and `forEach`.

    <p class="answer-md"></p>

13. [4 pts] Write the same function two ways:
    - as a traditional function declaration
    - as an arrow function stored in a `const`

    The function should be named `addTax`, accept a `price`, and return the price with 7% tax added. You may write these as two separate snippets.

    <p class="answer-lg"></p>

14. [8 pts] Write JavaScript so that when the button is clicked, the page reads the value from the input and displays it inside the paragraph.

    {% no-copy %}
    ```html
    <input id="name-input" type="text">
    <button id="show-name">Show Name</button>
    <p id="output"></p>
    ```

    <p class="answer-xl"></p>

15. [4 pts] Given the array and HTML below, write JavaScript that:
    - filters for products that are in stock
    - maps each in-stock product to an HTML string
    - joins the HTML strings together
    - appends the result to `#results`

    {% no-copy %}
    ```javascript
    const products = [
      { id: 1, name: 'Notebook', price: 5, inStock: true },
      { id: 2, name: 'Backpack', price: 48, inStock: false },
      { id: 3, name: 'Water Bottle', price: 12, inStock: true }
    ];
    ```

    {% no-copy %}
    ```html
    <section id="results"></section>
    ```

    Each in-stock product should become:

    {% no-copy %}
    ```html
    <article class="product"><h3>Notebook</h3><p>$5</p></article>
    ```

    <p class="answer-xl"></p>

## 4. HTTP, REST + Backend/Frontend [15pts]

<!-- .list-spaced -->
16. [3 pts] Match each HTTP method to its usual purpose: `GET`, `POST`, `PATCH`, `DELETE`.

    <p class="answer-md"></p>

17. [3 pts] Suppose your API has a `Comment` resource at `/api/comments`. Write the REST route and HTTP method you would use to:
    - list all comments
    - create a new comment
    - update comment `42`
    - delete comment `42`

    <p class="answer-lg"></p>

18. [4 pts] You are designing a "Favorite Coffee Spots" app. Name two REST resources that could support the app. For each resource, list:
    - the REST path
    - 2-4 fields
    - at least one field that should be queryable

    <p class="answer-xl"></p>

19. [3 pts] For each task, say whether it belongs mostly in the frontend or backend:
    - storing records in SQLite
    - rendering cards on the page
    - validating whether a bearer token is accepted
    - showing a login form
    - defining `/api/comments` as a REST resource
    - storing the access token in the browser

    <p class="answer-lg"></p>

20. [2 pts] What is a JWT used for, and why should passwords be hashed before they are stored in a database?

    <p class="answer-lg"></p>

## 5. React [18pts]

<!-- .list-spaced -->
21. [2 pts] What is JSX?

    <p class="answer-md"></p>

22. [3 pts] Explain the difference between props and state.

    <p class="answer-md"></p>

23. [4 pts] Explain what `count`, `setCount`, and `useState(0)` mean in this line:

    {% no-copy %}
    ```javascript
    const [count, setCount] = useState(0);
    ```

    <p class="answer-lg"></p>

24. [3 pts] What is wrong with this component?

    {% no-copy %}
    ```jsx
    function Profile() {
      return (
        <h2>Ada</h2>
        <p>Programmer</p>
      );
    }
    ```

    <p class="answer-md"></p>

25. [2 pts] Why should repeated React elements usually have a `key` prop?

    <p class="answer-md"></p>

26. [2 pts] What warning or problem would React likely report here?

    {% no-copy %}
    ```jsx
    const colors = ['red', 'blue', 'green'];

    function ColorList() {
      return (
        <ul>
          {colors.map(color => <li>{color}</li>)}
        </ul>
      );
    }
    ```

    <p class="answer-md"></p>

27. [2 pts] What is `useEffect` mainly used for?

    <p class="answer-md"></p>

## 6. Integrated Practice [3pts]

28. [3 pts] In 5-7 steps, describe the workflow for a React component that loads data from `/api/sneakers`, stores it in state, and renders a card for each sneaker.

    <p class="answer-xl"></p>

## 7. Additional Programming + Concepts [50pts]

<!-- .list-spaced -->
29. [4 pts] What value prints?

    {% no-copy %}
    ```javascript
    const course = {
      title: 'Web Development',
      room: 'RB 244',
      instructor: {
        name: 'Dr. Smith'
      }
    };

    console.log(course.room);
    ```

    <p class="answer-sm"></p>

30. [6 pts] Write a function named `courseToHTML(course)` that takes a course object and returns an HTML string.

    {% no-copy %}
    ```javascript
    const course = {
      title: 'Web Development',
      room: 'RB 244',
      instructor: {
        name: 'Dr. Smith'
      }
    };
    ```

    Your function should return HTML like this, but it should work for any course object:

    {% no-copy %}
    ```html
    <article class="course">
      <h3>Web Development</h3>
      <p>Room: RB 244</p>
      <p>Instructor: Dr. Smith</p>
    </article>
    ```

    <p class="answer-xl"></p>

31. [5 pts] Use `filter(...)` to create a new array containing only the students whose grade is at least `90`.

    {% no-copy %}
    ```javascript
    const students = [
      { id: 1, name: 'Ada', grade: 95 },
      { id: 2, name: 'Grace', grade: 88 },
      { id: 3, name: 'Linus', grade: 91 }
    ];
    ```

    <p class="answer-lg"></p>

32. [5 pts] What is wrong with this code?

    {% no-copy %}
    ```javascript
    async function loadPosts() {
      const response = await fetch('/api/posts');
      const data = response.json();
      console.log(data);
    }
    ```

    <p class="answer-md"></p>

33. [6 pts] Write a `fetch` request that creates a comment. It should:
    - send a `POST` request to `/api/comments`
    - include a bearer token stored in a variable named `token`
    - send `{ post_id: 42, body: 'Great photo!' }` as JSON

    <p class="answer-xl"></p>

34. [4 pts] Suppose your Sneakers API endpoint is `/api/sneakers`, and `name` is a queryable field. What URL would you use for a `GET` request that asks the server for sneakers whose name includes `running`?

    <p class="answer-sm"></p>

35. [5 pts] Put these steps in a reasonable order for a React app that loads user-specific data:
    - backend verifies the token, reads user-specific records from the database, and returns JSON
    - React stores the response in state and renders the list with `map`
    - user logs in and receives a token
    - React requests data with the token in the `Authorization` header
    - frontend stores the token

    <p class="answer-xl"></p>

36. [4 pts] What is the purpose of the `export` keyword in some of your React modules?

    <p class="answer-md"></p>

37. [6 pts] Write a React component named `StudentList` that receives a `students` prop and renders each student's name in an `<li>`. Use `student.id` as the key.

    {% no-copy %}
    ```javascript
    const students = [
      { id: 1, name: 'Ada' },
      { id: 2, name: 'Grace' }
    ];
    ```

    <p class="answer-xl"></p>

38. [5 pts] Write a small React `Counter` component that starts at `0` and increases by `1` when the button is clicked.

    <p class="answer-xl"></p>

## 8. Reflection

Before the final, make a short study plan:

1. Which topic feels strongest right now?
2. Which topic feels the most fragile?
3. Which three quizzes or activities will you review first?
