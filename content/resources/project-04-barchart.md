---
title: "Data Visualization: Bar Chart"
group: "Final Project"
group_order: 6
order: 4
heading_max_level: 3
quicklink: 0
---

This document focuses on one way to add a bar chart view to `final-project/frontend`.

A bar chart answers a question like: "How many X are in each category?"

For example, you might count:

- how many plants belong to each species
- how many plants were planted in each year
- how many plants appear in each location

Each bar represents one category, and the height of the bar shows the count for that category.

A pie chart uses a very similar structure. Instead of drawing bars, it turns those category counts into slices of a circle. In both cases, the important step is grouping your raw data and turning it into totals for each category.

Before you begin coding, open the official Recharts Getting Started guide:
[https://recharts.github.io/guide/getting-started/](https://recharts.github.io/guide/getting-started/)

As you read, pay attention to three things:

- what shape the data uses
- how individual chart pieces are imported and nested
- how props such as `dataKey` control what appears on the chart

You do not need to copy their example exactly. Instead, use the guide to help you understand the pattern, then adapt that pattern to the `items` data in your project.

{% collapsible %}
## 1. Install the chart library

In your `frontend` folder, install Recharts:

{% no-copy %}
```bash
npm install recharts
```

This library gives us ready-made React components for charts such as bar charts, pie charts, and line charts.

{% collapsible %}
## 2. Create `BarChart.jsx`

Create a new file:

{% no-copy %}
```bash
frontend/src/components/BarChart.jsx
```

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

Then create a component that accepts one prop:

```jsx
export default function BarChartComponent({ items }) {
  return <div>Chart goes here</div>;
}
```

`items` should be an array of objects from your app.

{% collapsible %}
## 3. Guard against empty data

Before drawing the chart, handle the case where there is nothing to show:

```jsx
if (items.length === 0) {
  return <div>No items to display</div>;
}
```

This prevents your component from trying to build a chart from an empty list.

{% collapsible %}
## 4. Count the categories

Our chart needs summarized data, not raw records.

Suppose each object in `items` has a species name at `item.species.name`. Build a counts object like this:

```jsx
const counts = {};

for (const item of items) {
  const name = item.species.name;

  if (counts[name]) {
    counts[name] += 1;
  } else {
    counts[name] = 1;
  }
}
```

If your app tracks something else, change the property path to match your data.

{% collapsible %}
## 5. Convert the counts into chart data

Recharts expects an array of objects. Convert your `counts` object into this shape:

{% no-copy %}
```jsx
const data = Object.entries(counts).map(([name, value]) => ({
  name,
  value,
}));
```

That gives you data that looks like this:

{% no-copy %}
```js
[
  { name: "Oak", value: 4 },
  { name: "Maple", value: 2 },
]
```

{% collapsible %}
## 6. Render the chart

Now replace your placeholder JSX with:

```jsx
return (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
```

What each piece does:

- `ResponsiveContainer` makes the chart resize with the page.
- `XAxis` shows the category names.
- `YAxis` shows the numeric scale.
- `Tooltip` adds hover interaction.
- `Bar` draws one bar for each object in `data`.

{% collapsible %}
## 7. Add the component to your app

Import the chart into a parent component and pass it data:

{% no-copy %}
```jsx
import BarChartComponent from "./components/BarChart";
```

{% no-copy %}
```jsx
<BarChartComponent items={items} />
```

If `items` comes from an API call, make sure the data has loaded before rendering the chart.

{% collapsible %}
## 8. Try one small extension

Pick at least one:

- Change the bar color.
- Change the chart height.
- Sort the data from largest to smallest before rendering.
- Replace `species.name` with another property from your dataset.



### Optional Next Step

Once this works, try building a second visualization of the same `items` data:

- a pie chart with `recharts`, or
- a map with `react-leaflet`

The big idea is the same in all three cases: take raw data, reshape it, then pass it into a component library.
