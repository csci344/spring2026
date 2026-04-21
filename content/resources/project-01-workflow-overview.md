---
title: "Overview + Workflow"
group: "Final Project"
group_order: 6
order: 1
heading_max_level: 3
quicklink: 0
---

This document focuses on the overall workflow of the starter code in `final-project/frontend`.

{% collapsible %}
## 1. The big picture: how the app works together

In this project, the React frontend is doing several jobs at once:

- letting a user log in
- storing a token after login succeeds
- making requests to the backend
- creating, reading, updating, and deleting data
- showing that data in more than one way

You can think of the workflow like this:

1. A user logs in with credentials.
2. The backend checks those credentials and returns an access token.
3. The frontend stores that token so later requests can prove who the user is.
4. The frontend uses the token when making protected API requests.
5. The app fetches or changes data through CRUD operations.
6. The user switches between different ways of viewing the same data, such as a table, chart, or map.

So even though login and data views may feel like separate features, they are both part of the same overall app workflow.

{% collapsible %}
## 2. What CRUD + login + different views means in practice

Here is one way to picture the app:

- **Login** answers: "Who is using the app?"
- **Token storage** answers: "How does the frontend prove that identity on later requests?"
- **CRUD** answers: "What data can this user create, read, update, or delete?"
- **Views** answer: "How should that data be displayed right now?"

For example, a user might:

1. log in,
2. load a list of plants,
3. add a new plant,
4. edit one plant's information,
5. delete another plant,
6. switch from a list view to a bar chart or map view.

The important idea is that the underlying dataset may stay the same while the presentation changes.

{% collapsible %}
## 3. Authentication and token storage

Authentication is mostly about requests and app startup behavior.

When you study login/token workflow, focus on ideas like these:

- sending credentials to the backend
- receiving an access token in the response
- storing that token in `localStorage` or as a `cookie`
- reading the token back when the app starts
- attaching the token to future requests
- deciding what the app should do if no token exists or the token is invalid

This is different from drawing charts or switching screens. It is mainly about communication with the server and remembering whether the user is authenticated.

{% collapsible %}
## 4. `mode` state and conditional rendering

The `mode` variable is a different kind of problem. It is mostly about React state and UI behavior.

When you study `mode`, focus on ideas like these:

- creating a state variable with `useState`
- changing that state when a user clicks a button or navigation control
- deciding which component to render for each mode
- showing the same dataset in different formats

For example, the app might store a value such as:

{% no-copy %}
```jsx
const [mode, setMode] = useState("table");
```

Then the UI could switch between views:

- `"table"` for a table view
- `"chart"` for a bar or pie chart
- `"map"` for a map

For example, you might render different components like this:

{% no-copy %}
```jsx
if (mode === "table") {
  return <TableView items={items} />;
} else if (mode === "chart") {
  return <ChartView items={items} />;
} else {
  return <MapView items={items} />;
}
```

This is a basic example of **conditional rendering**. React checks the current value of `mode` and decides which component to show.

This is not really about authentication. It is about telling React which interface should appear right now.

{% collapsible %}
## 5. Why it helps to learn these separately

These two topics work together in a real app, but they are easier to learn one at a time.

- Authentication/token storage is about backend communication and persistent login state.
- `mode` state is about frontend interaction and conditional rendering.

If you separate them, it becomes easier to answer two different questions:

- "How does my app know whether the user is logged in?"
- "How does my app know which view to show?"

Once both pieces make sense on their own, combining them becomes much easier.
