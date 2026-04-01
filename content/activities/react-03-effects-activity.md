---
title: "Activity: React Carousel from Server Data"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
start_date: "2026-04-01"
due_date: "2026-04-01"
---

> ## Learning Goals
>
> By the end of this activity, you should be able to:
>
> * use `useEffect()` to run code after a component renders
> * fetch JSON data from a server using `fetch()`
> * store fetched data in a state variable using `useState()`
> * explain what the second array argument to `useEffect()` does
> * adapt server data so it can be passed into an existing component as props
> * fetch new data when the selected gallery changes

<!-- .info -->
> ## Starting Point
> 
> This activity builds directly on the previous React state activity.
> 
> Use your completed solution from `react-state-activity`. If you need a fresh copy, you can download the solutions here:
> 
> <a href="/spring2026/course-files/activities/react-02-state-activity-solutions.zip" class="nu-button">Previous Activity Solutions <i class="fas fa-download"></i></a>
> 
> **Don't forget to install the dependencies!**
> 
> Navigate to your React project folder on the command line. Then run:
> 
> ```bash
> npm install
> npm run dev
> ```

## 1. Let's look at some server data from Flickr

Open this endpoint in your browser:

* <a href="https://www.apitutor.org/flickr/simple/?tags=cat" target="_blank">https://www.apitutor.org/flickr/simple/?tags=cat</a>

Notice that the server returns an array of objects. Each object has fields such as:

* `title`
* `img_url`

In the previous activity, each gallery probably looked something like this:

```jsx
const galleries = [
  {
    name: "Nature",
    photos: ["...", "...", "..."]
  },
  {
    name: "City",
    photos: ["...", "...", "..."]
  }
];
```

In this activity, each gallery should instead store an **endpoint**:

```jsx
const galleries = [
  {
    name: "Cats",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=cat"
  },
  {
    name: "Dogs",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=dog"
  },
  {
    name: "Birds",
    endpoint: "https://www.apitutor.org/flickr/simple/?tags=bird"
  }
];
```

Your app will then fetch the photos for the currently selected gallery.

## 2. Complete the following tasks

In the previous activity, your photo data was hard-coded inside `App.jsx`. In this activity, you will replace that hard-coded data with server data.

{% collapsible closed %}
### 4.1. Change your gallery data to use endpoints

Open `App.jsx`.

Keep your gallery chooser from the previous activity, but change the shape of each gallery object.

Instead of:

* `name`
* `photos`

each gallery should now have:

* `name`
* `endpoint`

For example:

```jsx
const galleries = [
    {
        name: "Cats",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=cat"
    },
    {
        name: "Dogs",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=dog"
    },
    {
        name: "Birds",
        endpoint: "https://www.apitutor.org/flickr/simple/?tags=bird"
    }
];
```

Feel free to modify the categories and tags (or add more galleries). You should still keep state in `App.jsx` to track the currently selected gallery.

{% collapsible closed %}
### 4.2. Create state for the fetched photos

Now create a second state variable to hold the photos you fetch from the server.

For example:

```jsx
const [photos, setPhotos] = useState([]);
```

At this point, `photos` should start as an empty array.

{% collapsible closed %}
### 4.3. Write an async helper function

Still inside `App.jsx`, write an async function that accepts an endpoint as an argument.

Inside your function:

1. use `fetch(...)` to request the data
1. use `await response.json()` to turn the response into JavaScript data
1. convert the returned array of objects into an array of image URLs
1. call `setPhotos(...)` with that array

Here's some sample code:

```jsx
async function getPhotos(endpoint) {
    // issue the request:
    const response = await fetch(endpoint);

    // extract the JSON from the request:
    const data = await response.json();

    // extract the photo urls from the flickr data:
    const imageUrls = data.map((item) => item.img_url);
    setPhotos(imageUrls);
}
```

Why are we using `data.map(...)` here?

Because your existing `Carousel` component already expects an array of image URLs. This lets you keep most of your previous Carousel code.

{% collapsible closed %}
### 4.4. Use `useEffect()` to fetch when the selected gallery changes

Now import `useEffect` from React:

```jsx
import React, { useEffect, useState } from "react";
```

Then add an effect that calls your `getPhotos()` function using the selected gallery's endpoint.

```jsx
useEffect(() => {
    getPhotos(selectedGallery.endpoint);
}, [selectedGallery]);
```

This is the big new idea in this activity.

The second argument to `useEffect()` is the dependency array:

* `[]` means "run this effect after the first render"
* `[selectedGallery]` means "run this effect again when the selected gallery changes"

In other words:

* when the app first loads, fetch the first gallery
* when the user clicks a different gallery, fetch new photos for that gallery

{% collapsible closed %}
### 4.5. Render your Carousel using the fetched photos

Update your JSX so that the `Carousel` component receives the `photos` state variable instead of a hard-coded array.

For example:

```jsx
<Carousel gallery={photos} />
```

At first, `photos` will be an empty array. A moment later, after the fetch finishes, React will update the state and redraw the component.

{% collapsible closed %}
### 4.6. Add a loading message

Because the data comes from a server, the photos are not available immediately.

Add a small loading state to your JSX. For example:

* if `photos.length === 0`, show a message like `Loading photos...`
* otherwise, render the `Carousel`

This helps students see that server data arrives asynchronously.

{% collapsible closed %}
### 4.7. Explain what changed

Once your code is working, make sure you can explain the following:

1. Why do we use `useState()` for `photos`?
1. Why do we use `useEffect()` for `getPhotos()`?
1. Why is the selected gallery included in the dependency array?
1. Why do we transform the server data with `map(...)` before passing it to `Carousel`?
1. Why is each gallery storing an `endpoint` instead of a `photos` array?

## 5. Recommendations

Here are some implementation recommendations:

1. Keep the gallery-selection state in `App`, just like you did in the previous activity.
1. Keep the fetched `photos` in a separate state variable from the selected gallery.
1. Let `Gallery` continue to be a simple chooser component that only cares about names and clicks.
1. Let `Carousel` stay simple by continuing to receive just an array of image URLs.
1. Do the server-data transformation in `App`, not inside `Carousel`.
1. Start with one working endpoint first, then add the other gallery endpoints after the pattern works.

## 6. Optional Challenge

Right now the endpoint examples use different tags.

See if you can add a caption somewhere on the page that shows the selected gallery name and the endpoint currently being used.

```jsx
<p>Currently viewing: {selectedGallery.name}</p>
```

