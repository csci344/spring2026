---
title: "Flexbox"
group: "CSS Resources"
group_order: 2
order: 7
quicklink: 0
---
## Resources & Documentation

* <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> (game)
* <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks: A guide to flexbox</a> (recommended)

## What is Flexbox?

Flexbox is a layout system that makes it easy to align and distribute space among items in a container. Perfect for centering content, creating equal-height columns, and building responsive navigation bars. Use `display: flex` on a parent container to enable flexbox.

## Key Flexbox Properties

### justify-content (Horizontal Alignment)

Controls how items are spaced along the main axis (horizontal by default).

```css
.container {
  display: flex;
  justify-content: flex-start;  /* Items align to the left (default) */
  /* Other values: flex-end, center, space-between, space-around, space-evenly */
}
```

**Common values:**
- `flex-start` - Items align to the start (left)
- `flex-end` - Items align to the end (right)
- `center` - Items center in the container
- `space-between` - Items spread with space between them
- `space-around` - Items spread with equal space around each
- `space-evenly` - Items spread with equal space everywhere

**Example:**
```css
.flex-example-1 {
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 10px;
}

.flex-example-1 > div {
  padding: 10px;
  margin: 5px;
}

```

```html
<div class="flex-example-1">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
*Result: Items are centered horizontally in the container.*

```bash
┌─────────────────────────────────────────┐
│         [Item 1] [Item 2] [Item 3]      │
└─────────────────────────────────────────┘
```

### align-items (Vertical Alignment)

Controls how items are aligned along the cross axis (vertical by default).

```css
.container {
  display: flex;
  align-items: stretch;  /* Items stretch to fill container height (default) */
  /* Other values: flex-start, flex-end, center, baseline */
}
```

**Common values:**
- `stretch` - Items stretch to fill container height (default)
- `flex-start` - Items align to the top
- `flex-end` - Items align to the bottom
- `center` - Items center vertically
- `baseline` - Items align to their text baseline

**Example:**
```css
.flex-example-2 {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  height: 100px;
}

.flex-example-2 > div {
  margin: 5px;
  padding: 10px;
}

.flex-example-2 > div:nth-child(2) {
  padding: 50px;
}
```

```html
<div class="flex-example-2">
  <div>Item 1</div>
  <div>Item 2 (taller)</div>
  <div>Item 3</div>
</div>
```
*Result: Items are vertically centered, regardless of their individual heights.*

```bash
┌────────────────────────────────┐
│                                │
│                                │
│                                │
│      [ Item 1 ]                │
│      [ Item 2 (taller) ]       │
│      [ Item 3                  │
│                                │
│                                │
│                                │
└────────────────────────────────┘
```

### gap (Spacing Between Items)

Adds consistent spacing between flex items. Much easier than using margins!

```css
.container {
  display: flex;
  gap: 20px;  /* Space between all items */
}
```

**Example:**
```css
.flex-example-3 {
  display: flex;
  gap: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
```

```html
<div class="flex-example-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
*Result: All items have exactly 20px of space between them, no need for individual margins.*

```bash
┌───────────────────────────────────────────────┐
│ [ Item 1 ] ──── [ Item 2 ] ──── [ Item 3 ]    │
└───────────────────────────────────────────────┘
             ↑ 20px gap      ↑ 20px gap
```

### flex-direction (Row or Column)

Controls the direction of the main axis. Default is row (horizontal).

```css
.container {
  display: flex;
  flex-direction: row;  /* Items flow left to right (default) */
  /* Other values: column, row-reverse, column-reverse */
}
```

**Common values:**
- `row` - Items flow left to right (default)
- `column` - Items flow top to bottom
- `row-reverse` - Items flow right to left
- `column-reverse` - Items flow bottom to top

**Example (row):**
```css
.flex-example-4 {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 10px;
}

.flex-example-4 > div {
  padding: 10px;
  margin: 5px;
}
```

```html
<div class="flex-example-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
*Result: Items arranged horizontally (1, 2, 3).*

```bash
┌─────────────────────────────────────────┐
│ [ 1 ] → [ 2 ] → [ 3 ]                   │
└─────────────────────────────────────────┘
```

**Example (column):**
```css
.flex-example-5 {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
}

.flex-example-5 > div {
  padding: 10px;
  margin: 5px;
}
```

```html
<div class="flex-example-5">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
*Result: Items arranged vertically (stacked).*

```bash
┌───────────┐
│   [ 1 ]   │
│     ↓     │
│   [ 2 ]   │
│     ↓     │
│   [ 3 ]   │
└───────────┘
```

## Combining Properties

You'll often use multiple properties together:

```css
.navbar {
  display: flex;
  justify-content: space-between;  /* Space items apart */
  align-items: center;             /* Center vertically */
  gap: 20px;                       /* Consistent spacing */
}
```

This creates a navigation bar with items spaced apart, vertically centered, with consistent gaps.

```bash
┌──────────────────────────────────────────┐
│ [ Home ] ──── [ About ] ──── [ Contact ] │
└──────────────────────────────────────────┘
             ↑ gap          ↑ gap
```
