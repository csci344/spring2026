---
title: "2. App Implementation"
type: "project"
draft: 0
num: "(Part 2)"
due_date: "2026-05-01"
heading_max_level: 3
order: 2
points: 100
---

[← Review the Final Project Overview](final-project)

<!-- .info -->
> ## Updates
> Here is an example of a sample final project (simple and kinda boring, but meets the requirements):
> <!-- .compact -->
> - Frontend (User Interface): <a href="https://api-client.unca.info/" target="_blank">https://api-client.unca.info/</a>
> - Backend (API Server): <a href="https://api-generator.unca.info/" target="_blank">https://api-generator.unca.info/</a>
> 
> <!-- .mt-6 -->
> To test / examine the UI and API:
>
> <!-- .compact -->
> - username: **admin**
> - password **password**
> - <a href="https://github.com/csci344/api-generator/blob/main/examples/plants/api.config.yaml" target="blank">Link to API YAML file</a> (backend)

## Goal
After your design work is approved, you will build the app. This stage should result in a small, complete single-page app with a structure similar in spirit to the sample frontend provided to you in the starter code (provided below):

1. a login screen
2. a logged-in app shell
3. one main data view
4. a create/edit form
5. at least one alternate data view such as a chart or map

Return to the [Final Project overview](final-project) for the full project scope, starter ideas, and core requirements.

## Starter Code

You may begin from the provided starter files here:

<a href="/spring2026/course-files/homework/final-project.zip" class="nu-button">Download Starter Files</a>

### Frontend Code
The frontend starter is intentionally small. It includes:

<!-- .compact -->
- a minimal Vite + React + Tailwind setup
- a login screen
- token storage helpers
- one authenticated fetch helper
- a top-level auth check in `App.jsx`
- a logout button

The frontend starter does **not** include your actual app. You still need to build:

<!-- .compact -->
- your main browse view
- your CRUD workflow
- your own resource-specific forms
- your own endpoint functions
- your chart, map, or other third-party components
- your overall visual design

I am giving you this starter because, in a first web development course, auth setup and token persistence can become a frustrating blocker before the real app work even begins. The starter removes that infrastructure friction so you can spend more of your time on designing and building your own application.

### Backend Setup

After reviewing the frontend starter, set up your backend so the app has real Rest API endpoints to talk to. A typical structure looks like this:

```text
final-project/
├── backend
└── frontend
```

To configure the backend:

