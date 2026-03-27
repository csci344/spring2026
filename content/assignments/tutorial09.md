---
title: "React: Custom & Third-Party Components (Ant Design)"
type: "tutorial"
num: 9
draft: 0
assigned_date: "2026-03-27"
due_date: "2026-03-30"
heading_max_level: 3
order: 9
points: 6
---

> ## Introduction
>
> By the end of this tutorial, you should be able to do the following:
>
> 1. **Explain why components matter.** Describe how breaking the UI into reusable pieces (with props for different data) reduces duplication, keeps layout consistent, and makes it easier to reason about one small part of the screen at a time.
> 2. **Compare “build it yourself” vs. “use a design system.”** Give sensible **pros and cons**. For example:
>
>    * Custom components offer full control and no extra dependencies, but cost more time and accessibility polish
>    * Library components (such as Ant Design) speed you up and bundle patterns like spacing and keyboard support, but tie you to their API, bundle size, and update schedule.
> 3. **Choose a strategy for a simple screen.** For a given widget (card, gallery, form control), argue when you would start from scratch, when you would reach for a third-party component, and what you would trade off either way.

{% collapsible closed %}
## 1. Repeat Wednesday's React Setup
Open [React Activity](../activities/react-activity) and complete **Steps 2-4 again**, but do the coding work in a folder named `tutorial09`.

Use this folder location:

```bash
csci344/tutorials/tutorial09
```

By the time you finish this part, you should have:

- [ ] Working React/Vite app
- [ ] `index.html` file
- [ ] `src` folder
- [ ] `App.jsx` file
- [ ] `main.jsx` file
- [ ] Dev server running with `npm run dev`

{% collapsible closed %}
## 2. Build a `Card` component from scratch

Build a **custom** React component (no Ant Design yet) called `Card`.

It must accept at least **three props**:

- `name` — text title for the card  
- `image_url` — URL string for the image  
- `description` — short text body  

**What to do**

1. Add a `components` folder under `src` if you do not have one yet.
2. Create `Card.jsx` and `Card.css` in the `components` directory.
3. In `Card.jsx`, render at least: an `<img>` (use `image_url` and `name` for `alt`), a heading for `name`, and a paragraph (or similar) for `description`.

    ```jsx
    import React from "react";
    import "./Card.css";

    export default function Card({ name, image_url, description }) {
      return (
        <section className="card">
            <h2>{name}</h2>
            {/* add remaining HTML tags + data  */}
        </section>
      );
    }
    ```
4. Style it in `Card.css` so it clearly looks like a card (border or shadow, spacing, readable type).
5. In `App.jsx`, import `Card` and render **at least two** cards with **different** prop values, for example:

    ```jsx
    <Card
      name="Sample item"
      image_url="https://picsum.photos/id/237/400/300"
      description="A short description goes here."
    />
    ```

    You can also put a few objects in an array and use `.map(...)`; if you do, give each list item a stable `key`.

{% collapsible closed %}
## 3. Install Ant Design (`antd`)

1. Stop the dev server (Ctrl+C in the terminal).
2. Install Ant Design:

    ```bash
    npm install antd
    ```

3. Load Ant Design’s styles once in your entry file (usually `main.jsx`), **above** your other imports that render UI:

    ```jsx
    import "antd/dist/reset.css";
    ```

4. Open the Ant Design docs for the **Image** component:  
   <a href="https://ant.design/components/image" target="_blank" rel="noopener noreferrer">ant.design/components/image</a>

5. On that page, find a **basic example** (often the first demo). Copy the **import** line for `Image` from the example (or from the code snippet the docs show).

6. Paste that import at the **top** of `App.jsx`, with your other imports (for example below `import React ...` and above your `Card` import).

7. Copy the **JSX** for the `Image` widget from the same example (the part that looks like `<Image ... />` or a small group of images).

8. Paste that JSX **inside** the `return (...)` of your `App` component (usually inside `<main>` or a wrapper) so it appears on the page when you run the app.

