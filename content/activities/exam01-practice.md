---
title: "Practice Exam 1: HTML + CSS"
draft: 0
---

## Introduction
For the coding portion of this exam, you will be replicating part of the Taco Temple interface as pictured below:

<img class="large frame" src="/spring2026/images/exams/exam01-practice/tt-screenshot.png" alt="Taco Temple Screenshot" />


> ### Guidelines
> * Read the instructions that are outlined under each section very carefully. 
> * Complete as many tasks as you can by the end of the exam. 
> * Make your page look as close to the screenshots / demos as possible.
> * You **may** use your notes, any sample code, any prior work you've completed, and the Internet
> * You **may not** move the images into a different folder to make the image linking task easier.
> * You **may not** communicate with anyone during the exam or use ChatGPT
> * Partial credit given. Just do your best!
> 

## Set-Up

<a href="course-files/exams/exam01-practice.zip" class="nu-button">Exam 1 Practice Starter Files <i class="fas fa-download"></i></a>

* Download the starter files and unzip them. They should be unzipped in a folder called `exam01-practice`.
* Create an `exams` folder inside of your `csci344` folder. Move your `exam01-practice` folder into your `csci344/exams` folder.
* Open your entire `csci344` folder in VS Code.

Your directory structure should look something like this (it's OK if your file structure looks different, so long as the exams folder looks like the one below):

```bash
csci344
├── homework
├── lectures
├── exams
│   └── exam01-practice
├── tutorials
...
```

When you're done with that, complete the Parts 1-7 as described below:

1. (10pts) [HTML Linking](#part-1-html-linking-10pts)
1. (20pts) [Header](#part-2-header-20pts)
1. (15pts) [Google Fonts](#part-3-google-fonts--h1-h2-styling-15pts)
1. (25pts) [Main](#part-4-main-25pts)
1. (10pts) [Accessibility](#part-5-accessibility-10pts)
1. (15pts) [Responsive layout](#part-6-responsive-layout-15pts)
1. (5pts) [Link from your homepage](#part-7-add-a-link-from-your-homepage-5pts)

## Your Tasks

### Part 1. HTML Linking [10pts] {#part-1-html-linking-10pts}
Currently, all of the image links are broken because their source is pointing to a dummy location (`src="#"`). Please fix the broken image links to the logo image and all of the food images. Take a look at the screenshots to see what the images ought to look like.

### Part 2. Header [20pts] {#part-2-header-20pts}
Make the header section look like the picture below, following the guidelines provided:

* [10pts] Use **Flex**
* [5pts] Links should be white with no underline
* [5pts] Don't forget the spacing surrounding the image and navigation (i.e., the content shouldn't be too close to the sides)

<img class="large" src="/spring2026/images/exams/exam01-practice/header.png" />


### Part 3. Google Fonts & H1, H2 Styling [15pts] {#part-3-google-fonts--h1-h2-styling-15pts}

* [10pts] Use the "Passion One" Google font to style the `h1`, `h2`, and `h3` tags.
* [2.5pts] Center-align the `h1` tag (Our Menu)
* [2.5pts] Add some top margin to the `h1` and `h2` tags.

When you're done, the fonts should look like the ones pictured in [Part 4](#part-4-main-25pts).


### Part 4. Main [25pts] {#part-4-main-25pts}
Within the `main` section of your HTML page, create layout shown below by following the guidelines:

* [12.5pts] The section with the class of "cards" should be a two-column grid (each column should be the same width).
    * Hint: you'll only need to specify the columns, **not** the rows, as the cards will be positioned into the next available grid cell by default.
    * Note the spacing between columns and rows
* [12.5pts] Each section with a class of "card" should also be a two-column grid (the second column should be narrower than the first).
    * Make sure you add a border around each card
    * Make sure you apply some padding within each card

<a style="text-decoration: none; border: none;" href="/spring2026/images/exams/exam01-practice/main.png" target="_blank"><img class="frame large" src="/spring2026/images/exams/exam01-practice/main.png" /></a>


### Part 5. Accessibility [10pts] {#part-5-accessibility-10pts}
Use the WAVE browser extension to fix any accessibility errors. When you're done, you should have no accessibility errors.
* You **do NOT** have to submit a screenshot of your accessibility report.
* You **do** have to correct all the errors.

<img class="border border-gray-300" src="/spring2026/images/exams/exam01-practice/wave.png" />


### Part 6: Responsive Layout [15pts] {#part-6-responsive-layout-15pts}
Create a media query that activates when the width of the screen is **800px or less**. Within the media query, implement the following rules:

* [10pts] Overide the section with the class of “cards” so that it's a one-column grid.
* [5pts] Target the `nav` element and set its display to "none" so that the navigation does not display in the tablet or mobile views.

<img class="border border-gray-300 max-w-[300px] mx-auto" src="/spring2026/images/exams/exam01-practice/mobile-ui-static.png" alt="Animation of Desktop layout" />


### Part 7: Add a link from your homepage [5pts] {#part-7-add-a-link-from-your-homepage-5pts}
1. Update your homepage by adding a link to the `index.html` file that you made in this exam (and make sure you are using a relative link). 

## Submit to the Moodle

### Before you submit

Verify that you've completed **all 7 tasks** and that you're final Taco Temple menu page (mobile/tablet and desktop) looks as similar as possible to the animations (shown below):

<div class="grid gap-4 md:grid-cols-3">
    <section class="md:col-start-1 md:col-end-3">
        <h4>Desktop Layout</h4>
        <img class="border border-gray-300" src="/spring2026/images/exams/exam01-practice/desktop-ui.gif" alt="Animation of Desktop layout" />
    </section>
    <section class="md:col-start-3 md:col-end-4" class="tablet">
        <h4>Tablet / Mobile</h4>
        <img  class="border border-gray-300" src="/spring2026/images/exams/exam01-practice/mobile-ui.gif" alt="Animation of Tablet / Mobile layout" />
    </section>
</div>

