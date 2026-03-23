---
title: "JavaScript Review"
type: "practice exam"
num: 2
draft: 0
assigned_date: "2026-04-03"
heading_max_level: 3
order: 3
points: 100
---

## Introduction
This practice exam is designed to help you prepare for Exam 2. It is not a prediction of the exact exam, but it does review the main ideas you should be ready to explain and use:

1. DOM manipulation and event handlers
2. higher-order functions (`forEach`, `map`, `filter`, `toSorted`)
3. closures and callback functions
4. `async` / `await`
5. `fetch`, HTTP methods, JSON, and bearer-token authentication

> ### Guidelines
> * Read each prompt carefully.
> * Try to answer the question before looking anything up.
> * If a prompt asks you to write code, keep your solution short and focused.
> * You may use your notes, the course website, prior work, and reference materials while practicing.
> * The goal is to identify what you already know and what you still need to review before the exam.

## How to use this review
You can work through the questions in order, or you can jump to the section you need the most practice with:

1. (20pts) [DOM + Event Handlers](#part-1-dom--event-handlers-20pts)
2. (25pts) [Higher-Order Functions](#part-2-higher-order-functions-25pts)
3. (25pts) [Async/Await + Fetch](#part-3-asyncawait--fetch-25pts)
4. (25pts) [Short Coding Prompts](#part-4-short-coding-prompts-25pts)
5. (5pts) [Reflection](#part-5-reflection-5pts)


## 1. DOM + Event Handlers [20pts] <a id="part-1-dom--event-handlers-20pts"></a>

<!-- .list-spaced -->
1. In your own words, explain the difference between:
   - `document.querySelector('.card')`
   - `document.querySelectorAll('.card')`

    <p class="answer-md"></p>
2. Explain what an event handler does.

    <p class="answer-md"></p>
3. Describe when you would use each of the following events:
   - `click`
   - `change`
   - `keydown`

    <p class="answer-md"></p>
4. Suppose a button is supposed to create a bookmark (a protected resource that requires a token). What are the 3-5 steps that should happen after the user clicks it?

    <p class="answer-lg"></p>
5. Consider these two ways of adding HTML to the page:

    {% no-copy %}
    ```javascript
    results.innerHTML += `<p>${post.caption}</p>`;
    ```

    {% no-copy %}
    ```javascript
    results.insertAdjacentHTML('beforeend', `<p>${post.caption}</p>`);
    ```

    * How are these two approaches similar?
    * How are they different?
    * When might you use each one?

    <p class="answer-lg"></p>

## 2. Higher-Order Functions [25pts] <a id="part-2-higher-order-functions-25pts"></a>

<!-- .list-spaced -->
1. For each task below, choose the best method: `forEach`, `map`, `filter`, or `toSorted`.
   - Create a new array of only the liked posts.
   - Create a new array of HTML strings for each post.
   - Loop through comments and insert each one into the DOM.
   - Create a sorted copy of posts from most recent to oldest.

    <p class="answer-lg"></p>
2. What does the callback function inside `map(...)` do?

    <p class="answer-md"></p>
3. What does the callback function inside `filter(...)` do?

    <p class="answer-md"></p>
4. What does the callback function inside `toSorted(...)` do?

    <p class="answer-md"></p>
5. Predict the output of the following code:

    ```javascript
    const posts = [
        { id: 1, likes: 2, isBookmarked: true },
        { id: 2, likes: 8, isBookmarked: false },
        { id: 3, likes: 5, isBookmarked: true }
    ];

    const result = posts
        .filter((post) => post.isBookmarked)
        .map((post) => post.likes)
        .toSorted((a, b) => b - a);

    console.log(result);
    ```

    <p class="answer-md"></p>

6. Explain why `forEach` is usually not the best choice when you want to create a new transformed array.

    <p class="answer-md"></p>


## 3. Async/Await + Fetch [25pts] <a id="part-3-asyncawait--fetch-25pts"></a>

<!-- .list-spaced -->
1. Put these steps in the correct order:
   - parse the JSON
   - build the URL and request options
   - update the DOM
   - call `fetch(...)`
   - read values from the DOM

    <p class="answer-lg"></p>
2. What does `fetch()` return immediately?

    <p class="answer-sm"></p>
3. Why do we often write `await fetch(...)` inside an `async` function?

    <p class="answer-md"></p>
4. What is the difference between:
   - `const response = await fetch(url);`
   - `const data = await response.json();`

    <p class="answer-md"></p>
5. What is the job of the `Content-Type: application/json` header?

    <p class="answer-md"></p>
6. In the context of the course API, what is a bearer token and why is it needed?

    <p class="answer-md"></p>
7. Where does the bearer token usually go in an authenticated `fetch` request?

    <p class="answer-md"></p>

## 4. Short Coding Prompts [25pts] <a id="part-4-short-coding-prompts-25pts"></a>

Write short answers or short code snippets for each prompt.

### 4.1. Render a list of post captions

Given this array:

```javascript
const posts = [
  { id: 1, caption: "Hello world" },
  { id: 2, caption: "Spring flowers" }
];
```

Write one line of JavaScript using `map` and `join` that turns the array into HTML paragraph tags.

<p class="answer-lg"></p>

### 4.2. Create an authenticated bookmark request

Write a `fetch` request that:

1. sends a `POST` request to `/api/bookmarks`
2. includes a bearer token in the headers
3. sends `{ post_id: 42 }` as JSON

<p class="answer-lg"></p>

### 4.3. Fix the bug

What is wrong with this code?

```javascript
async function loadPosts() {
  const response = await fetch('/api/posts');
  const data = response.json();
  console.log(data);
}
```

<p class="answer-md"></p>


## 5. Reflection [5pts] <a id="part-5-reflection-5pts"></a>

Before the exam, make a short study plan for yourself:

1. Which one topic feels strongest right now?
2. Which one topic still feels confusing?
3. What will you review next: DOM, array methods, closures, or fetch/auth?

## 6. Live Coding Expectations

Based on past versions of this exam, the live coding portion will likely focus on **small, targeted JavaScript tasks** rather than building a full app from scratch.

Here is the kind of work you should expect:

<!-- .list-spaced -->
1. **Write one focused function at a time.**
   You might be asked to write a helper like:
   - a function that fetches data from an API and returns JSON
   - a function that turns one object into an HTML string
   - a function that loops through results and renders them to the page

1. **Work from starter files.**
   You may be given starter `index.html` and `main.js` files with prompts and test code already in place. The task was to fill in the missing JavaScript, not to invent the entire structure from nothing.

1. **Fetch questions will probably be short and concrete.**
   For example, you might be asked to:
   - build a URL from a search term
   - make a `fetch` request with `async` / `await`
   - parse the JSON response
   - include headers like `Content-Type` or `Authorization`

1. **Rendering questions will probably focus on one object or one loop.**
   A common pattern is:
   - write one function like `businessToHTML(obj)`
   - then use a loop such as `forEach(...)` to render multiple items

1. **You may be asked to debug a short snippet.**
   Be ready to explain or fix mistakes such as:
   - forgetting `await response.json()`
   - using the wrong HTTP method
   - forgetting `JSON.stringify(...)`
   - forgetting to insert the generated HTML into the DOM

1. **You should not expect a huge amount of starter coding.**
   The emphasis is more likely to be on whether you understand the workflow:
   - get data
   - transform data
   - render data
   - respond to user interaction

1. A good example of something you might be asked to do: [DOM + fetch exercises](/spring2026/activities/js-06-fetch-activity)

In other words, for the live coding portion, you should be ready to write and explain **short JavaScript functions** that use the DOM, array methods, and `fetch` in realistic small examples.

## Self-Check

- [ ] I reviewed DOM selection and event-handler basics.
- [ ] I can explain what the callback inside `map`, `filter`, and `toSorted` does.
- [ ] I can describe the `fetch` workflow from user interaction to DOM update.
- [ ] I can explain how bearer-token authentication fits into an API request.
- [ ] I identified at least one topic I still need to review before Exam 2.
