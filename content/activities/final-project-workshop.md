---
title: "Activity: Final Project Workshop"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
start_date: "2026-04-24"
due_date: "2026-04-24"
---

## Today's Goals
Today we're going to do a couple of different things:
1. You're going to share out your final project ideas with your classmates (proposal due tonight).
2. We're going to review how to set up your backend.
3. We're going to practice making an interactive map (based on the "fruiting plants on campus" database).

## 1. 10 Minutes: Share out your final project idea
In groups of 3:
1. What kind of app are you building?
2. Who is the app for?
3. What data will you be interacting with?


## 2. Tips for Configuring your API
Basic workflow here: https://github.com/csci344/api-generator

You may decide that you want to make slight modifications to your API as you brainstorm. If you want to save yourself some time, you can:
1.  Create a new folder in the `samples` directory to store your API YAML file, sample data, and sample images.
2. Modify the data / images / YAML config.
3. Rebuild your api from the examples directory: 

    ```bash
    npm run build:example -- --dir sneakers
    npm run build:example -- --dir plants
    ```

## 3. Interactive Map Activity

If time: [Interactive Map Activity](/spring2026/activities/react-05-data-visualization-maps)
