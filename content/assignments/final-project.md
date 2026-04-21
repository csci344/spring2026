---
title: "Final Project"
type: "project"
num: "(Overview)"
draft: 0
assigned_date: "2026-04-13"
heading_max_level: 3
order: 2
points: 100
hide_from_list: 1
toc: false
---

> **Goal:** Build a small single-page app that uses your own API.

This project has **two parts**:

1. **Stage 1:** [Project planning and wireframing](final-projecta)
2. **Stage 2:** [App implementation](final-projectb)

Your app should feel **small, clear, and complete**. It is better to build one thing well than to build many unfinished features.

## What You Are Building

You are building:

1. one **single-page app (SPA)**
2. with a **login**
3. backed by **your own API**
4. with one main user task

## What You Will Turn In

1. a planning + wireframing submission for Stage 1
2. a finished app for Stage 2

## Project Scope

Choose **one** starter idea below, or propose something similar in size.

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

## Project Rules

Your final app must:

1. be a **single-page app**
2. have **one main user workflow**
3. use **at least 2 API endpoints**
4. include a **login page or login flow** using the starter auth code from class
5. show **user-specific data or behavior**
6. support **CRUD** for the main resource
7. include **at least 2 third-party components**

{% collapsible closed %}
### Need help understanding the rules?

Here is what each rule means in plain language:

1. **Single-page app** means the app works as one app, not as a group of separate HTML pages.
2. **One main user workflow** means there is one clear thing the user can do from start to finish.
3. **At least 2 API endpoints** means your client should talk to at least two routes such as `/api/photos` and `/api/albums`.
4. **Login** means the user must sign in with the starter authentication code from class.
5. **User-specific data or behavior** means accounts should matter in some meaningful way. That might mean users see their own records, have different permissions, or the app tracks who created or edited an item.
6. **CRUD** means the user can create, read, update, and delete the main kind of item in the app.
7. **Third-party components** means tools or libraries you did not build yourself, such as a map, chart, date picker, modal, lightbox, or UI component library.

{% collapsible closed %}
### What would this look like in PhotoApp?

Here is one example of an app that meets the project rules:

- **App idea:** PhotoApp
- **Main user workflow:** log in, upload/manage photos, organize them into albums
- **Main resource:** `photos`
- **Second resource:** `albums`
- **Possible endpoints:** `/api/photos`, `/api/albums`, `/api/profile`
- **User-specific behavior:** the app tracks who owns or created photos and albums, and the interface changes meaningfully based on the logged-in user
- **CRUD example:** create a photo entry, view photos, edit a caption, delete a photo
- **Third-party components:** image lightbox, date picker, chart of uploads by month

## Scope Guidelines

- Keep the project small enough to finish well.
- One polished workflow is better than five unfinished ones.
- Make sure your API and your interface match each other.
- Make design choices that make the app easier to use.

{% collapsible closed %}
### Need help choosing a good scope?

Good scope:

- one main feature
- a few clear screens or states
- a small number of data fields
- 2 or 3 endpoints that clearly support the app

Too big:

- a social network
- a marketplace
- a full learning management system
- an app with many unrelated features

## Project Stages

Use these two documents as your guide:

1. [Planning and Wireframing](final-projecta)
2. [App Implementation](final-projectb)

## Final Note

This project is meant to show that you can move from **idea -> plan -> design -> implementation**. Your app does not need to be large. It does need to be clear, functional, and complete.
