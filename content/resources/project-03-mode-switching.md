---
title: "Mode Switching"
group: "Final Project"
group_order: 6
order: 3
heading_max_level: 3
quicklink: 0
---

This document focuses on one way to switch between views in `final-project/frontend`.

{% collapsible %}
## 1. Create a `mode` state variable

In `Homepage.jsx`, start with a state variable such as:

{% no-copy %}
```jsx
const [mode, setMode] = useState("bar");
```

You can choose a different default if you want. In this project, common modes include:

- `"list"`
- `"table"`
- `"map"`
- `"bar"`
- `"pie"`
- `"create"`
- `"edit"`

Each string acts like a label for one screen or one view.

{% collapsible %}
## 2. Use `mode` for conditional rendering

Once `mode` exists, React can choose what to render:

{% no-copy %}
```jsx
if (mode === "list") {
  return <ListView items={items} />;
}

if (mode === "bar") {
  return <BarChart items={items} />;
}

if (mode === "map") {
  return <Map items={items} />;
}
```

This is the core idea: one state variable controls which component appears.

The project's `Homepage.jsx` goes further and conditionally renders:

- browse views like list, table, map, bar, and pie
- form views like create and edit

{% collapsible %}
## 3. Change `mode` from buttons

In a header component such as `ListViewHeader.jsx`, buttons can update the mode:

{% no-copy %}
```jsx
<button type="button" onClick={() => setMode("list")}>
  List
</button>

<button type="button" onClick={() => setMode("map")}>
  Map
</button>

<button type="button" onClick={() => setMode("bar")}>
  Bar chart
</button>
```

When the user clicks one of these buttons:

1. `setMode(...)` runs,
2. React updates the state,
3. the component re-renders,
4. a different branch of the conditional logic runs.

{% collapsible %}
## 4. Use helper functions for more complex transitions

Sometimes changing modes also requires extra logic.

For example:

{% no-copy %}
```jsx
function openCreateForm() {
  setEditingPlant(null);
  setMode("create");
}

function openEditForm(plant) {
  setEditingPlant(plant);
  setMode("edit");
}
```

This is useful because the app is not just switching screens. It is also preparing the data that the next screen needs.

{% collapsible %}
## 5. Return to the last browsing mode

This project uses a `ref` to remember the last non-form view:

{% no-copy %}
```jsx
const lastBrowseMode = useRef("list");
```

Then it updates that ref whenever the mode is one of the browsing screens:

{% no-copy %}
```jsx
useEffect(() => {
  if (
    mode === "list" ||
    mode === "map" ||
    mode === "table" ||
    mode === "bar" ||
    mode === "pie"
  ) {
    lastBrowseMode.current = mode;
  }
}, [mode]);
```

That way, after creating or editing a plant, the app can return the user to the view they were already using.

{% collapsible %}
## 6. Redirect to login if login is not defined

This part belongs one level above `Homepage.jsx`, in `App.jsx`.

The auth check looks like this:

{% no-copy %}
```jsx
if (!hasToken) {
  return <Login handleLoggedIn={handleLoggedIn} />;
}
```

So there are really two separate kinds of decisions in the app:

- `App.jsx` decides whether the user sees `Login` or the protected app
- `Homepage.jsx` decides which protected view the user sees after login

That distinction matters:

- missing login/token means the user should be sent to the login screen
- a different `mode` means the user should stay in the app, but see a different component

{% collapsible %}
## 7. Putting the ideas together

A typical flow might look like this:

1. `App.jsx` checks for a token.
2. If no token exists, it renders `Login`.
3. After successful login, `App.jsx` renders `Homepage`.
4. Inside `Homepage`, `mode` decides whether the user sees a list, chart, map, or form.
5. Buttons call `setMode(...)` to move between those screens.

So authentication controls access to the app, while `mode` controls navigation inside the app.
