---
title: "Exam 1 (Paper)"
type: "assessment"
draft: 0
---

Name: ________________________________________________   Date: ___________________

## Instructions

- Time limit: **70 minutes**
- **Closed notes / closed internet / no computer**. This exam is completed **on paper**.
- Unless a question says otherwise, assume standard HTML5 and CSS3.
- Write clearly. If you change an answer, cross it out and write the new one.
- Point values are shown. Total: **100 points**.

---

## Q1. Web & Internet Basics (10 points)

Answer in 1–3 sentences each.

1) What is **DNS** used for, and when does a browser typically need it? (3 pts)



2) In one sentence: what is the difference between **HTTP** and **HTTPS**? (3 pts)



3) Put these in the correct order for loading `https://example.com/`: **TCP/TLS connection**, **DNS lookup**, **HTTP request**, **HTML response**. (4 pts)

Order: _________________________________________________________________

---

## Q2. HTML Structure + Semantics (15 points)

Write the HTML (no CSS) for a simple page with semantic structure.

Requirements:
- Use `<!doctype html>`, `html`, `head`, and `body` (2 pts)
- Add a page title of “PhotoApp” in the `head` (2 pts)
- In the `body`, include: `header`, `nav`, `main`, `footer` (4 pts)
- In `nav`, include an unordered list of 3 links: Home (`/`), Explore (`/explore`), Profile (`/profile`) (4 pts)
- In `main`, include one `article` with:
  - `h1`: “Explore”
  - a short paragraph (your text)
  - one image with **meaningful alt text** (3 pts)

Write your code here:

```html

```

---

## Q3. HTML Forms + Accessibility (15 points)

Write the HTML for a login form.

Requirements:
- Use a `form` element with `method="post"` and `action="/login"` (3 pts)
- Include **labeled** inputs for email and password (use `label` + `for` + matching `id`) (6 pts)
- Use appropriate `type` values (`email`, `password`) (2 pts)
- Add `required` to both inputs (2 pts)
- Add a submit button that says “Log In” (2 pts)

Write your code here:

```html

```

---

## Q4. CSS Selectors + Specificity (15 points)

Given this HTML:

```html
<main>
  <article class="post featured">
    <h2 id="title">Hello</h2>
    <p class="caption">Nice day</p>
    <a class="link" href="/x">Read more</a>
  </article>
</main>
```

1) Write a selector that selects **only** the `p` with class `caption`. (3 pts)

Selector: _______________________________________________________________

2) Write a selector that selects the `a` only **when hovered**. (3 pts)

Selector: _______________________________________________________________

3) Write a selector that selects elements that have **both** `post` and `featured` classes. (4 pts)

Selector: _______________________________________________________________

4) Which selector is **more specific**? Circle one, then briefly explain why. (5 pts)

`#title`   OR   `.post h2`

Explanation:



---

## Q5. CSS Box Model + `box-sizing` (15 points)

Consider this CSS:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

1) If `box-sizing` is the default (`content-box`), what is the **total rendered width** of `.card` (content + padding + border)? (5 pts)

Answer: ______________________ px

2) If we add this rule:

```css
.card { box-sizing: border-box; }
```

What is the **content width** now? (5 pts)

Answer: ______________________ px

3) Does `margin` affect the element’s computed width? Yes/No, and explain in 1 sentence. (5 pts)

Answer: ______________________

Explanation:



---

## Q6. Responsive Layout (CSS) (20 points)

You are given this HTML:

```html
<div class="layout">
  <aside class="sidebar">Sidebar</aside>
  <main class="content">Content</main>
</div>
```

Write CSS to satisfy all requirements:
- On screens **900px and wider**, show sidebar and content in **two columns**:
  - sidebar: 300px wide
  - content: takes the remaining space (12 pts)
- On screens **below 900px**, stack them in **one column** (sidebar above content) (6 pts)
- Add a **16px gap** between sidebar and content (2 pts)

Write your code here (use either Flexbox or Grid):

```css

```

---

## Q7. Design + Accessibility (10 points)

Short answer.

1) Name the four design principles we discussed (PARC). (4 pts)

Answer: ________________________________________________________________

2) Give **two** concrete ways to improve accessibility on a webpage. (Examples: semantic HTML, alt text, keyboard navigation, color contrast, form labels.) (6 pts)

- ______________________________________________________________________
- ______________________________________________________________________

---

## Extra scratch space


