---
title: "Data Visualization: Interactive Map"
group: "Final Project"
group_order: 6
order: 6
heading_max_level: 3
quicklink: 0
---

This document focuses on one way to add an interactive map view to `final-project/frontend`.

Leaflet is a JavaScript library for building interactive maps. It handles things like map panning, zooming, markers, popups, and map tiles.

In a React app, we usually use `react-leaflet`, which gives us React components that wrap Leaflet's mapping features.

If you want an official reference while you work, these are good places to look:

- [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/)
- [React Leaflet Example: Popup with Marker](https://react-leaflet.js.org/docs/v3/example-popup-marker/)

{% collapsible %}
## 1. Install the map libraries

In your `frontend` folder, install these packages:

{% no-copy %}
```bash
npm install leaflet react-leaflet
```

Why both?

- `leaflet` is the actual map library
- `react-leaflet` gives you React components that use Leaflet underneath

{% collapsible %}
## 2. Create `Map.jsx`

Create this file:

{% no-copy %}
```bash
frontend/src/components/Map.jsx
```

Start with these imports:

{% no-copy %}
```jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
```

That CSS import matters. Without it, the map tiles and controls will not display correctly.

{% collapsible %}
## 3. Render just the map and the tiles

Before worrying about markers, make sure you can render the map itself.

Start with this component:

{% no-copy %}
```jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const coords = [35.6170073, -82.5653473];

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
}
```

What each part does:

- `MapContainer` creates the interactive map
- `center={coords}` sets the starting latitude and longitude
- `zoom={17}` controls how close the map starts
- `TileLayer` loads the visible map images
- the `url` tells Leaflet where to get the tiles
- the `attribution` gives credit to the tile source

The outer `<div>` is also important. A Leaflet map needs an explicit height, or it may not appear.

{% collapsible %}
## 4. Test the basic map first

Import your map component into a parent component and render it:

{% no-copy %}
```jsx
import Map from "./components/Map";
```

{% no-copy %}
```jsx
<Map />
```

At this stage, your goal is simple: confirm that the map loads, displays tiles, and lets you pan and zoom.

Do this before you add any marker logic.

{% collapsible %}
## 5. Update the component to receive `items`

Once the plain map works, change the component so it accepts data:

```jsx
export default function Map({ items }) {
  const coords = [35.6170073, -82.5653473];

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
}
```

This does not change the map yet. It just prepares the component to use your app's data.

{% collapsible %}
## 6. Build markers from the `items` array

Now import the marker components:

```jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
```

Then, inside `MapContainer`, loop through `items` and create one marker per object:

```jsx
{items.map((plant) => {
  const position = [plant.latitude, plant.longitude];

  return (
    <Marker key={plant.id} position={position}>
      <Popup>
        <div>
          <strong>{plant.name}</strong>
          <br />
          <img
            src={plant.image_url}
            alt={plant.name}
            width="150"
            height="150"
          />
        </div>
      </Popup>
    </Marker>
  );
})}
```

What this does:

- `items.map(...)` loops through your dataset
- each marker uses latitude and longitude from one object
- `key={plant.id}` gives React a stable identifier
- `Popup` shows extra content when the marker is clicked

This means your raw array of plant records becomes a layer of clickable points on the map.

{% collapsible %}
## 7. Put it all together

Your finished component will look something like this:

```jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ items }) {
  const coords = [35.6170073, -82.5653473];

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

        {/* use the map function to generate a marker for each of your items */}

        {items.map((plant) => {
          const position = [plant.latitude, plant.longitude];

          return (
            <Marker key={plant.id} position={position}>
              <Popup>
                <div>
                  <strong>{plant.name}</strong>
                  <br />
                  <img
                    src={plant.image_url}
                    alt={plant.name}
                    width="150"
                    height="150"
                  />
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
```
