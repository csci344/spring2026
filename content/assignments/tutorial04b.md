---
title: "Instagram High-Fidelity Design & Style Guide in Figma"
type: "tutorial"
num: 4b
draft: 0
assigned_date: "2026-02-11"
due_date: "2026-02-18"
heading_max_level: 3
order: 5
points: 6
---

## Overview
Now that you've created your low-fidelity prototype, you are going to practice creating a "high-fidelity" prototype. In practice, high-fidelity prototypes serve two purposes:

1. They provide a way for designers to give instructions to developers: "This is what you need to build."
1. They can also be used to generate "design tokens" -- which are JSON files that can generate style variables for CSS and other native styling languages.

In this activity, you will complete three tasks (inspired by <a href="https://www.youtube.com/watch?v=oHTaB7aT7XU" target="_blank">this video tutorial</a>):

1. Create a high-fidelity prototype
1. Create Figma Styles
1. Generate a style guide using a Figma plugin


> ### Tips
> 
> - **Design first, extract later** - Focus on making your design look good, then extract the styles
> - **Use consistent colors** - This makes it easier to create styles later
> - **Keep it simple** - You don't need to recreate every detail of Instagram
> - **Reference Instagram (Optional)** - If you have an Instagram account, look at the real app for color and spacing ideas


## 1. Create a High-Fidelity Prototype

Transform your wireframe from Day 1 into a polished, high-fidelity design. Choose **either mobile OR desktop** (not both).

### 1.1. Open your wireframe on Figma
Open your wireframe file from Day 1 and select **either** the mobile (375px) **or** desktop (1200px) feed screen. 

### 1.2. Make a copy of your wireframe Frame
After selecting you preferred layout (mobile or desktop):

1. Make a copy of the the entire low-fidelity frame
2. Paste a duplicate to the left or right of the original frame.
3. Give your copy a different name in the left-hand navigator.
4. Begin converting it to a high-fidelity prototype.

Here is how Sarah laid our her Figma page:

<img class="large frame" src="/spring2026/images/tutorials/tutorial04/low-high-prototype.png" />

### 1.3. Add colors
- Use the **Eyedropper tool (I)** to sample colors from Instagram, or use the color picker
- Apply colors to backgrounds, text, and interactive elements
- Use Instagram's color palette: white, light gray, black/dark gray, blue (links), red (likes)

### 1.4. Add typography
- Set font sizes: 12px (captions), 14px (body), 16px (headings)
- Set font weights: Regular, Medium, Bold
- Use system fonts (Inter, sans-serif) for body copy and Comfortaa for the top-level headers.

### 1.5. Add visual polish
- Profile pictures: Make circles, add borders
- Icons: Use simple shapes or text symbols (heart, comment, share)
- Image placeholders: Add some real images.
- Consistent spacing (8px, 16px, 24px) between elements


## 2. Create Figma Styles

Now extract the colors and typography you used into Figma Styles. Styles are reusable design tokens that can be applied across your design.

> ### Video Walkthrough
> If you need a hint, I have recorded a <a href="https://drive.google.com/file/d/1V7XAOsmJnC7Up2Ah_sRYV1zyK6ljhSZj/view?usp=sharing" target="_blank">video walkthrough</a> to show you how to create the styles.

### 2.1. Create Color Styles:

1. **Select an element** that uses a color you want to save (e.g., a background rectangle, text element)

2. **Create a color style:**
   - In the right panel, click the **color swatch** (for fills) or **text color** (for text)
   - Click the **"+" icon** next to "Styles" (or the four-dot icon)
   - Name it (e.g., "Background", "Text Primary", "Accent Blue")
   - Click "Create style"

3. **Repeat for all your colors:**
   - Select different colored elements and save each as a style
   - Create styles for: Background, Text Primary, Text Secondary, Accent Blue, Accent Red, etc.
   - Create at least 3 color styles

### 2.2. Create Text Styles

1. **Select a text element** that has the typography you want to save

2. **Create a text style:**
   - In the right panel, click the **text style dropdown** (shows "None")
   - Click the **"+" icon**
   - Name it (e.g., "Body Text", "Body Text Bold", "Caption")
   - Click "Create style"

3. **Repeat for different text types:**
   - Select text elements with different sizes/weights and save each as a style
   - Create styles for: Body Text (14px, Regular), Body Text Bold (14px, Bold), Caption (12px, Regular)
   - Create at least 3 text styles

> **Tip:** Once created, you can apply styles to other elements by selecting them and choosing the style from the dropdown in the right panel.

Once you're done, you will be able to see the styles you create at the bottom of the right-hand panel (just make sure that no elements are selected). Your styles panel should look something like this:

<img class="border border-gray-300" style="max-width:300px;" src="/spring2026/images/tutorials/tutorial04/styles-panel.png" />

## 3. Generate Style Guide with Plugin

Use the "Automatic Style Guide" plugin to automatically generate a style guide from your design.

### 3.1. Install the Plugin:

1. In Figma, go to **Menu → Plugins → Browse plugins in Community**
2. Search for **"Automatic Style Guide"**
3. Click **"Install"** (or **"Run"** if already installed)

### 3.2. Use the Plugin:

1. **Run the plugin:**
   - Go to **Menu → Plugins → Automatic Style Guide**
   - The plugin will scan your design for colors, typography, and styles

2. **Generate the style guide:**
   - Follow the plugin's prompts
   - It will create a new frame or page with your style guide
   - The style guide will include:
     - Color palette
     - Typography system
     - Spacing (if detected)

3. **Review and organize:**
   - Check that all your colors and typography are captured
   - Add labels or descriptions if needed

Your style guide should look something like this (just a few screenshots):

<img class="large frame" src="/spring2026/images/tutorials/tutorial04/styleguide-colors.png" />


<img class="large frame" src="/spring2026/images/tutorials/tutorial04/styleguide-fonts.png" />


## Checklist

- [ ] High-fidelity prototype created (mobile OR desktop)
- [ ] At least 3 color styles created
- [ ] At least 3 text styles created
- [ ] Automatic Style Guide plugin installed and run
- [ ] Style guide generated and reviewed


## What to turn in
1. Update your Figma file permissions so that anyone with the link can view your Figma file.
2. Copy the link to Figma.
3. Create a link from your homepage to your Figma file (see <a href="https://vanwars.github.io/csci344" target="_blank">Sarah's homepage</a> for an example). 
4. Commit and push your edits to your homepage to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.
