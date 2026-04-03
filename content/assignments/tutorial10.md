---
title: "Getting started with HW4"
type: "tutorial"
num: 10
draft: 0
assigned_date: "2026-04-10"
due_date: "2026-04-13"
heading_max_level: 3
order: 10
points: 6
---

<span id="videos"></span>
> ## Video Walkthroughs for Homework 4
> The following video walkthroughs go over all of the requirements for Tutorial 10.
> 
> These videos were recorded last year, so there are a few outdated references (e.g., this used to be Tutorial 8):
>
> 1. <span class="badge">06:43</span> <a
    href="https://drive.google.com/file/d/15H0gyytlsMO_fdOPmTtrxx-0n-RjnSHv/view?usp=sharing" target="_blank">Setup</a>
> 1. <span class="badge">15:05</span> <a
    href="https://drive.google.com/file/d/1oNuGHr8brGTq2tVF2uffubKId_WwyXjg/view?usp=sharing" target="_blank">Component
    organization</a>
> 1. <span class="badge">04:06</span> <a
    href="https://drive.google.com/file/d/1OZa3gyvA4RDPHf6dyYeJYtUiNv17DCRB/view?usp=sharing"
    target="_blank">Understanding the NavBar component</a>
> 1. <span class="badge">15:40</span> <a
    href="https://drive.google.com/file/d/16ExsaEYCIFRpyXP2PGE-hDNdz6wXuUd-/view?usp=sharing" target="_blank">Fetching
    Posts from the course API (via HTTP)</a>
> 1. <span class="badge">08:55</span> <a
    href="https://drive.google.com/file/d/1KtPaQGmGhK4chtDCeGHmqZBs4vK9HUY2/view?usp=sharing" target="_blank">Creating a
    Post component</a>
> 1. <span class="badge">17:03</span> <a
    href="https://drive.google.com/file/d/1Ncr0Ib2Tu3W4ABlmVIpq-l4-ckhs2JjS/view?usp=sharing" target="_blank">Enhancing
    the Post component</a>
> 1. <span class="badge">12:15</span> <a
    href="https://drive.google.com/file/d/1jG9MsvgXaI925155w4Uij6_nrdAZ_Ie6/view?usp=sharing" target="_blank">Like &
    Bookmark Buttons</a>
> 1. <span class="badge">17:42</span> <a
    href="https://drive.google.com/file/d/1Iy6hFu1Fvtxr7XlfTSTvXqhr8ET3coKK/view?usp=sharing" target="_blank">Creating &
    Deleting Bookmarks on the course API (via HTTP)</a>
> 1. <span class="badge">12:30</span> <a
    href="https://drive.google.com/file/d/18J3C3edGYx2zhczGX4kMiES0y5QMyCeN/view?usp=sharing" target="_blank">Redrawing
    the Post after a state change</a>
> 1. <span class="badge">02:52</span> <a
    href="https://drive.google.com/file/d/1QKKNAmBf7OZKAzztyTNITU38x_HGxAJK/view?usp=sharing"
    target="_blank">Transpiling and linking to your home page</a>
>
> The folder of videos can also be found <a
    href="https://drive.google.com/drive/folders/16N0oCD_qvo9F5ZcBqFht1Y2JSoYts17H?usp=drive_link"
    target="_blank">here</a>.
>
> **Note:** To fully complete Homework 4, you will have to implement **stories**, **profile**, and **suggestions** on your own as well as **liking / unliking posts**.


## Overview
In this tutorial, we will be getting started on some concepts that should help you in [Homework 4](hw04). Your job is to finish a subset of the homework assignment (just like in Tutorial 8). To get full credit for this assignment you will ensure that the following features are implemented:


| | Description of Task |
|--|--|
| [ ] | The `Posts Panel` is mostly rendered from API data (image, caption, username, likes, etc.), even if comments and likes are not finished yet. |
| [ ] | Clicking the bookmark icon of an unbookmarked post issues a `POST` request to `/api/bookmarks/`. |
| [ ] | After bookmarking a post, the component automatically redraws with the filled bookmark icon. | [1.4.4](hw03#bookmark-button-display) |
| [ ] | Clicking the bookmark icon of a bookmarked post issues a `DELETE` request to `/api/bookmarks/<id>`. |
| [ ] | After unbookmarking a post, the component automatically redraws with the hollow bookmark icon. |

If you collaborated with someone, please list your partner's name in the comments section.

