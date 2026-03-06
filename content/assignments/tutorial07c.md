---
title: "Course Search Interface"
type: "tutorial"
num: 7c
draft: 0
hide_from_list: 1
assigned_date: "2026-03-06"
due_date: "2026-03-16"
heading_max_level: 3
order: 7
points: 6
---

<!-- .info -->
> ## Walthrough Videos Available
> If you get stuck or need help, I have made some <a href="https://drive.google.com/drive/folders/1uxwTOusr3mEQQWchtz-3iIjtw1TibkC6?usp=drive_link" target="_blank">walkthrough videos</a>. 
> 
> Please try to do as much as you can on your own before referring to the videos: following along can be helpful for learning, but it doesn't engage your brain in the same way as trying to solve these problems on your own. Good luck!


> ## Goal
> Build a UNCA Course Search interface for the Computer Science Department that allows users to search and filter courses. This exercise combines the array methods you practiced in Part A (`filter`, `map`, `forEach`) with DOM manipulation to create an interactive web application.

## What You'll Build

Your interface should work like this:

<img class="frame screenshot" src="/spring2026/images/tutorials/tutorial07/demo-course-search.gif" />

## Setup

1. Within your `tutorial07` folder, create a folder called `03-course-search` for this exercise.
2. You'll need to create the following files:
   - `index.html` - The HTML structure
   - `style.css` - The styling
   - `course-data.js` - The course data (download from below)
   - `main.js` - Your JavaScript code

## Download Course Data

Download the course data file and save it as `course-data.js` in your `03-course-search` folder:

<a href="/spring2026/course-files/tutorials/tutorial07/course-data.js" class="nu-button">Download Course Data <i class="fas fa-download"></i></a>


{% collapsible %}
## Create the HTML File (`index.html`)

Copy this starter HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="course-data.js" defer></script>
    <script src="main.js" defer></script>
    <title>Course Search</title>
</head>
<body>
    <header>
        <h1>Schedule of Courses</h1>
        <div class="search-form">
            <input 
                type="text" 
                id="search_term" 
                onkeyup="filterCourses()"
                placeholder="Your search term here..." 
                aria-label="Search for classes" />
            <span>
                <input type="checkbox" tabindex="2" id="is_open" onchange="filterCourses()" />
                <label for="is_open">Show open classes only</label>
            </span>
        </div>
    </header>
    <main class="courses">
        <!-- Courses will be displayed here -->
    </main>
</body>
</html>
```

> ### Utilizing New Events!
> In the HTML code above, notice that instead of tying functionality to the `onclick` event, we're hooking into the `onkeyup` and `onchange` events (look carefully above).


{% collapsible %}
## Create the CSS File (`style.css`)

Copy this starter CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    background-color: #F4F4F4;
    font-family: 'Poppins', sans-serif;
}

body * {
    box-sizing: border-box;
}

h1, h2 {
    font-family: 'Poppins', sans-serif;
}

header {
    margin: 50px 5vw;
}

.search-form {
    display: grid;
    background-color: white;
    grid-template-columns: auto;
    justify-items: flex-start;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;
    padding: 20px 20px;
    border-radius: 4px;
    border: solid 1px #DDD;
    margin: 20px 0;
}

.search-form input[type="text"] {
    width: 100%;
    padding: 5px 10px;
}

.search-form input[type="text"] {
    font-size: 1.1em;
}

.courses {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px 5vw;
    column-gap: 20px;
    row-gap: 20px;
}

.course-card {
    border: solid 1px #CCC;
    padding: 10px 20px 30px 20px;
    border-radius: 8px;
    background-color: white;
}

.course-card h2 {
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 1.2em;
    font-size: 1.3em;
    color: #333;
}

.course-card .status {
    margin-bottom: 10px;
}

.course-card .status i {
    margin-right: 5px;
}

.course-card .status.open i {
    color: rgb(46, 168, 46);
}

.course-card .status.closed i {
    color: rgb(169, 36, 36);
}

.course-card p {
    margin: 5px 0;
    color: #666;
}

.fa-circle-check {
    color: rgb(46, 168, 46);
}

.fa-circle-xmark {
    color: rgb(169, 36, 36);
}

@media (max-width: 768px) {
    .courses {
        grid-template-columns: 1fr;
    }
}
```