9. Adjust `src` or `width` if you want your own photo URLs. Then, save and run `npm run dev` and confirm the Ant Design image renders.

This step is practice reading official docs, placing imports in the right file, and placing components in valid JSX.

{% collapsible closed %}
## 4. Create `AntCard.jsx`

Add a second component, **`AntCard.jsx`**, that shows the **same three pieces of information** as your custom `Card`, but built with Ant Design’s **`Card`** component.

1. Create `src/components/AntCard.jsx`.
2. Import `Card` from `antd` (and anything else you need from `antd` for layout).
3. Give `AntCard` the **same props** as your custom card: `name`, `image_url`, `description`.
4. Map them into Ant Design’s API in a sensible way, for example:
   - use Ant Design’s `cover` prop (or `Card`’s body) for the image  
   - use `title={name}` or a heading inside the card for the name  
   - put `description` in the card body  
5. In `App.jsx`, render at least one `<AntCard ... />` next to (or below) your custom `<Card />` so you can compare the two.

> ### What to Think About
>
> When you compare your custom `Card` and your `AntCard`, ask yourself:
>
> 1. **Speed:** Which one was faster to build?
> 2. **Control:** Which one gave you more freedom to style exactly what you wanted?
> 3. **Complexity:** Which one required more code and more decisions?
> 4. **Consistency:** Which one made it easier to keep spacing, typography, and layout consistent?

{% collapsible closed %}
## 5. Try at least two more `antd` components

Beyond the **`Image`** from section 3 and the **`Card`** inside `AntCard.jsx`, add **at least two other** distinct `antd` components somewhere in your app (for example a `Button`, `Tag`, `Space`, `Typography`, `Carousel`, `Drawer`, etc.).

Skim the [Ant Design components list](https://ant.design/components/overview/) and wire up anything that fits your page.

**Requirement:** Your finished app should use **at least four different** `antd` component types: **`Image`** (section 3), **`Card`** inside `AntCard.jsx` (section 4), and **two** others you add in this section (for example `Button` and `Tag`).

| Idea | Link |
|--|--|
| Carousel | <a href="https://ant.design/components/carousel" target="_blank">Carousel</a> |
| Time Picker | <a href="https://ant.design/components/time-picker" target="_blank">Time Picker</a> |
| Drawer | <a href="https://ant.design/components/drawer" target="_blank">Drawer</a> |
| Calendar | <a href="https://ant.design/components/calendar" target="_blank">Calendar</a> |
| Collapse | <a href="https://ant.design/components/collapse" target="_blank">Collapse</a> |
| Tour | <a href="https://ant.design/components/tour" target="_blank">Tour</a> |

## What to Submit (Please Read Carefully)
First, ensure that you have completed the tutorial requirements:

- [ ] Created a custom `Card` component that uses `name`, `image_url`, and `description` props.
- [ ] Rendered at least two custom `<Card />` components with different data.
- [ ] Installed `antd` and added `import "antd/dist/reset.css";` in `main.jsx`.
- [ ] Copied an Ant Design `Image` example and rendered it in `App.jsx`.
- [ ] Created `AntCard.jsx` using Ant Design's `Card` component with the same three props.
- [ ] Rendered at least one `<AntCard />` in `App.jsx`.
- [ ] Added at least two additional `antd` component types (beyond `Image` and `Card`).
- [ ] Bundled my final react app and added a link from my homepage to `tutorial09/dist/index.html` (see below)

Remember that your Browser doesn't understand React because it uses some language features that aren't HTML, CSS, or JavaScript. **We therefore need to "transpile" our code so that it can be displayed on our GitHub server.** To do this:

1. Navigate to your `tutorial09` folder on the command line and run the following:<br> `npm run build`. 
    * This should transpile your code in a folder called `dist`.  
1. Next, make sure you link to the compiled version of your code (`tutorial09/dist/index.html`) from your homepage.

To submit this tutorial, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission for Tutorial 9.
