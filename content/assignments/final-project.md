---
title: "Final Project"
type: "project"
num: "(Overview)"
draft: 1
assigned_date: "2026-04-13"
heading_max_level: 3
# hide_from_list: 1
order: 2
points: 100
toc: false
---

> **Goal:** Design and implement a small single-page application (SPA) backed by your own custom API.

This project will happen in **two stages**:

1. **Stage 1: Project planning and wireframing**
2. **Stage 2: App implementation**

Your final app should feel **small, focused, and complete**. It should show that you can define a project scope, design appropriate endpoints, and implement a working client experience.

## Project Scope

Choose **one** starter project idea below, or propose something of similar scope.

### Starter Project Ideas

| App Name | App Description | Potential Third-Party Widgets | Potential Endpoints |
|--|--|--|--|
| Live Music Memory Map | Track concerts you have attended, where they happened, when they happened, and your notes or ratings for each one. | <ul><li>map</li><li>date picker</li><li>chart of concerts by month or artist</li></ul> | <ul><li>`/api/concerts`</li><li>`/api/venues`</li><li>`/api/profile`</li></ul> |
| Public Art Explorer | Browse and document murals, sculptures, and installations around a city, including location, artist, category, and notes. | <ul><li>map</li><li>image lightbox</li><li>chart of artwork categories</li></ul> | <ul><li>`/api/artworks`</li><li>`/api/categories`</li><li>`/api/profile`</li></ul> |
| Favorite Coffee Spots | Save and review coffee shops, including location, rating, drink notes, and study-friendliness. | <ul><li>map</li><li>rating widget</li><li>chart of ratings or neighborhood counts</li></ul> | <ul><li>`/api/coffee-spots`</li><li>`/api/categories`</li><li>`/api/profile`</li></ul> |
| Daily Walks & Wanders | Log walking routes or favorite walking destinations, along with distance, mood, weather, and notes. | <ul><li>map</li><li>chart of distance over time</li><li>weather widget</li></ul> | <ul><li>`/api/walks`</li><li>`/api/routes`</li><li>`/api/profile`</li></ul> |
| Community Bulletin Board | Post announcements with a date, time, location, image, and category, then allow users to browse or filter announcements. | <ul><li>calendar widget</li><li>map</li><li>category filter or card UI library</li></ul> | <ul><li>`/api/announcements`</li><li>`/api/categories`</li><li>`/api/profile`</li></ul> |
| Favorite Study Spots | Keep a list of study locations with photos, quietness rating, amenities, and time-of-day preferences. | <ul><li>map</li><li>rating widget</li><li>chart of amenities or visits by location</li></ul> | <ul><li>`/api/study-spots`</li><li>`/api/amenities`</li><li>`/api/profile`</li></ul> |
| Scheduling App | Set goals, categorize them, assign time slots, and track whether each goal was completed. | <ul><li>calendar widget</li><li>chart of completion rates</li><li>modal or drawer UI component</li></ul> | <ul><li>`/api/goals`</li><li>`/api/categories`</li><li>`/api/profile`</li></ul> |

### Core Requirements

Your final project must:

1. be a **single-page app**
2. include a clear primary user workflow
3. use **at least 2 API endpoints**
4. include a **login page** using the starter authentication code provided in class
5. support user-specific behavior so that each user has their own profile or data experience
6. implement **CRUD** functionality for the app's primary resource
7. integrate at least **2 third-party components** such as a map, chart, or UI widget

### Scope Guidelines

- Keep the app small enough to finish well.
- One polished workflow is better than five half-finished ones.
- Your endpoints and UI should match each other clearly.
- Your visual design should support usability.

## Project Stages

This project is split into two documents:

1. [Planning and Wireframing](final-projecta)
2. [App Implementation](final-projectb)


## Final Note

This project is intended to show that you can move from **idea -> requirements -> design -> implementation**. Your app does not need to be huge, but it does need to be coherent, functional, and thoughtfully scoped.
