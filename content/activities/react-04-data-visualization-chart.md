---
title: "Activity: Exploring Data Visualization Libraries"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
start_date: "2026-04-22"
due_date: "2026-04-22"
---

> ## Learning Goals
>
> By the end of this activity, you should be able to:
>
> * install a third-party React library with `npm`
> * create a new React component for a bar chart
> * pass data into a Recharts component using props
> * fetch data from an API using `useEffect()`
> * transform raw API data into a chart-friendly format

## 1. Starting Point

This activity builds on the starter files from [Final Project 2B Instructions](../assignments/final-projectb).

Use your existing project folder. If you need a fresh copy, download the starter files again and make sure your app runs before you begin.

## 2. Install the dependencies

Open your project in VS Code and navigate to the `frontend` folder on the command line. Then run:

```bash
npm install
npm install recharts
npm run dev
```

`recharts` is a React library that gives you pre-built chart components such as bar charts, pie charts, and line charts.

Before you move on, create a `.env` file in your `frontend` folder and add this line:

```bash
VITE_API_BASE_URL=https://api-generator.unca.info
```

This gives your React app a base URL for your backend API.

## 3. Read the Docs First

Before you start coding, spend a few minutes looking at the official Recharts bar chart documentation:

[https://recharts.github.io/en-US/api/BarChart/](https://recharts.github.io/en-US/api/BarChart/)

As you skim the docs, pay attention to:

* what data structure the `data` prop uses
* how `BarChart`, `Bar`, `XAxis`, `YAxis`, and `Tooltip` fit together
* what `dataKey` does
* how the chart components are nested inside each other

You do not need to understand every option yet. The goal is just to get familiar with the basic pattern before you build your own chart.

## 4. Complete the following tasks

In this activity, you will first build a simple bar chart component using sample data. Once that works, you will fetch real data from your API and pass that data into the chart.

{% collapsible closed %}
### 4.1. Create a new bar chart component

Inside your `frontend/src/components` folder, create a new file called `BarChart.jsx`.

Start with these imports:

```jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
```

Then create a component shell that accepts `items` as a prop:

```jsx
export default function BarChartComponent({ items }) {
  return <div>Chart goes here</div>;
}
```

{% collapsible closed %}
### 4.2. Test the chart with temporary sample data

Before connecting to your API, it is often easier to make the component work with a small hard-coded dataset.

Inside `BarChart.jsx`, temporarily create data like this:

```jsx
const data = [
  { name: "A", value: 4 },
  { name: "B", value: 7 },
  { name: "C", value: 2 },
];
```

Then return this JSX:

```jsx
return (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#2f6fed" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
```

The goal of this step is just to make sure:

* Recharts installed correctly
* your new component renders
* the chart appears on the page

{% collapsible closed %}
### 4.3. Render your new component in a parent file

Import your new component into whichever parent component makes sense in your app.

For example:

```jsx
import BarChartComponent from "./components/BarChart";
```

Then render it:

```jsx
<BarChartComponent items={[]} />
```

At this point, you are not using the `items` prop yet. You are only confirming that your component renders correctly.

{% collapsible closed %}
### 4.4. Fetch data from your API

Now go to the component where your app should load data from the server (I recommend `components/Homepage.jsx`).

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

Replace `YOUR_API_PATH_HERE` with the path you want from your API (e.g., `/api/plants`).

Feel free to use the sample plant data available at:
[https://api-generator.unca.info/](https://api-generator.unca.info/)

The important idea here is:

* `useEffect(..., [])` runs once after the first render
* `fetch(...)` requests the data from the server
* `setItems(...)` stores that data in state

{% collapsible closed %}
### 4.5. Pass your fetched data into the chart

Once your API data is stored in `items`, pass it to your chart component:

```jsx
<BarChartComponent items={items} />
```

At this point, your bar chart component now has access to the real server data.

However, you should expect that the chart may stop working correctly here.

Why?

Because your temporary chart from step 4.2 used data that already looked like this:

```jsx
[
  { name: "A", value: 4 },
  { name: "B", value: 7 },
  { name: "C", value: 2 },
]
```

But your API probably returns raw records instead. For example, it may look more like:

```jsx
[
  {
    "id": "32",
    "name": "Arkansas Black Heritage Row",
    "image_url": "/student/images/plants/apple.png",
    "species": {
      "id": "6",
      "name": "apple",
      "description": null,
      "owner": {...}
    },
    "planted_year": "2014",
    "latitude": 35.614484,
    "longitude": -82.566896,
    "notes": "‘Arkansas Black’ apples featured in campus history and regional agriculture discussions.",
    "owner": {...}
  },
  {
    "id": "31",
    "name": "Redhaven Heritage Tree",
    "image_url": "/student/images/plants/peach.png",
    "species": {
      "id": "5",
      "name": "peach",
      "description": null,
      "owner": {...}
    },
    "planted_year": "2013",
    "latitude": 35.614961,
    "longitude": -82.561355,
    "notes": "Old ‘Redhaven’ tree used in pruning demonstrations and yield estimation exercises.",
    "owner": {...}
  },
  ...
]
```

That means Recharts is not yet receiving the summarized `{ name, value }` structure it needs.

Pause here and ask yourself:

1. What data structure did the working chart data have in step 4.2?
1. What data structure does your fetched API data have now?
1. Why can't the chart use the raw API records directly?
1. What transformation needs to happen before the chart can render again?

The next step fixes this by transforming the raw API data into chart data.

{% collapsible closed %}
### 4.6. Transform the API data inside `BarChart.jsx`

Go back to `BarChart.jsx`.

Delete the temporary sample data from step 4.2 and replace it with logic that summarizes the `items` prop.

First, guard against empty data:

```jsx
if (items.length === 0) {
  return <div>Loading chart...</div>;
}
```

Then count one category from your dataset.

For example, if each item has a category name, you might write:

```jsx
const counts = {};

for (const item of items) {
  const category = item.category;

  if (counts[category]) {
    counts[category] += 1;
  } else {
    counts[category] = 1;
  }
}
```

Next, convert that object into the format Recharts expects:

```jsx
const data = Object.entries(counts).map(([name, value]) => ({
  name,
  value,
}));
```

This is the key transformation step. Your API probably returns raw records, but Recharts needs an array of objects with chart values.

{% collapsible closed %}
### 4.7. Make sure the chart matches your dataset

Depending on your API, you may need to change the property path.

For example, these are all possible patterns:

* `item.category`
* `item.type`
* `item.species.name`
* `item.location.name`

Choose one property that makes sense for your project and use it consistently in your counting code.

{% collapsible closed %}
### 4.8. Explain what your code is doing

Once your chart works, make sure you can explain:

1. Why did you install `recharts` with `npm`?
1. Why is the bar chart in its own component?
1. Why do we fetch the API data in `useEffect()`?
1. Why do we store the fetched data in state?
1. Why do we have to transform the raw API data before passing it to Recharts?

## Demo / Checkpoint

When you are done, your app should do all of the following:

* install and import `recharts`
* render a new `BarChart` component
* fetch data from your API
* pass the fetched data into the chart component
* display a working bar chart based on the API results

## Optional Extension

If you finish early, try one small improvement:

* sort the bars from largest to smallest
* change the bar color
* add a title above the chart
* build a second chart using the same fetched data
