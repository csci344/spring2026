---
title: "CSS Grid"
group: "CSS Resources"
group_order: 2
order: 8
quicklink: 0
---

## Resources & Documentation
* <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> (game)
* <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks: Complete Guide to CSS Grid</a> (recommended)
* <a href="https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228" target="_blank">Learn CSS Grid in 5 Minutes</a>

## What is CSS Grid?

CSS Grid creates two-dimensional layouts (rows AND columns) with precise control. Unlike Flexbox (which is one-dimensional), Grid lets you place items anywhere in a grid. Use `display: grid` on a parent container. Great for page layouts, card grids, and complex designs.

## Key Grid Properties

### grid-template-columns (Defining Columns)

Defines how many columns your grid has and their sizes.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;  /* Three equal columns */
}
```

**Common patterns:**

**Equal columns:**
```css
grid-template-columns: 1fr 1fr 1fr;  /* Three equal columns using fractions */
```

**Mixed sizes:**
```css
grid-template-columns: 200px 1fr 1fr;  /* First column fixed, others flexible */
```

**Responsive with repeat:**
```css
grid-template-columns: repeat(3, 1fr);  /* Three equal columns (shorthand) */
```

**Example:**
```css
.grid-example-1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.grid-example-1 > div {
  padding: 20px;
}

.grid-example-1 > div:nth-child(1) {
  background: #4CAF50;
}

.grid-example-1 > div:nth-child(2) {
  background: #2196F3;
}

.grid-example-1 > div:nth-child(3) {
  background: #FF9800;
}
```

```html
<div class="grid-example-1">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```
*Result: Three equal-width columns that automatically adjust to container size.*

```bash
┌─────────────┬─────────────┬─────────────┐
│  Column 1   │  Column 2   │  Column 3   │
└─────────────┴─────────────┴─────────────┘
```

### column-span (Spanning Multiple Columns)

Makes an item span across multiple columns.

```css
.item {
  grid-column: span 2;  /* Item spans 2 columns */
  /* Or use: grid-column: 1 / 3; (starts at column 1, ends at column 3) */
}
```

**Example:**
```css
.grid-example-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.grid-example-2 > div {
  padding: 20px;
}

.grid-example-2 > div:nth-child(1) {
  background: #4CAF50;
  grid-column: span 2;
}

.grid-example-2 > div:nth-child(2) {
  background: #2196F3;
}

.grid-example-2 > div:nth-child(3) {
  background: #FF9800;
}

.grid-example-2 > div:nth-child(4) {
  background: #9C27B0;
}

.grid-example-2 > div:nth-child(5) {
  background: #F44336;
}
```

```html
<div class="grid-example-2">
  <div>Spans 2 columns</div>
  <div>Column 3</div>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```
*Result: First item spans across the first two columns, other items fill remaining space.*

```bash
┌───────────────────────────┬─────────────┐
│   Spans 2 columns         │  Column 3   │
├─────────────┬─────────────┼─────────────┤
│  Column 1   │  Column 2   │  Column 3   │
└─────────────┴─────────────┴─────────────┘
```

**Using start/end syntax:**
```css
.item {
  grid-column: 1 / 3;  /* Starts at column 1, ends at column 3 (spans 2 columns) */
}
```

### row-span (Spanning Multiple Rows)

Makes an item span across multiple rows.

```css
.item {
  grid-row: span 2;  /* Item spans 2 rows */
  /* Or use: grid-row: 1 / 3; (starts at row 1, ends at row 3) */
}
```

**Example:**
```css
.grid-example-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.grid-example-3 > div:nth-child(1) {
  grid-row: span 2;
}
```

```html
<div class="grid-example-3">
  <div>Spans 2 rows</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```
*Result: First item spans two rows vertically, creating a taller element.*

```bash
┌─────────────┬─────────────┬─────────────┐
│             │   Item 2    │   Item 3    │
│ Spans 2     ├─────────────┼─────────────┤
│   rows      │   Item 4    │   Item 5    │
└─────────────┴─────────────┴─────────────┘
```

**Using start/end syntax:**
```css
.item {
  grid-row: 1 / 3;  /* Starts at row 1, ends at row 3 (spans 2 rows) */
}
```

## Combining Properties

You can combine column-span and row-span to create complex layouts:

```css
.featured-item {
  grid-column: span 2;  /* Spans 2 columns */
  grid-row: span 2;     /* Spans 2 rows */
}
```

**Example:**
```css
.grid-example-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.grid-example-4 > div:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}
```

```html
<div class="grid-example-4">
  <div>Large Featured Item</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```
*Result: First item spans 2 columns and 2 rows, creating a large featured area.*

```bash
┌───────────────────────────┬─────────────┐
│                           │   Item 2    │
│   Large Featured Item     ├─────────────┤
│                           │   Item 3    │
├─────────────┬─────────────┼─────────────┤
│   Item 4    │   Item 5    │             │
└─────────────┴─────────────┴─────────────┘
```

## Common Grid Patterns

**Card grid (responsive):**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```
*Creates as many columns as fit (minimum 250px each), automatically responsive.*

**Sidebar layout:**
```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;  /* Fixed sidebar, flexible content */
  gap: 20px;
}
```
*Creates a fixed-width sidebar and flexible main content area.*

```bash
┌──────────┬──────────────────────────────┐
│          │                              │
│ Sidebar  │      Main Content Area       │
│ (200px)  │      (flexible width)        │
│          │                              │
└──────────┴──────────────────────────────┘
```
