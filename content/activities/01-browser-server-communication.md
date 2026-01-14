---
title: "Analyzing Browser–Server Communication"
type: "activity"
due_date: "2026-01-14"
start_date: "2026-01-14"
excluded: 0
draft: 0
---


## 1. Network Panel

1. Open a web browser (Chrome recommended).
2. Navigate to: https://www.cnn.com/
3. Right-click on the page and select **Inspect**.
4. Navigate to the **Network** panel (tab).
5. Right-click on one of the column headers (e.g., *Name*).  
   When the context menu appears, ensure that **Domain** and **Method** are both checked.
6. Turn **off** your ad blocker (if you have one).
7. Reload the page.

### Questions (Answer for yourself)

- Approximately how many resources did your browser download?
- How many **different servers (domains)** did your browser communicate with?
- How many of those requests were **POST** requests (i.e., data sent from the browser to a server)?
- Based on what you see, how many companies appear to have some presence on this page (besides CNN)?
- What surprised you most?

**Optional:**  
If you use an ad blocker, turn it back on and reload the page. What changes?


## 2. Cookies and Client-Side Storage

1. Navigate to the **Application** panel (tab).
2. In the left-hand panel, scroll to the **Storage** section.
3. Expand each of the following, one at a time:
   - **Local Storage**
   - **Session Storage**
   - **Cookies**
4. For each category, observe:
   - How many items are stored?
   - How many different domain names appear?
5. Delete all stored items.

**Optional:**  
Turn your ad blocker back on and reload the page. What changes?


## Discussion Questions

Discuss with your group:

- When you load a single webpage, who are you *actually* interacting with?
- Which of these network requests feel necessary for the site to function, and which feel optional?
- What assumptions does this site make about user consent, awareness, or attention?
- How do business models (advertising, analytics, personalization) shape what you observed?
- How might this experience differ for users with different levels of technical literacy, resources, or legal protections?
- After doing this activity, does the phrase “free website” still feel accurate?
