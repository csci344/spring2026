---
title: "Final Exam Study Guide"
type: "practice exam"
num: 3
draft: 0
assigned_date: "2026-04-27"
heading_max_level: 3
order: 5
points: 0
---

## What to Expect
The final exam covers the full web-development workflow from the semester:

1. HTML gives the page structure and meaning.
2. CSS controls presentation, layout, spacing, typography, and responsive behavior.
3. JavaScript adds behavior, DOM updates, events, data transformation, and API calls.
4. HTTP describes how the browser and server communicate.
5. React organizes the UI into components that use props, state, lists, and effects.

The final is designed to emphasize reading, reasoning, and short code writing. You should expect questions that look similar to the quizzes, Exam 2, and the shorter activities from the second half of the course.

## High-Priority Review List

### HTML
You should be able to:

- write a valid HTML document structure
- choose semantic tags like `header`, `nav`, `main`, `section`, `article`, and `footer`
- write links with relative and absolute paths
- write image tags with useful `alt` text
- write simple forms with labels, inputs, and buttons
- explain why semantic HTML and accessibility matter

Helpful review:

- [Quizzes](/spring2026/quizzes), especially the HTML quizzes
- [Exam 1](/spring2026/exams/exam01)
- [Exam 1 Practice](/spring2026/exams/exam01-practice)

### CSS
You should be able to:

- read and write CSS selectors
- explain the cascade and specificity at a beginner level
- use color, fonts, margins, padding, borders, and `box-sizing`
- create flexbox rows/columns with `justify-content`, `align-items`, and `gap`
- create grid layouts with `grid-template-columns`, `repeat`, `fr`, and `gap`
- write media queries with `min-width` or `max-width`
- explain the difference between flexbox and grid

Helpful review:

- [Quizzes](/spring2026/quizzes), especially the CSS quizzes
- [CSS Photo Gallery Activity](/spring2026/activities/css-photo-gallery)
- [Exam 1](/spring2026/exams/exam01)
- [Exam 1 Practice](/spring2026/exams/exam01-practice)

### JavaScript
You should be able to:

- predict the value and type of variables
- read arrays and objects
- write function declarations and arrow functions
- explain `let` vs. `const`
- use conditionals and loops
- use `map`, `filter`, `forEach`, `toSorted`, and `join`
- select elements with `querySelector` and `querySelectorAll`
- update `textContent`, `innerHTML`, attributes, styles, and classes
- attach event handlers with `addEventListener`

Helpful review:

- [Functions Practice Activity](/spring2026/activities/js-01-functions-practice)
- [Control Flow Practice Activity](/spring2026/activities/js-02-control-practice)
- [Array Methods Practice Activity](/spring2026/activities/js-03-array-methods-practice)
- [JavaScript Review Activity](/spring2026/activities/js-07-review)
- [Quizzes](/spring2026/quizzes), especially the JavaScript quizzes
- [Exam 2](/spring2026/exams/exam02)
- [Exam 2 Practice](/spring2026/exams/exam02-practice)

### HTTP, Fetch + APIs
You should be able to:

- explain the client-server model
- describe common HTTP methods: `GET`, `POST`, `PATCH`, `DELETE`
- explain what `fetch()` does
- explain why `fetch()` is usually used with `async` / `await`
- parse JSON with `await response.json()`
- send JSON with `JSON.stringify(...)`
- include headers like `Content-Type: application/json`
- explain bearer-token authentication and the `Authorization` header
- describe a REST-style endpoint

Helpful review:

- [Browser-Server Communication Activity](/spring2026/activities/01-browser-server-communication)
- [Fetch Activity](/spring2026/activities/js-06-fetch-activity)
- [JavaScript Review Activity](/spring2026/activities/js-07-review)
- [Vintage Shoe Store REST API Activity](/spring2026/activities/rest-api-01-vintage-shoe-store)
- [Quizzes](/spring2026/quizzes), especially the HTTP/fetch and infrastructure quizzes

### React
You should be able to:

- explain what React, Vite, `package.json`, and modules are used for
- write imports and exports
- read and write JSX
- write components that receive props
- explain why components start with capital letters
- use `className` instead of `class`
- use `useState` for values that change
- use event handlers like `onClick`
- render arrays with `map`
- include a stable `key` prop when rendering repeated elements
- use `useEffect` to fetch data after a component renders
- explain the workflow: fetch data, parse JSON, store in state, render with `map`

**Relevant coursework:**

- [React Intro Activity](/spring2026/activities/react-01-intro-activity)
- [React State Activity](/spring2026/activities/react-02-state-activity)
- [React Effects Activity](/spring2026/activities/react-03-effects-activity)
- [Quizzes](/spring2026/quizzes), especially React quizzes 01-05

## Practice Prompts

Use these as quick self-check questions.

### HTML + CSS
1. Write a semantic page skeleton for a website with a header, nav, main area, and footer.
2. Given a small file tree, write the relative path from one file to another.
3. Write an image tag with meaningful alt text.
4. Write a labeled text input and submit button.
5. Write a flexbox rule for a horizontal navigation bar.
6. Write a grid rule for a responsive card layout.
7. Write a media query that changes a three-column layout into one column.

### JavaScript
1. Predict the output of a function that uses default parameters.
2. Predict the output of `filter(...).map(...)`.
3. Explain the difference between `map` and `forEach`.
4. Write an event handler that changes text on the page.
5. Write a function that turns one object into an HTML string.
6. Write one expression that maps an array of objects into HTML and joins the result.

### HTTP + Fetch
1. Explain the difference between `GET` and `POST`.
2. Write a simple `fetch` request that retrieves JSON.
3. Write a `POST` request that sends JSON.
4. Write a `fetch` request with a bearer token.
5. Find the bug in code that forgets `await response.json()`.

### React
1. Write a component that receives a prop and renders it.
2. Explain the difference between props and state.
3. Write a counter component with `useState`.
4. Render a list of objects with `map` and `key`.
5. Write a `useEffect` that fetches data once and stores it in state.

## Two-Hour Study Plan

1. Spend 20 minutes reviewing HTML/CSS cheat sheets and Exam 1.
2. Spend 25 minutes doing JavaScript output-prediction questions from Exam 2 and the quizzes.
3. Spend 20 minutes practicing `map`, `filter`, `join`, and DOM updates.
4. Spend 20 minutes writing two `fetch` examples: one `GET`, one authenticated `POST`.
5. Spend 25 minutes writing small React components with props, state, lists, and effects.
6. Spend 10 minutes writing down the 3 topics you still want to ask about or review again.

## Final Self-Check

- [ ] I can write semantic HTML from scratch.
- [ ] I can choose correct relative paths.
- [ ] I can write accessible image and form markup (`alt` and `aria-label` attributes).
- [ ] I can create flexbox and grid layouts.
- [ ] I can write a media query.
- [ ] I can read short JavaScript snippets and predict the output.
- [ ] I can choose between `map`, `filter`, `forEach`, and `join`.
- [ ] I can update the DOM in response to a click.
- [ ] I can explain `fetch`, `async`, `await`, JSON, and HTTP methods.
- [ ] I can write a bearer-token request.
- [ ] I can explain what React is.
- [ ] I know how to install depedencies and the purpose of `package.json`
- [ ] I know what a bundler is.
- [ ] I can write a React component with props.
- [ ] I can use `useState` to update the UI.
- [ ] I can render a list with the `map` array function.
- [ ] I can explain and write a basic `useEffect` fetch workflow.
