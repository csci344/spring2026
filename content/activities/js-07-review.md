---
title: "Review: Higher-Order Functions + Fetch Workflow"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
start_date: "2026-03-23"
due_date: "2026-03-23"
---

## 1. JavaScript Review

Let's walk through these questions. Try testing your ideas in the console or in a small `.js` file if needed.

{% collapsible closed %}
### 1.1. Choose the right array method

For each task below, decide whether `forEach`, `map`, `filter`, or `toSorted` is the best tool:

1. Create a new array containing only the posts that belong to user `7`.
2. Create a new array of just the usernames from an array of user objects.
3. Loop through an array of comments and insert each one into the DOM.
4. Create a new array of posts ordered from most likes to fewest likes without changing the original array.


{% collapsible closed %}
### 1.2. Predict the output: `map`

What will this code return?

```javascript
const numbers = [2, 4, 6];
const stuff = numbers.map((num) => num * 2);
console.log(stuff);
```

Then answer:

1. Does `map` change the original `numbers` array?
2. Why is `map` often useful when generating HTML strings from data?

{% collapsible closed %}
### 1.3. Predict the output: `filter`

What will this code return?

```javascript
const posts = [
  { id: 1, bookmarked: true },
  { id: 2, bookmarked: false },
  { id: 3, bookmarked: true }
];

const savedPosts = posts.filter((post) => post.bookmarked);
console.log(savedPosts);
```

Then answer:

1. How many objects will be in `savedPosts`?
2. What is the difference between `filter` and `map`?


{% collapsible closed %}
### 1.4. Fix the sorting bug

Why can this code produce the wrong result?

```javascript
const likes = [3, 18, 2, 25];
console.log(likes.sort((a, b) => a - b));
```

Rewrite it so that:

1. the values are sorted from largest to smallest
2. the original `likes` array is not mutated


{% collapsible closed %}
### 1.5. Fetch workflow review

Put these steps in the correct order:

```js
async function displayserverDataToDOM() {
    // 1. Update the DOM with the returned data.
    // 2. Build the URL and request options.
    // 3. Read a search term or id from the DOM.
    // 4. Convert the response to JSON.
    // 5. Call `fetch(...)`.
}
```
Then discuss:

1. Where does `await` belong in this process?
2. What should your code do if `response.ok` is `false`?


{% collapsible closed %}
### 1.6. HTTP method matching

Match each action to the most appropriate HTTP method:

1. Load the current user's profile
2. Create a new bookmark
3. Remove an existing bookmark
4. Load the list of posts

Choose from: `GET`, `POST`, `DELETE`

Then explain:

1. Which of these requests usually needs a request body?
2. Which of these requests should change data on the server?

{% collapsible closed %}
### 1.7. Take the quizzes (on your own)

Navigate to the [quizzes](/spring2026/quizzes) page and take the following quizzes for practice:

1. JavaScript Array Methods: map, filter, reduce, forEach
2. HTTP Methods + Fetch API with Async/Await

## 2. Finishing Tutorial 8

### 2.1. Conditional rendering of a bookmark

<!-- .list-spaced -->
1. <i class="fas fa-bookmark"></i> If the logged in user has bookmarked the post, the post will have a `current_user_bookmark_id` field and the bookmark should be drawn as filled in using this Font Awesome icon: `<i class="fas fa-bookmark"></i>` 
1. <i class="far fa-bookmark"></i> If the logged in user has NOT bookmarked the post, the post's `current_user_bookmark_id` field will be will undefined, and the bookmark should be drawn as hollow using this Font Awesome icon: `<i class="far fa-bookmark"></i>` 
1. Make sure you use the `aria-label` attribute so that screen readers can interpret the icon (because icons aren't perceptable to people who are blind).

### 2.2. Complete the create / delete bookmark functionality

<!-- .list-spaced -->
1. If the user clicks a hollow bookmark, bookmark the post (POST request to `/api/bookmarks`).
1. If the user clicks a filled in bookmark resource, delete the bookmark (DELETE request to `/api/bookmarks/:id`).