---
title: "Hamburger Menu"
type: "tutorial"
num: 5b
draft: 0
hide_from_list: 1
assigned_date: "2026-02-20"
due_date: "2026-02-23"
heading_max_level: 3
order: 5
points: 6
---

<style>
    .two-col {
        display: flex; 
        gap: 20px;
        align-items: flex-start;
    }
    .two-col img  {
        height: 300px
    }
    @media screen and (max-width: 700px) {
       .two-col {
            flex-direction: column;
        } 
    }
</style>

The goal of this exercise is to build a "hamburger menu" from scratch and toggle it with JavaScript.

## 1. Set-up
Please create a new folder inside of `tutorial05` called  `02-hamburger-menu` 

### 1.1. Create the HTML
Inside of `02-hamburger-menu`, create a new `index.html` file. Then, paste the following starter code into it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hamburger Menu</title>
</head>
<body>
  <nav class="navbar">
    <h1>Logo</h1>

    <button id="menu-toggle" class="menu-toggle">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <ul id="nav-links" class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

### 1.2. Add CSS
Create `styles.css` and start with:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

body * {
  box-sizing: border-box;
}

.navbar {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: white;
  height: 80px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.bar {
  display: block;
  width: 24px;
  height: 3px;
  margin: 4px 0;
  background: white;
}
```

### 1.3. Connect Your Stylesheet
Link the stylesheet you just made in `<head>`:

```html
<link rel="stylesheet" href="styles.css" />
```

### 1.4. Preview the starter code
Now, preview `index.html` in the browser (using Live Server). You should notice that there is a hamburger menu floating in the middle:

<img class="large frame" src="/spring2026/images/tutorials/tutorial05/tutorial05b-part1.png" />

> In the next section your job will be to make the website smarter:
> 1. For **Desktop** displays: **Don't** show the hamburger menu but **do** show the navigation.
> 1. For Mobile displays: *Do* show the hamburger menu but **don't** show the navigation.

## 2. Responsive CSS: Showing / hiding elements based on screen size

### 2.1. Add some conditional CSS using Media Queries

```css
.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 80px;
    right: 0;
    width: 220px;
    flex-direction: column;
    background: #333;
    padding: 12px;
  }

  .nav-links.active {
    display: flex;
  }
}
```
### 2.3. Preview the page again
Please open the HTML page again in the Browser. You should now notice that: 

1. When the page is in Desktop mode, the hamburger button does not display.
1. When the page is in Mobile mode, the hamburger button does display but the navigation does not.

<div class="two-col">
    <img src="/spring2026/images/tutorials/tutorial05/tutorial05b-part2-mobile.png" />
    <img src="/spring2026/images/tutorials/tutorial05/tutorial05b-part2-desktop.png" />
</div>

> In the next section your job will be to make the menu appear on the mobile layout when you click the button. To do this, you will add and remove the 'active' class on both the button and the menu.

## 3. Add JavaScript
Create `index.js`, link it in `<head>`, and create a `toggleMenu()` function.

### 3.1. Create and link your JavaScript
Create a new file called `index.js`. Then link it to your HTML within the `<head>` tag

```html
<script src="index.js" defer></script>
```

### 3.2. Create the toggleMenu() function
Create a new `toggleMenu` function() whose job is to:
1. Target the menu with id `nav-links`.
2. Use the element's classList function to toggle the "active" class on and off. 


Skeleton to guide you:
```javascript
function toggleMenu() {
  // 1) target menu
  // 1) toggle 'active' on menu
}
```

When you're done, don't forget to attach the function to the event that should trigger it inside the HTML (notice the onclick attribute below):

```html
<button id="menu-toggle" class="menu-toggle" onclick="toggleMenu()">
    ...
</button>
```

### 3.3. Test
1. Resize browser to mobile width.
2. Click the hamburger button.
3. Verify first click opens menu and second click closes it.

<img class="small frame" src="/spring2026/images/tutorials/tutorial05/tutorial05b-part3.gif" />


<a href="/spring2026/assignments/tutorial05" class="nu-button">← Back to Tutorial 5</a>