{% collapsible %}
## Create the JavaScript File (`main.js`)

### 1. Global Variables

```javascript
let searchTerm = "";
let openOnly = false;
```

### 2. Helper Functions

#### 2.1. `isClassFull(course)`

Returns `true` if course is full:

```javascript
function isClassFull(course) {
    // Return true if course.Classification.Open === false
}
```

#### 2.2. `doesTermMatch(course)`
Returns `true` if course matches search term:
```javascript
function doesTermMatch(course) {
    // If searchTerm is empty, return true (show all courses)
    // Convert searchTerm to lowercase
    // Check if searchTerm appears in (all converted to lowercase):
    //   - course.Code
    //   - course.Title
    //   - course.CRN (convert to string first)
    //   - course.Instructors[].Name (use map to get all names, then join)
    // Use includes() for case-insensitive matching
    // Return true if searchTerm matches any of these fields
}
```

#### 2.3. `dataToHTML(course)`
Returns HTML string for a course card:
```javascript
function dataToHTML(course) {
    // should return a formatted HTML card with the relevant course info
    // (using template literals). 
}
```

Some samples of how the cards should look for open and closed courses:

##### Open course
```html
<section class="course-card">
    <h2>CSCI 183.001: Intro to Programming: Data Science</h2>
    <p class="status open">
        <i class="fa-solid fa-circle-check"></i>
        Open &bull; 10320 &bull; Seats Available: 14
    </p>
    <p>
        MWF &bull; ZEI 201&bull; 3 credit hour(s)
    </p>
    <p>
        <strong>Sarris, Michael</strong>
    </p>
</section>
```


##### Closed course
```html
<section class="course-card">
    <h2>CSCI 185.001: Intro to Programming: Web Development</h2>
    <p class="status closed">
        <i class="fa-solid fa-circle-xmark"></i>
        Closed &bull; 10313 &bull; Number on Waitlist 0
    </p>
    <p>
        MWF &bull; ZEI 201 &bull; 3 credit hour(s)
    </p>
    <p>
        <strong>Rashid, Farzana</strong>
    </p>
</section>
```


### 3. Main Functions

#### 3.1. `showMatchingCourses()`

Filters and displays courses:

```javascript
function showMatchingCourses() {
    // 1. Get the .courses container element
    // 2. Clear it
    // 3. Start with courseList (from course-data.js)
    // 4. Apply the filters and store the matched courses in a variable
    // 5. If no courses match, display "No courses match your search." and return
    // 6. Output each course to the .courses container (forEach + insertAdjacentHTML)
}
```

#### 3.2. `filterCourses()`

Updates filters and shows matching courses:

```javascript
function filterCourses() {
    // Update global variables (searchTerm and openOnly) by
    // reaching into the DOM and retrieving their values
    // Invoke the showMatchingCourses() function
}
```

In the HTML starter code above, the text input and checkbox already call `filterCourses()` using `onkeyup` and `onchange` attributes.

### 4. Initial Render

At the bottom of your `main.js` file, call `showMatchingCourses()` once so that all courses display when the page loads:

```javascript
// show all courses initially:
showMatchingCourses();
```

## What This Exercise Practices

- **Array Methods from Part A**: `filter()`, `forEach()`, `map()` (like Exercises 1, 3, 4-5, 8)
- **DOM Manipulation**: `querySelector()`, `innerHTML`
- **Template Literals**: Creating HTML strings (like Exercise 3)
- **Event Handling**: Form submission
- **String Methods**: `toLowerCase()`, `includes()`

## What to Submit

When you're done, please create a link from your homepage to your Tutorial 7C web page. Then, commit and push all of your edits to GitHub and paste a link to your GitHub Repository and to your GitHub Pages in the Moodle submission.

If you collaborated with someone, please list your partner's name in the comments section.

<a href="/spring2026/assignments/tutorial07" class="nu-button">← Back to Tutorial 7</a>
