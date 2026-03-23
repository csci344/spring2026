---
title: "Get Started on HW3: GET, POST, and DELETE"
type: "tutorial"
num: 8
draft: 0
assigned_date: "2026-03-20"
due_date: "2026-03-25"
heading_max_level: 3
order: 8
points: 6
---

## Introductory Slides
* <a href="https://docs.google.com/presentation/d/17eIgQI8n4uxi5dKlG1EJtEypjqYajfTs/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true" target="_blank">Tutorial 8 Slides</a>

## Overview
In this tutorial, we will be getting started on some concepts that should help you in [Homework 3](hw03). Specifically, we will:

1. Set up the HW3 starter files.
1. Learn how to authenticate to the Photo App REST API.
2. Fetch data from the API to display on a web page.
3. Create a bookmark using the API (see 2. Create / Delete Data with Event Handlers).
4. Delete data using the API.

## What to Submit
To submit this tutorial, please create a link from your homepage to your Homework 3 web page (see Sarah's homepage for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission for Tutorial 8.

To get full credit for this assignment, you should have at least the following completed:

<!-- .last-col-nowrap -->
| | Description of Task | HW3 Link |
|--|--|--|
| [ ] | The `Posts Panel` is mostly rendered from API data (image, caption, username, likes, etc.), even if comments and likes are not finished yet. | [1.4](hw03#posts-panel) |
| [ ] | Clicking the bookmark icon of an unbookmarked post issues a `POST` request to `/api/bookmarks/`. | [2.3](hw03#part2-3) |
| [ ] | After bookmarking a post, refreshing the page shows the filled bookmark icon. | [1.4.4](hw03#bookmark-button-display) |
| [ ] | Clicking the bookmark icon of a bookmarked post issues a `DELETE` request to `/api/bookmarks/<id>`. | [2.4](hw03#part2-4) |
| [ ] | After unbookmarking a post, refreshing the page shows the hollow bookmark icon. | [1.4.4](hw03#bookmark-button-display) |

If you collaborated with someone, please list your partner's name in the comments section.
