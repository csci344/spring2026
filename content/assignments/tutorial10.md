---
title: "Getting started with HW4"
type: "tutorial"
num: 10
draft: 1
assigned_date: "2026-04-08"
due_date: "2026-04-13"
heading_max_level: 3
order: 10
points: 6
---


## Overview
In this tutorial, we will be getting started on some concepts that should help you in [Homework 4](hw04). Just like in Tutorial 8, we will:

1. Set up the HW4 starter files.
1. Learn how to authenticate to the Photo App REST API.
2. Fetch data from the API to display on a web page.
3. Create a bookmark using the API (see 2. Create / Delete Data with Event Handlers).
4. Delete data using the API.

## What to Submit
To submit this tutorial, please create a link from your homepage to your Homework 3 web page (see Sarah's homepage for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission for Tutorial 8.

To get full credit for this assignment, you should have at least the following completed:

| | Description of Task |
|--|--|
| [ ] | The `Posts Panel` is mostly rendered from API data (image, caption, username, likes, etc.), even if comments and likes are not finished yet. |
| [ ] | Clicking the bookmark icon of an unbookmarked post issues a `POST` request to `/api/bookmarks/`. |
| [ ] | After bookmarking a post, the component automatically redraws with the filled bookmark icon. | [1.4.4](hw03#bookmark-button-display) |
| [ ] | Clicking the bookmark icon of a bookmarked post issues a `DELETE` request to `/api/bookmarks/<id>`. |
| [ ] | After unbookmarking a post, rthe component automatically redraws with the hollow bookmark icon. |

If you collaborated with someone, please list your partner's name in the comments section.

