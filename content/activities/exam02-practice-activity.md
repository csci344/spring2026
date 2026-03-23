---
title: "Exam 02 Practice (Review Day)"
type: lecture
draft: 0
---

## 1. Event handler workflow

Imagine the user clicks a bookmark button on a post.

Write out the sequence of steps that should happen from the click event to the updated UI. Your answer should mention:

1. the event handler
2. the API request
3. the HTTP method
4. the DOM or state update

## 2. Callback meaning

For each of the following, explain what the function inside the parentheses does:

{% no-copy %}
```javascript
posts.map((post) => `<p>${post.caption}</p>`)
```

{% no-copy %}
```javascript
posts.filter((post) => post.bookmarked)
```

{% no-copy %}
```javascript
posts.toSorted((a, b) => b.likes - a.likes)
```

## 3. Fetch + authentication

Write a short `fetch` example that sends a `POST` request to `/api/bookmarks` with:

1. a JSON body
2. a `Content-Type` header
3. a bearer token in the `Authorization` header

## 4. Debug the async bug

What is wrong with this code (there are at least 2 errors), and how would you fix it?

{% no-copy %}
```javascript
function loadProfile() {
  const response = await fetch('/api/profile');
  const data = response.json();
  console.log(data);
}
```

## 5. Pick the best tool

For each task below, choose the best tool:

1. `forEach`
2. `map`
3. `filter`
4. `toSorted`

Tasks:

1. Keep only posts that belong to the current user.
2. Turn an array of posts into an array of HTML strings.
3. Loop through an array and append each result to the page.
4. Create a sorted copy of posts from highest likes to lowest likes.