<!-- .compact -->
1. Download the `api-generator` starter from [GitHub](https://github.com/csci344/api-generator/archive/refs/heads/main.zip).
2. Put that folder inside your `final-project` directory and rename it to `backend`.
3. In `backend`, run `npm install`.
4. Update `api.config.yaml` based on the API design you created in Part 1.
5. Run `npm validate`, `npm generate`, and `npm seed`.
6. Start the backend with `npm run dev`.

> ## Supporting Documentation & Resources
>
> I have made you some supporting documentation to help you build your app. Here are my recommendations:
>
> 1. Start with [Overview + Workflow](/spring2026/resources/project-01-workflow-overview) to understand the overall workflow of the starter app, including how the login, CRUD, and views fit together.
> 2. Use [Authentication](/spring2026/resources/project-02-login) while setting up authentication and token storage.
> 3. Use [Mode Switching](/spring2026/resources/project-03-mode-switching) when you are ready to switch between views inside the app.
> 4. Review the data visualization resources to get some ideas regarding how to implement a data visualization:
>     - [Data Visualization: Bar Chart](/spring2026/resources/project-04-barchart)
>     - [Data Visualization: Pie Chart](/spring2026/resources/project-05-piechart)
>     - [Data Visualization: Interactive Map](/spring2026/resources/project-06-map) 

## Required App Features

Your finished app must include all of the following:

1. **Login flow**
   - Use the starter authentication approach from class.
   - Store the access token.
   - Show the main app only when the user is authenticated.

2. **User-specific behavior**
   - The app should clearly depend on who is logged in.
   - User accounts should matter in some meaningful way, such as showing a user's own records, limiting certain actions, or tracking who created or edited an item. In many cases, the `api-generator` supports this, as long as you include the authentication token in the headers of your fetch requests.

3. **CRUD for the main resource**
   - The main item in your app must support create, read, update, and delete.

4. **At least 2 API endpoints**
   - Your client should use real endpoints from your own API.

5. **At least 2 third-party components**
   - Examples: chart, map, calendar, modal, date picker, UI library, lightbox.

6. **At least 2 views of the data**
   - One primary view for browsing or managing records
   - One alternate view of the same data, such as a chart or map

7. **Usable interface**
   - The app should be understandable, responsive, and visually organized.

When I open your app, I should be able to:

<!-- .compact -->
1. log in
2. tell that the app is tied to the logged-in user
3. view the main resource in a clear primary view
4. create a new item
5. edit an existing item
6. delete an item
7. switch to at least one alternate visualization of the same data
8. see at least 2 third-party components working

## Recommended Build Order

If you build in this order, you are less likely to get blocked.

One useful small-app pattern is:


- `App.jsx` decides whether the user sees the login screen or the logged-in app
- `Login.jsx` collects credentials and stores the token
- `api.js` holds your fetch helper and endpoint functions
- `Homepage.jsx` manages data loading, the current UI mode, and what components to display
- other components render the browse view, form, and alternate view

That is not the only valid structure, but it is a good mental model for a project of this size.

### 1. Start with the auth shell

Build the smallest working version first. Use the provided starter code, or build your own equivalent version of:

- `App.jsx`
- `Login.jsx`
- `tokenStorage.js`
- `api.js`

At this point, your app only needs to do two things:

- show `Login` when there is no token
- show a placeholder logged-in shell when there is a token

Do not start with charts, maps, or detailed styling.

> **Resources:**
> 
> <!-- .compact -->
> - [Overview + Workflow](/spring2026/resources/project-01-workflow-overview)
> - [Authentication](/spring2026/resources/project-02-login)

### 2. Add API helper functions

Create small, helper functions for your HTTP requests (GET, POST, PATCH, DELETE). For example, your API file (`api.js`) should eventually include things like:

- `getItems()`
- `createItem(data)`
- `updateItem(id, data)`
- `deleteItem(id)`

If you have a second resource, you may also need functions such as:

- `getCategories()`
- `getProfile()`
- `getTags()`

> **Resources:**
> 
> <!-- .compact -->
> - [Overview + Workflow](/spring2026/resources/project-01-workflow-overview)
> - [Authentication](/spring2026/resources/project-02-login)

### 3. Build the main browsing view

Next, build the first screen the user should use after login.

Examples:

<!-- .compact -->
- a list of coffee shops
- a table of study spots
- a gallery of public art entries
- a card view of concerts

This view should load real data from the API and make it easy to test CRUD actions.

- **Note:** To make this work, you will use the two React hooks we discussed in class: `useState()` and `useEffect()`

> **Resources:**
> 
> <!-- .compact -->
> - [Overview + Workflow](/spring2026/resources/project-01-workflow-overview)

### 4. Build the create/edit form

After the main view works, add a form component for creating and editing items.

For a project this size, it is completely reasonable to use:

<!-- .compact -->
- one form component for both create and edit
- one `initialItem` prop or similar
- one `onSave(...)` callback
- one `onCancel(...)` callback

**Hints:** If you want a simple example of how to structure a form component:
- Review the starter `Login.jsx` form and adapt that pattern to your own fields and submit logic.
- You will need to implement some conditional logic based on whether the form is **editing** existing data (PATCH request to an existing resource) or **creating** a new record (Post request).

> **Resources:**
> 
> <!-- .compact -->
> - [Overview + Workflow](/spring2026/resources/project-01-workflow-overview)

### 5. Add mode-based view switching

Once CRUD works, add a simple `mode` state variable to switch between screens inside the app.

Examples of mode values:

<!-- .compact -->
- `"list"`
- `"table"`
- `"cards"`
- `"create"`
- `"edit"`
- `"chart"`
- `"map"`

This lets one screen component coordinate the user workflow without introducing a full routing system.

> **Resources:**
> 
> <!-- .compact -->
> - [Overview + Workflow](/spring2026/resources/project-01-workflow-overview)
> - [Mode Switching](/spring2026/resources/project-03-mode-switching)

### 6. Add your alternate visualization

Only after the main workflow works should you add your chart, map, or other secondary view.

Strong options for this class:

- Recharts bar chart or pie chart
- React Leaflet map
- calendar or date-based view

The alternate view should be based on the same real data, not a separate fake dataset.

> **Resources:**
> 
> <!-- .compact -->
> - [Data Visualization: Bar Chart](/spring2026/resources/project-04-barchart)
> - [Data Visualization: Pie Chart](/spring2026/resources/project-05-piechart)
> - [Data Visualization: Interactive Map](/spring2026/resources/project-06-map)

## A Reasonable File Structure

You do not need to match this exactly, but something in this range is appropriate:

```text
frontend/
├── src/
│   ├── App.jsx
│   ├── api.js
│   ├── tokenStorage.js
│   ├── main.jsx
│   └── components/
│       ├── Login.jsx
│       ├── Navbar.jsx
│       ├── Homepage.jsx
│       ├── ItemList.jsx
│       ├── ItemForm.jsx
│       ├── ChartView.jsx
│       └── MapView.jsx
```

This is not a required naming scheme. The point is that your project should be broken into small, readable parts.

## Implementation Checklist

- [ ] Login page implemented using the starter auth pattern
- [ ] Token is stored and used for authenticated requests
- [ ] `App.jsx`-style auth check determines whether login or app shell is shown
- [ ] At least 2 API endpoints are used by the client
- [ ] Main browse view for the primary resource is implemented
- [ ] Create/edit form is implemented
- [ ] Delete action is implemented
- [ ] A `mode`-style state variable or equally clear screen-switching pattern is implemented
- [ ] At least one alternate data view is implemented
- [ ] At least 2 third-party components are integrated
- [ ] Interface is complete, usable, and reasonably polished

## Final Project Submission

Submit all of the following:

- link to your completed application
- link to your repository
- note whether you started from the provided `starter-client` or built your own shell

<a href="/spring2026/assignments/final-project" class="nu-button">← Back to Final Project Overview</a>
