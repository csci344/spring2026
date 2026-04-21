---
title: "Data Visualization: Pie Chart"
group: "Final Project"
group_order: 6
order: 5
heading_max_level: 3
quicklink: 0
---

This document focuses on one way to add a pie chart view to `final-project/frontend`.

You may also want to skim the official Recharts guide:
[https://recharts.github.io/guide/getting-started/](https://recharts.github.io/guide/getting-started/)

{% collapsible %}
## 1. Create `PieChart.jsx`

Create this file:

{% no-copy %}
```bash
frontend/src/components/PieChart.jsx
```

Import the pieces you need from Recharts:

```jsx
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
```

Then create a component that receives `items` as a prop.

{% collapsible %}
## 2. Reuse the same aggregation pattern

Use the same overall approach from [barchart](./barchart):

- if `items` is empty, return a small fallback message
- count how many times each category appears
- convert that counts object into an array of `{ name, value }` objects

If your app uses plant data, grouping by `item.species.name` is a sensible starting point.

{% collapsible %}
## 3. Render the pie chart

Once you have a `data` array, render it like this:

```jsx
return (
  <div style={{ width: "100%", height: 400 }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          label={({ name }) => name}
          outerRadius={160}
          innerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
```

The main new idea is that a pie chart usually needs:

- `dataKey` for the numeric value
- `nameKey` for the category label
- one or more `Cell` elements if you want slice colors

{% collapsible %}
## 4. Add a color palette

Create a simple array of colors near the top of your file:

{% no-copy %}
```jsx
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c"];
```

Then use those colors with the `Cell` elements shown above so each slice has a different fill color.

{% collapsible %}
## 5. Add one small improvement

Choose at least one:

- customize the tooltip
- change the radius values
- remove labels and compare the result
- add a legend
- sort the data before rendering


### Which Chart to Used When?

After finishing, compare your bar chart and pie chart:

- Which one is easier to read?
- Which one makes category differences more obvious?
- Which one would you choose for this dataset?
