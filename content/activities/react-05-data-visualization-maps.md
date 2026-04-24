---
title: "Activity: React Data Visualization with Maps"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
start_date: "2026-04-24"
due_date: "2026-04-24"
---

> ## Learning Goals
>
> By the end of this activity, you should be able to:
>
> * install a third-party React library with `npm`
> * create a new React component for an interactive map
> * pass data into a `react-leaflet` component using props
> * fetch data from an API using `useEffect()`
> * transform raw API data into markers on a map

## 1. Starting Point

This activity builds on the starter files from [Final Project 2B Instructions](../assignments/final-projectb).

Use your existing project folder. If you need a fresh copy, download the starter files again and make sure your app runs before you begin.

## 2. Install the dependencies

Open your project in VS Code and navigate to the `frontend` folder on the command line. Then run:

```bash
npm install
npm install leaflet react-leaflet
npm run dev
```

Why both?

* `leaflet` is the map library
* `react-leaflet` gives you React components that work with Leaflet

Before you move on, create a `.env` file in your `frontend` folder and add this line:

```bash
VITE_API_BASE_URL=https://api-generator.unca.info
```

This gives your React app a base URL for your backend API.

## 3. Read the Docs First

Before you start coding, spend a few minutes looking at the React Leaflet documentation:

* [https://react-leaflet.js.org/docs/example-popup-marker/](https://react-leaflet.js.org/docs/example-popup-marker/)
* [https://leafletjs.com/examples/quick-start/](https://leafletjs.com/examples/quick-start/)

As you skim the docs, pay attention to:

* how `MapContainer` and `TileLayer` fit together
* how a `Marker` is placed using a latitude/longitude pair
* how `Popup` content is nested inside a marker
* why the map needs an explicit height

You do not need to understand every option yet. The goal is just to get familiar with the basic pattern before you build your own map.

## 4. Complete the following tasks

In this activity, you will first build a simple interactive map using one temporary location. Once that works, you will fetch real data from your API and turn that data into markers.

{% collapsible closed %}
### 4.1. Create a new map component

Inside your `frontend/src/components` folder, create a new file called `Map.jsx`.

Start with these imports:

```jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
```

That CSS import matters. Without it, the map tiles and controls will not display correctly.

Then create a component shell:

```jsx
export default function Map({ items }) {
  return <div>Map goes here</div>;
}
```

{% collapsible closed %}
### 4.2. Test the map with one temporary location

Before connecting to your API, it is often easier to make the component work with one hard-coded location.

Inside `Map.jsx`, temporarily create coordinates like this:

```jsx
const coords = [35.6170073, -82.5653473];
```

Then return this JSX:

```jsx
return (
  <div style={{ height: "70vh", width: "100%" }}>
    <MapContainer
      center={coords}
      zoom={17}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  </div>
);
```

The goal of this step is just to make sure:

* `react-leaflet` installed correctly
* your new component renders
* the map appears on the page
* you can pan and zoom

{% collapsible closed %}
### 4.3. Render your new component in a parent file

Import your new component into whichever parent component makes sense in your app.

For example:

```jsx
import Map from "./components/Map";
```

Then render it:

```jsx
<Map items={[]} />
```

At this point, you are not using the `items` prop yet. You are only confirming that your component renders correctly.

{% collapsible closed %}
### 4.4. Fetch data from your API

Now go to the component where your app should load data from the server. In many projects, this will be `App.jsx` or a page component.

Create state to hold the server data:

```jsx
const [items, setItems] = useState([]);
```

Then create a variable for your base URL:

```jsx
const baseURL = import.meta.env.VITE_API_BASE_URL;
```

Then use `useEffect()` to fetch data when the component first loads:

```jsx
useEffect(() => {
  async function getItems() {
    const response = await fetch(`${baseURL}/YOUR_API_PATH_HERE`);
    const data = await response.json();
    setItems(data);
  }

  getItems();
}, []);
```

Replace `YOUR_API_PATH_HERE` with the path you want from your API.

If you need sample data, you can generate an API here:
[https://api-generator.unca.info/](https://api-generator.unca.info/)

The important idea here is:

* `useEffect(..., [])` runs once after the first render
* `fetch(...)` requests the data from the server
* `setItems(...)` stores that data in state

{% collapsible closed %}
### 4.5. Pass your fetched data into the map

Once your API data is stored in `items`, pass it to your map component:

```jsx
<Map items={items} />
```

At this point, your map component now has access to the real server data.

However, you should expect that nothing new will happen yet.

Why?

Because your temporary map from step 4.2 used one hard-coded latitude/longitude pair:

```jsx
const coords = [35.6170073, -82.5653473];
```

But your API probably returns an array of raw records instead. For example, it may look more like:

```jsx
[
  {
    "id": "32",
    "name": "Arkansas Black Heritage Row",
    "image_url": "/student/images/plants/apple.png",
    "species": {
      "id": "6",
      "name": "apple"
    },
    "planted_year": "2014",
    "latitude": 35.614484,
    "longitude": -82.566896
  },
  {
    "id": "31",
    "name": "Redhaven Heritage Tree",
    "image_url": "/student/images/plants/peach.png",
    "species": {
      "id": "5",
      "name": "peach"
    },
    "planted_year": "2013",
    "latitude": 35.614961,
    "longitude": -82.561355
  }
]
```

That means the map is not yet turning those records into markers.

Pause here and ask yourself:

1. What data did the working map use in step 4.2?
1. What data does your fetched API return now?
1. Why doesn't passing raw records automatically create map markers?
1. What transformation or loop needs to happen before the map can display your dataset?

The next step fixes this by turning the raw API data into markers.

{% collapsible closed %}
### 4.6. Transform the API data into markers inside `Map.jsx`

Go back to `Map.jsx`.

Keep your temporary `coords` value as the starting center of the map, but now import `Marker` and `Popup` too:

```jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
```

Then, inside `MapContainer`, loop through `items` and create one marker per object:

```jsx
{items.map((item) => {
  const position = [item.latitude, item.longitude];

  return (
    <Marker key={item.id} position={position}>
      <Popup>
        <div>
          <strong>{item.name}</strong>
        </div>
      </Popup>
    </Marker>
  );
})}
```

This is the key transformation step. Your API returns raw records, and your map component turns each one into a marker.

{% collapsible closed %}
### 4.7. Make sure the map matches your dataset

Depending on your API, you may need to change the property names.

For example, these are all possible patterns:

* `item.latitude` and `item.longitude`
* `item.lat` and `item.lng`
* `item.location.latitude` and `item.location.longitude`

Choose the property path that matches your dataset and use it consistently.

Also make sure:

* each marker has a unique `key`
* each `position` is a two-item array: `[latitude, longitude]`
* your latitude and longitude values are numbers, not strings

{% collapsible closed %}
### 4.8. Add one small popup improvement

Once your markers work, expand the popup a little.

For example, you might add:

* the item name
* the species name
* the planted year
* an image

For example:

```jsx
<Popup>
  <div>
    <strong>{item.name}</strong>
    <br />
    {item.species.name}
    <br />
    Planted: {item.planted_year}
  </div>
</Popup>
```

{% collapsible closed %}
### 4.9. Explain what your code is doing

Once your map works, make sure you can explain:

1. Why did you install both `leaflet` and `react-leaflet`?
1. Why is the map in its own component?
1. Why do we fetch the API data in `useEffect()`?
1. Why do we store the fetched data in state?
1. How does `items.map(...)` turn raw data into markers?
1. Why does the map need latitude and longitude values?

## Demo / Checkpoint

When you are done, your app should do all of the following:

* install and import `leaflet` and `react-leaflet`
* render a new `Map` component
* fetch data from your API
* pass the fetched data into the map component
* display a working interactive map with markers from the API results

## Optional Extension

If you finish early, try one small improvement:

* customize the popup content
* zoom the map to a different starting level
* center the map on a different location
* add images to the popups
