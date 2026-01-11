---
title: "Quiz 1: HTML + CSS"
draft: 1
---



## Paper Quiz 
Once you complete the <a href="https://docs.google.com/document/d/1UKlyCzrymBubJRnbMFpfHU-l_Z_xTaDR/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true" target="_blank">written portion of the quiz</a>, please complete the tasks below.

## Introduction
For the coding portion of this quiz, you will be replicating part of the Taco Temple interface as pictured below:

<img class="large frame" src="/spring2026/images/quizzes/quiz01/tt-screenshot.png" alt="Taco Temple Screenshot" />


> ### Guidelines
> * Read the instructions that are outlined under each section very carefully. 
> * Complete as many tasks as you can by the end of the quiz. 
> * Make your page look as close to the screenshots / demos as possible.
> * You **may** use your notes, any sample code, any prior work you've completed, and the Internet
> * You **may not** move the images into a different folder to make the image linking task easier.
> * You **may not** communicate with anyone during the quiz or use ChatGPT
> * Partial credit given. Just do your best!
> 

## Set-Up

<a href="course-files/quizzes/quiz01.zip" class="nu-button">Quiz 1 Starter Files <i class="fas fa-download"></i></a>

* Download the starter files and unzip them. They should be unzipped in a folder called `quiz01`.
* Create a `quizzes` folder inside of your `csci344` folder. Move your `quiz01` folder into your `csci344/quizzes` folder.
* Open your entire `csci344` folder in VS Code.

Your directory structure should look something like this (it's OK if your file structure looks different, so long as the quizzes folder looks like the one below):

```bash
csci344
├── homework
├── lectures
├── quizzes
│   └── quiz01
├── tutorials
...
```

When you're done with that, complete the Parts 1-7 as described below:

1. (10pts) [HTML Linking](#part1)
1. (20pts) [Header](#part2)
1. (15pts) [Google Fonts](#part3)
1. (25pts) [Main](#part4)
1. (10pts) [Accessibility](#part5)
1. (15pts) [Responsive layout](#part6)
1. (5pts) [Link from your homepage](#part7)

## Your Tasks

### Part 1. HTML Linking [10pts]
Currently, all of the image links are broken because their source is pointing to a dummy location (`src="#"`). Please fix the broken image links to the logo image and all of the food images. Take a look at the screenshots to see what the images ought to look like.

### Part 2. Header [20pts]
Make the header section look like the picture below, following the guidelines provided:

* [10pts] Use **Flex**
* [5pts] Links should be white with no underline
* [5pts] Don't forget the spacing surrounding the image and navigation (i.e., the content shouldn't be too close to the sides)

<img class="large" src="/spring2026/images/quizzes/quiz01/header.png" />


### Part 3. Google Fonts & H1, H2 Styling [15pts]

* [10pts] Use the "Passion One" Google font to style the `h1`, `h2`, and `h3` tags.
* [2.5pts] Center-align the `h1` tag (Our Menu)
* [2.5pts] Add some top margin to the `h1` and `h2` tags.

When you're done, the fonts should look like the ones pictured in [Part 4](#part4).


### Part 4. Main [25pts]
Within the `main` section of your HTML page, create layout shown below by following the guidelines:

* [12.5pts] The section with the class of "cards" should be a two-column grid (each column should be the same width).
    * Hint: you'll only need to specify the columns, **not** the rows, as the cards will be positioned into the next available grid cell by default.
    * Note the spacing between columns and rows
* [12.5pts] Each section with a class of "card" should also be a two-column grid (the second column should be narrower than the first).
    * Make sure you add a border around each card
    * Make sure you apply some padding within each card

<a style="text-decoration: none; border: none;" href="/spring2026/images/quizzes/quiz01/main.png" target="_blank"><img class="frame large" src="/spring2026/images/quizzes/quiz01/main.png" /></a>


### Part 5. Accessibility [10pts]
Use the WAVE browser extension to fix any accessibility errors. When you're done, you should have no accessibility errors.
* You **do NOT** have to submit a screenshot of your accessibility report.
* You **do** have to correct all the errors.

<img class="medium" src="/spring2026/images/quizzes/quiz01/wave.png" />


### Part 6: Responsive Layout [15pts]
Create a media query that activates when the width of the screen is **800px or less**. Within the media query, implement the following rules:

* [10pts] Overide the section with the class of “cards” so that it's a one-column grid.
* [5pts] Target the `nav` element and set its display to "none" so that the navigation does not display in the tablet or mobile views.


### Part 7: Add a link from your homepage [5pts]
1. Update your homepage by adding a link to the `index.html` file that you made in this quiz (and make sure you are using a relative link). Sarah's quiz looks like this:
* <a href="https://vanwars.github.io/csci344/" target="_blank">https://vanwars.github.io/csci344/</a>
2. Commit and sync your changes to GitHub.

## Submit to the Moodle

### Before you submit

Verify that you've completed **all 7 tasks** and that you're final Taco Temple menu page (mobile/tablet and desktop) looks as similar as possible to the animations (shown below):

<div class="verify">
    <section>
        <h4>Desktop Layout</h4>
        <img src="/spring2026/images/quizzes/quiz01/desktop-ui.gif" alt="Animation of Desktop layout" />
    </section>
    <section class="tablet">
        <h4>Tablet / Mobile</h4>
        <img src="/spring2026/images/quizzes/quiz01/mobile-ui.gif" alt="Animation of Tablet / Mobile layout" />
    </section>
</div>

### Submit to the Moodle
**Please Read Carefully:** To submit Quiz 1, paste the following links into the Moodle under the Quiz 1 submission section:

1. A link to your **homepage** on GitHub pages.
2. A link to your GitHub **code repository** (where your code files are stored).

If your GitHub is not working for whatever reason, just zip your **COMPLETED** `quiz01` folder and upload it to the Moodle.