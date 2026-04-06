---
title: "Async/Await + Fetch API"
group: "JavaScript Resources"
group_order: 4
order: 9
quicklink: 0
heading_max_level: 3
quizzes: ["javascript-http-fetch"]
---

The `fetch()` function, the `async` keyword, and the `await` keyword are commonly used together when JavaScript needs to talk to a web API. These tools are important because they let you request data from a server, send data to a server, and then use the response in your program.

{% collapsible closed %}
## 1. HTTP Methods and REST

When JavaScript communicates with a server, it usually sends an HTTP request to a URL. In a REST-style API, the URL usually names a resource, and the HTTP method tells the server what kind of action you want to perform.

### Common HTTP Methods

| Method | Typical job | Example |
|--|--|--|
| `GET` | retrieve data | get all posts |
| `POST` | create data | create a new bookmark |
| `PATCH` | update part of a resource | change a caption |
| `DELETE` | remove a resource | delete bookmark `42` |

### Example resource URLs

```javascript
/api/posts
/api/bookmarks
/api/bookmarks/42
```

These URLs are noun-based. They describe the resource rather than the action.

{% collapsible closed %}
## 2. What `fetch()` Returns

The `fetch()` function starts an HTTP request and **immediately returns a Promise**.

```javascript
const promise = fetch('/api/posts');
console.log(promise);
```

That Promise will eventually resolve to a `Response` object.

```javascript
const response = await fetch('/api/posts');
console.log(response);
```

Important distinction:

```javascript
const response = await fetch('/api/posts');
const data = await response.json();
```

- `response` is the `Response` object from the server
- `data` is the parsed JavaScript value from the response body

{% collapsible closed %}
## 3. `async` and `await`

The `async` keyword is used when you want to write a function that can use `await`.

```javascript
async function loadPosts() {
    const response = await fetch('/api/posts');
    const data = await response.json();
    console.log(data);
}
```

### What `async` does

- allows you to use `await` inside the function
- makes the function return a Promise

### What `await` does

- pauses the `async` function until a Promise finishes
- gives you the resolved value of that Promise

For example:

```javascript
async function getMessage() {
    const result = await Promise.resolve('hello');
    console.log(result);
}
```

Without `await`, you would usually get a Promise instead of the final value.

{% collapsible closed %}
## 4. Basic `GET` Request

If you want to retrieve data from an API, `GET` is the most common method:

```javascript
async function loadPosts() {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    console.log(posts);
}
```

### Typical workflow

1. call `fetch(...)`
2. wait for the response
3. parse the JSON
4. use the data

Here is a slightly larger example:

```javascript
async function loadPosts() {
    const response = await fetch('/api/posts');
    const posts = await response.json();

    const html = posts
        .map(post => `<li>${post.caption}</li>`)
        .join('');

    document.querySelector('#results').innerHTML = html;
}
```

{% collapsible closed %}
## 5. Sending JSON with `POST`

When you send JSON to a server, there are usually two important steps:

1. convert the JavaScript object into JSON text using `JSON.stringify(...)`
2. set the `Content-Type` header to `application/json`

```javascript
async function createPost(caption) {
    const postData = { caption: caption };

    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });

    const data = await response.json();
    return data;
}
```

If you forget `JSON.stringify(...)`, you are not actually sending proper JSON.

{% collapsible closed %}
## 6. Bearer Tokens and Protected Requests

Some endpoints require authentication. In those cases, you usually include a bearer token in the `Authorization` header.

```javascript
headers: {
    'Authorization': `Bearer ${token}`
}
```

Here is an example of a protected `POST` request:

```javascript
async function createBookmark(postId, token) {
    const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ post_id: postId })
    });

    const data = await response.json();
    return data;
}
```

And here is an example of a protected `DELETE` request:

```javascript
async function deleteBookmark(bookmarkId, token) {
    const response = await fetch(`/api/bookmarks/${bookmarkId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data;
}
```

{% collapsible closed %}
## 7. Common Mistakes

### Mistake 1: forgetting `await response.json()`

```javascript
async function loadPosts() {
    const response = await fetch('/api/posts');
    const data = response.json();
    console.log(data);
}
```

Problem: `response.json()` also returns a Promise.

Fix:

```javascript
async function loadPosts() {
    const response = await fetch('/api/posts');
    const data = await response.json();
    console.log(data);
}
```

### Mistake 2: sending a plain object as the body

```javascript
await fetch('/api/posts', {
    method: 'POST',
    body: { caption: 'Hello' }
});
```

Fix:

```javascript
await fetch('/api/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ caption: 'Hello' })
});
```

### Mistake 3: forgetting `Bearer `

```javascript
headers: {
    'Authorization': token
}
```

Fix:

```javascript
headers: {
    'Authorization': `Bearer ${token}`
}
```

{% collapsible %}
## 8. Practice Exercises

### Exercise 1: Load JSON data

Write an `async` function called `loadComments` that fetches `/api/comments`, parses the JSON, and logs the result.

```javascript
// Your code here
```

{% collapsible closed %}
#### Show Answer

```javascript
async function loadComments() {
    const response = await fetch('/api/comments');
    const data = await response.json();
    console.log(data);
}
```

### Exercise 2: Send JSON with `POST`

Write an `async` function called `createComment(text)` that sends `{ text: text }` to `/api/comments` as JSON.

```javascript
// Your code here
```

{% collapsible closed %}
#### Show Answer

```javascript
async function createComment(text) {
    const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    });

    return await response.json();
}
```

### Exercise 3: Protected request

Write an `async` function called `loadBookmarks(token)` that fetches `/api/bookmarks` and includes the bearer token in the request headers.

```javascript
// Your code here
```

{% collapsible closed %}
#### Show Answer

```javascript
async function loadBookmarks(token) {
    const response = await fetch('/api/bookmarks', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return await response.json();
}
```

### Key Takeaways

- `fetch()` returns a Promise
- `async` lets you use `await`
- `await fetch(...)` gives you a `Response`
- `await response.json()` gives you the parsed data
- when sending JSON, use `JSON.stringify(...)` and `Content-Type: application/json`
- protected endpoints often require `Authorization: Bearer ${token}`
