---
title: "Authentication"
group: "Final Project"
group_order: 6
order: 2
heading_max_level: 3
quicklink: 0
---

This document focuses on the starter authentication code in `final-project/frontend`


{% collapsible %}
## 1. Start with the big picture

The starter login flow is split across a few small files:

- `starter-client/src/components/Login.jsx`
- `starter-client/src/tokenStorage.js`
- `starter-client/src/App.jsx`
- `starter-client/src/components/Navbar.jsx`

Each file has one main job:

- `Login.jsx` collects credentials and sends the login request
- `tokenStorage.js` stores and retrieves auth data from `localStorage`
- `App.jsx` decides whether to show the login screen or the logged-in app
- `Navbar.jsx` gives the user a way to log out

{% collapsible %}
## 2. Read the state variables in `Login.jsx`

Open:

{% no-copy %}
```text
starter-client/src/components/Login.jsx
```

Near the top, you will see:

{% no-copy %}
```jsx
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
```

These variables store:

- the current username input
- the current password input
- an error message if login fails

This means the login form is using React state to track what the user types.

{% collapsible %}
## 3. Understand the controlled inputs

In the form, you will see code like this:

{% no-copy %}
```jsx
<input
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```

This is called a **controlled input**.

What is happening here?

- `value={username}` tells React what text should appear in the input
- `onChange={...}` runs every time the user types
- `e.target.value` is the newest text from the browser input
- `setUsername(...)` saves that text into React state

Why does this matter?

Because when the user clicks **Sign in**, the code needs access to the actual username and password values. Those values live in React state, so the submit handler can send them to the backend.

If you removed `onChange`, the state would never update, and the login request would not have the real values the user typed.

{% collapsible %}
## 4. Read the submit handler

Still in `Login.jsx`, find the `sendLoginRequest(...)` function.

This is the core of the login flow.

{% no-copy %}
```jsx
async function sendLoginRequest(e) {
  e.preventDefault();
  setError("");

  const res = await fetch(`${getApiBaseUrl()}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}
```

Important ideas:

- `e.preventDefault()` stops the browser from reloading the page
- `fetch(...)` sends a request to the backend
- `method: "POST"` means we are submitting data
- `JSON.stringify({ username, password })` sends the credentials as JSON

So the flow is:

1. the user types into the form
2. React stores those values in state
3. the submit handler sends those values to `/auth/login`

{% collapsible %}
## 5. See what happens after a successful login

After the request finishes, the starter checks for a token:

{% no-copy %}
```jsx
const data = await res.json();

if (!res.ok || !data.token) {
  setError("Login failed.");
  return;
}

setToken(data.token);
storeUsername(username);
handleLoggedIn();
```

Here is what each line does:

- `res.json()` reads the backend response
- `!res.ok || !data.token` checks whether login failed
- `setToken(data.token)` stores the JWT token
- `storeUsername(username)` stores the username too
- `handleLoggedIn()` tells the top-level app that login succeeded

{% collapsible %}
## 6. Read `tokenStorage.js`

Now open:

{% no-copy %}
```text
starter-client/src/tokenStorage.js
```

This file stores auth information in `localStorage`:

{% no-copy %}
```js
const STORAGE_KEY = "auth_token";
const USERNAME_KEY = "auth_username";
```

The helper functions do three jobs:

- save token/username
- read token/username later
- clear both values on logout

This is useful because it keeps auth storage logic in one place instead of scattering `localStorage` calls all over the app.

{% collapsible %}
## 7. See how `App.jsx` decides what to render

Now open:

{% no-copy %}
```text
starter-client/src/App.jsx
```

At the top, the app reads saved auth information:

{% no-copy %}
```jsx
const savedToken = getToken();
const savedUsername = getUsername();
const [hasToken, setHasToken] = useState(savedToken ? true : false);
```

Then it makes a simple decision:

{% no-copy %}
```jsx
if (!hasToken) {
  return <Login handleLoggedIn={handleLoggedIn} />;
}
```

If there is no token, the user sees `Login`.

If there is a token, the user sees the logged-in app shell instead:

{% no-copy %}
```jsx
<Navbar handleLogout={handleLogout} username={savedUsername} />
<Homepage username={savedUsername} />
```

This is the basic auth gate for the whole app.

{% collapsible %}
## 8. Understand logout

When the user clicks logout, the starter runs:

{% no-copy %}
```jsx
function handleLogout() {
  clearToken();
  setHasToken(false);
}
```

That does two things:

- removes the stored token and username
- forces the app back to the login screen
