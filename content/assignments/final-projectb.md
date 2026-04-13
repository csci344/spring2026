---
title: "2. App Implementation"
type: "project"
draft: 0
num: "(Part 2)"
due_date: "2026-05-01"
heading_max_level: 3
order: 2
points: 100
toc: false
---

[← Review the Final Project Overview](final-project)

## Goal
After your design work is approved, you will build the app.

This part is about:

1. login and profile behavior
2. CRUD
3. using your API in the client
4. adding third-party components
5. submitting the finished app

Return to the [Final Project overview](final-project) for the full project scope, starter ideas, and core requirements.

## Required App Features

Your finished app must let the user do the following:

1. **Log in**
   - Use the starter authentication code from class.
   - Create a login page or login flow.

2. **See user-specific data**
   - Different users should not see the exact same personal data.
   - Each user should have their own profile or their own records.

3. **Create, read, update, and delete the main resource**
   - The main kind of item in your app must support CRUD.
   - The interface should make these actions easy to test.

4. **Use your API**
   - Use at least 2 endpoints.
   - The client should fetch, send, or update real data through your API.

5. **Use at least 2 third-party components**
   - Examples: map, chart, date picker, modal, lightbox, calendar, or UI component library.

6. **Present a usable interface**
   - The app should be understandable, responsive, and visually organized.

## Examples of Acceptable Third-Party Integrations

- a map component such as Leaflet or Google Maps
- a chart library such as Chart.js or Recharts
- a UI library or widget such as Ant Design, a date picker, a modal library, or a calendar widget

{% collapsible closed %}
### What does CRUD mean?

CRUD stands for:

- **Create** = make a new item
- **Read** = view items
- **Update** = edit an item
- **Delete** = remove an item

Example in PhotoApp:

- create a photo record
- view the user's photo gallery
- edit a caption or album
- delete a photo record

{% collapsible closed %}
### What counts as user-specific data?

User-specific data means the app changes based on who is logged in.

Examples:

- one user sees their own photos
- another user sees different photos
- each user has their own profile information

This does **not** mean every user sees the same shared list with no personal difference.

{% collapsible closed %}
### What would this look like in PhotoApp?

Here is one concrete example:

- **Login:** the user signs in with the starter auth flow
- **Profile behavior:** the app shows only that user's photos and albums
- **CRUD:** the user can add a photo, view photos, edit a caption, and delete a photo
- **API integration:** the client uses `/api/photos` and `/api/albums`
- **Third-party components:** image lightbox and date picker

## What I Should Be Able To Test

When I open your app, I should be able to:

1. log in
2. tell that the app is tied to the logged-in user
3. create a new item
4. view the item in the interface
5. edit the item
6. delete the item
7. see at least 2 third-party components working

## Implementation Checklist

- [ ] Login page implemented using the provided starter auth code
- [ ] User-specific profile or per-user data behavior implemented
- [ ] At least 2 API endpoints designed and used by the client
- [ ] CRUD functionality implemented for the primary resource
- [ ] At least 2 third-party components integrated
- [ ] Interface is complete, usable, and reasonably polished

{% collapsible closed %}
### Need a simple way to think about this?

Ask yourself:

1. What is the main item in my app?
2. Can the user create it?
3. Can the user see it?
4. Can the user edit it?
5. Can the user delete it?
6. Does the app change based on who is logged in?
7. Can I point to at least 2 third-party components in the interface?

## Final Project Submission

- Link to your completed application
- Link to your repository
- Working implementation of login/profile behavior
- Working CRUD workflow
- Working integration of at least 2 third-party components

<a href="/spring2026/assignments/final-project" class="nu-button">← Back to Final Project Overview</a>
