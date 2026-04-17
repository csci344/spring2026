---
title: "1. Planning and Wireframing"
type: "project"
draft: 0
num: "(Part 1)"
due_date: "2026-04-22"
heading_max_level: 3
order: 2
points: 50
toc: false
---

[← Review the Final Project Overview](final-project)

## Overview
In this stage, you will decide what you are building **before** you code the full app.

This part is about:

1. choosing a clear app idea
2. planning your API
3. sketching your screens
4. showing what the app might look like
5. explaining your design choices

Return to the [Final Project overview](final-project) for the full project scope, starter ideas, and core requirements.

Before you begin, please make a copy of <a href="https://docs.google.com/document/d/1yOonKYELRyCZfgvIGj_-M_QKSQZvZbF4nI1m_wP6zyw/edit?usp=sharing" target="_blank">this document</a>, which you will submit to Moodle.

<span id="app-concept"></span>
## 1. App Concept

Write a short description of your app. Explain:

1. what the app is for
2. who the user is
3. what the primary user action will be
4. what kind of data the app will store or display

{% collapsible closed %}
### Need help starting your app concept?

You can use this sentence starter:

> My app is called ____. It helps users ____. The main thing a user will do is ____. The app will store or display ____.

PhotoApp example:

> My app is called PhotoApp. It helps users organize and manage their photos. The main thing a user will do is log in, view photos in their feed, and bookmark / like /comment on photos. The app will store photo titles, captions, dates, album names, and user profile data.

Keep this short. You do not need to describe every feature yet.

<span id="endpoint-design"></span>
## 2. Endpoint Design

Design **at least 2 API endpoints** for your app.

Your endpoint plan should show:

1. the route
2. the HTTP method
3. what the endpoint is used for
4. what data it sends or returns

Your endpoints should make it possible to support the CRUD behavior in your app.


{% collapsible closed %}
### Need help thinking about endpoints?

An endpoint is a route in your API.

Example:

- `GET /api/photos` = get the user's photos
- `POST /api/photos` = create a new photo record
- `PATCH /api/photos/:id` = update one photo
- `DELETE /api/photos/:id` = delete one photo

PhotoApp example resources:

- `photos`
- `bookmarks`
- `comments`

If you are not sure what to include, start by listing the main kinds of data your app needs.


<span id="wireframes"></span>
## 3. Wireframes

Create wireframes for **2-3 screens** in Figma.

Your wireframes should include:

1. a login screen
2. a main app screen
3. at least one screen or state that shows how you will view, create and/or delete new records

### Rules

- Grayscale only (no color)
- Boxes + text labels only
- Focus on layout, hierarchy, and flow, not styling
- Consider both mobile and desktop layouts
- Think about how your screens will enable your user to add / edit / delete data

{% collapsible closed %}
### Need help understanding wireframes?

A wireframe is a simple layout drawing of your app. It is **not** the final design.

* **Use:** boxes, labels, buttons, arrows if needed
* **Do not worry about:** colors, fonts, polished styling

#### PhotoApp wireframe example (Mobile):

<img class="screenshot frame" src="/spring2026/images/homework/final-project/mobile-wireframe.png" />

#### PhotoApp wireframe example (Desktop):

<img class="screenshot-md frame" src="/spring2026/images/homework/final-project/desktop-wireframe.png" />

<span id="visual-direction"></span>
## 4. High-Fidelity Mockup (Colors and Fonts)

Create a styled mockup based on one of your wireframes.

An easy way to do this is:

1. Make a copy of one of your wireframes on a new page or artboard.
2. Keep the same layout, but start replacing the plain boxes and labels with a more realistic visual design.
3. Add your color choices.
4. Add your font choices and text sizes.
5. Add spacing, alignment, and sizing so the screen looks organized and intentional.
6. Make sure it is obvious what the user should look at first and what action they should take.

Your styled mockup should show:

- the colors you plan to use
- the fonts and text sizes you plan to use
- how buttons, forms, cards, panels, or other UI pieces will look
- how the screen is visually organized

### Rules

- Color must not be the only way information is conveyed.
- Visual design should support usability, not distract from it.


{% collapsible closed %}
### Need help explaining your design choices?

You can answer questions like these:

1. What should the user notice first?
2. Why did you place the main button or form there?
3. What colors or fonts did you choose?
4. How does your layout make the app easier to use?

PhotoApp example:

`I used a simple gallery layout so users can quickly scan their photos. I placed the Add Photo button near the top because it is an important action. I used strong contrast for buttons and readable text sizes so the app is easy to use.`

## Stage 1 Submission

Before you submit, make sure you have all of the following. Stage 1 is worth **50 points total**.

<!-- .last-col-nowrap -->
| | Points | Name of Task | Description of Task | Section |
|--|--|--|--|--|
| [ ] | 5 | App concept description | A short app concept description explains what your app does, who it is for, and what the main user action is. | [1](#app-concept) |
| [ ] | 10 | API plan | An API plan includes at least 2 endpoints. Each endpoint includes the route, HTTP method, purpose, and data it sends or receives. | [2](#endpoint-design) |
| [ ] | 5 | Wireframes | You created at least 3 wireframes in Figma. | [3](#wireframes) |
| [ ] | 5 | Wireframe: Login screen | One wireframe shows the login screen. | [3](#wireframes) |
| [ ] | 5 | Wireframe: Main app screen | One wireframe shows the main app screen. | [3](#wireframes) |
| [ ] | 10 | Wireframe: CRUD workflow | At least one wireframe or screen state shows how the user will create, edit, or delete data. | [3](#wireframes) |
| [ ] | 5 | Styled mockup | A styled mockup is based on one of your wireframes and shows your visual design choices. | [4](#visual-direction) |
| [ ] | 5 | Explain your design choices | A short explanation tells why you made your main visual choices. | [4](#visual-direction) |

<a href="/spring2026/assignments/final-project" class="nu-button">← Back to Final Project Overview</a>
