---
title: "API + UI Fetch Exercise"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
due_date: "2026-03-18"
start_date: "2026-03-18"
---

## Goal
In your assigned student pair, you will use the JavaScript `fetch` function to make **asynchronous calls to a REST API**, then update the page to show the returned data.

You will complete **one** of the Lecture 15 UI activities:
`recipes` or `restaurants`.

## Set Up

<!-- .list-spaced -->
1. Find your partner for today's activity and introduce yourself.
1. Download the starter files

    <a class="button" href="/spring2026/course-files/lectures/lecture16.zip">Download</a>

1. Decide whether you want to make an app about:
    * recipes (MealDB):  <a href="/spring2026/course-files/demos/lecture16/recipes/index.html" target="_blank">Demo</a>
    * restaurants (Yelp):  <a href="/spring2026/course-files/demos/lecture16/restaurants/index.html" target="_blank">Demo</a>

1. Open the corresponding UI starter files in:
   `lecture15/interfaces`

1. Examine the starter HTML, CSS, and JavaScript files to see how they work. 

## Your Tasks
Your job is to make this search form work and display results to the DOM. This should involve making at least three functions (but you are welcome to make helper functions as well):

1. Create a function that handles the user interaction.
   - Use the control(s) already in the starter UI (do not build a whole new UI from scratch).
   - When the user submits, read the search term(s) or selected value(s) from the DOM.
   - This function should call your fetch function.

1. Choose a REST API endpoint (the specific API is up to you, but it should match your UI theme).
   - Build the request URL using the user’s search term.
   - If the UI needs authentication or special headers, follow what the starter concept expects and/or look at the provided fetch examples.
1. Make the request with `fetch`, using async/await.
   - Convert the response body to JSON when the API returns JSON.
   - If the response indicates an error, display a helpful message in the UI.
1. Render the results visually.
   - Use the existing `#results` container in each starter UI.
   - Display multiple results (not just one), and format them in a clear, user-friendly way (cards, list items, or a grid—whatever fits the starter markup).
1. Test in the browser:
   - Try at least 2 different search terms.
   - Confirm you see real API data and that the UI updates correctly.

## Fetch-request examples (if you get stuck)
If you need example `fetch` requests, check:
`@public/course-files/lectures/lecture15/fetch-samples`

## Deliverable
Be ready to demonstrate your working UI in class (and point out where you made the fetch + rendering changes).

