---
title: "JavaScript: Event Handlers"
type: "tutorial"
num: 5
draft: 0
assigned_date: "2026-02-20"
due_date: "2026-02-23"
heading_max_level: 3
order: 5
points: 6
---
<style>
blockquote table code {
    background: transparent;
    font-weight: 600;
}
blockquote table th {
    background: transparent;
}
</style>

## Overview
This tutorial series focuses on **DOM manipulation**: selecting elements, changing classes, and updating behavior when users click buttons.

## 1. Download Starter Files
<a href="/spring2026/course-files/tutorials/tutorial05.zip" class="nu-button">Download Tutorial 5 <i class="fas fa-download"></i></a>

After downloading and unzipping, move the `tutorials` folder into your `csci344/tutorials` folder.

## 2. Complete the 4 parts of the Tutorial

You will complete Tutorial 5 in four short parts:

1. [Tutorial 5A: Theme Switcher](/spring2026/assignments/tutorial05a) (starter code provided)
2. [Tutorial 5B: Hamburger Menu](/spring2026/assignments/tutorial05b) (build from scratch)
3. [Tutorial 5C: Carousel](/spring2026/assignments/tutorial05c) (starter code provided)
4. [Tutorial 5D: Todo List](/spring2026/assignments/tutorial05d) (build from scratch)

Please see the [JavaScript Cheatsheet](/spring2026/resources/js-dom-cheatsheet) for syntax help and examples.


## What to Submit
After completing all four sub-tutorials (5A, 5B, 5C, and 5D), please:

1. Create links from your homepage to each Tutorial 5 page.
2. Commit and push your changes to GitHub.
3. Submit both:
   - your GitHub repository link
   - your GitHub Pages link

If you collaborated with someone, include your partner's name in your submission comments.

> ## Summary of JavaScript DOM Functions Used
> 
> Here's a summary of the JavaScript DOM methods and techniques used across all four tutorials:
> 
> | Method / Property | Tutorial | Purpose & Example |
> |------------------|----------|-------------------|
> | `document.querySelector()` | 5A, 5B, 5D | Select a single element by CSS selector<br>`document.querySelector('#nav-links')` |
> | `document.querySelectorAll()` | 5C | Select multiple elements by CSS selector<br>`document.querySelectorAll('.carousel-item')` |
> | `element.classList.add()` | 5A | Add one or more classes<br>`element.classList.add('active')` |
> | `element.classList.remove()` | 5A | Remove one or more classes<br>`element.classList.remove('active')` |
> | `element.classList.toggle()` | 5A, 5B | Toggle a class (add if missing, remove if present)<br>`element.classList.toggle('active')` |
> | `element.classList.contains()` | 5A | Check if element has a class<br>`element.classList.contains('active')` |
> | `element.classList.replace()` | 5A | Replace one class with another<br>`element.classList.replace('old', 'new')` |
> | `element.value` | 5D | Get or set the value of an input element<br>`input.value` or `input.value = ''` |
> | `element.insertAdjacentHTML()` | 5D | Insert HTML at a specific position<br>`list.insertAdjacentHTML('beforeend', '<li>Item</li>')` |
> | `element.style.transform` | 5C | Set CSS transform property<br>`item.style.transform = 'translateX(-400px)'` |
> | `onclick` attribute | 5A, 5B, 5D | Attach click event handler in HTML<br>`<button onclick="functionName()">` |

## Completion Checklist

- [ ] Completed Tutorial 5A: Theme Switcher
- [ ] Completed Tutorial 5B: Hamburger Menu
- [ ] Completed Tutorial 5C: Carousel
- [ ] Completed Tutorial 5D: Todo List
- [ ] Created links from homepage to each Tutorial 5 page
- [ ] Committed and pushed changes to GitHub
- [ ] Submitted GitHub repository and GitHub Pages link (same as always)
