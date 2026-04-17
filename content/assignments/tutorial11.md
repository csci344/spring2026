---
title: "Create Your Own Backend"
type: "tutorial"
num: 11
draft: 0
assigned_date: "2026-04-17"
due_date: "2026-04-20"
heading_max_level: 3
order: 11
points: 6
---

This tutorial walks through the **API Generator** that you will be using for your final project. The generator is designed so that you:
1. Describe resources in `api.config.yaml`,
2. Run `npm run generate`, and 
3. Get a SQLite-backed REST API with docs and a small data grid UI.

Please consult the [API Generator cheatsheet](/spring2026/resources/rest-api-cheatsheet) for more information.

{% collapsible closed %}
## 1. Setup

1. Create a folder named **`tutorial11`** inside your **`csci344/tutorials`** folder (adjust if your course uses a different layout).
2. **Download** the API generator starter here: [https://github.com/csci344/api-generator/archive/refs/heads/main.zip](https://github.com/csci344/api-generator/archive/refs/heads/main.zip)
3. **Unzip** the archive and **move** the unzipped project folder **inside** `tutorial11`. You might see a name like `api-generator-main` — that is your project root (feel free to rename it).
4. Open your `csci344` folder in VS Code
5. Open your `api-generator-main` folder **integrated terminal** and run (one at a time):

   ```bash
   npm install
   npm run validate
   npm run generate
   npm run seed
   npm run dev
   ```

   When the CLI asks to confirm destructive steps, type `yes` or add **`--yes`** to the command.

6. In the terminal, note the **URL** (often `http://localhost:3100`). Keep the server running for the tasks below.

> ### What just happened?
> 
> - `npm run validate`
>   - checks that your `api.config.yaml` is valid
> 
> - `npm run generate`
>   - builds / rebuilds the backend code from `api.config.yaml`
>   - creates / recreates the SQLite database schema
>   - writes the database file to `data/app.db`
>   - generates sample CSV files in `data/sample-data/`
> 
> - (Optional) Run `npm run seed`
>   - reads the CSV files in `data/sample-data/`
>   - inserts sample data into the SQLite database
> 
> - `npm run dev`
>   - starts the Express server
>   - serves your REST API (JSON endpoints)
>   - provides interactive API docs at `/api/docs`
>   - connects everything to your local database


{% collapsible closed %}
## 2. Understanding the database

1. In VS Code, install an extension that can open SQLite files. I recommend **SQLite Viewer** (search the Extensions marketplace for “SQLite”).
2. Open the database file **`data/app.db`** 
3. **Explore** the tables. Compare what you see to the resources listed in **`api.config.yaml`** at the project root.

<!-- .info -->
> ### Short Answer
> Please create a file inside of your `tutorial11` directory called `answers.txt`. Then, answer the following questions (and the subsequent questions latter in this tutorial):
> 
> 1. Name **three** tables that correspond to the **Resource types** that are defined in `api.config.yaml`. Which table is **not** defined by your YAML but still exists? (Hint: accounts.)
> 2. Pick one resource table (e.g. `sneakers`). Which columns look like they are referencing data in other tables (this is called a "foreign key")?
> 3. What looks different between the required and optional fields in the database?

{% collapsible closed %}
## 3. How seed works and editing the generated CSVs

When you run **`npm run generate`**, the script writes sample data as CSV files under **`data/sample-data/`**. Those rows are **not** in the database until you run **`npm run seed`** (this tutorial uses **`npm run seed -- --yes`** when the CLI asks for confirmation).

Install the **Edit CSV** extension in VS Code, open the CSVs in **`data/sample-data/`**, and change the sample values so the data fits a **sneaker store** (for example, rename brands or products to sneakers instead of the generic placeholders). Save your files, then run **`npm run seed -- --yes`**.

> If you want to link to custom images, there are some located in `public/student/images/sneakers`. 
> - A valid sample URL path that you could use is: `/student/images/sneakers/snearker_0_0.png`. 
> - Feel free to copy other images to the `public/student/images` folder.

If you change **`api.config.yaml`**, run **`npm run generate`** again before **`npm run seed`** so the database and CSV templates match your resources.


### 3.1. Try it: “Edit CSV” in VS Code

1. In **`data/sample-data/`**, pick a small CSV (for example **`brands.csv`**, or another resource from your `api.config.yaml`). Change at least one cell to something sneaker-themed and **save** the file.

2. In the terminal, run:

   ```bash
   npm run seed -- --yes
   ```

   If you get SQL errors about duplicate keys or constraint failures, run **`npm run generate -- --yes`** once to reset the database and templates, put your sneaker-themed edits back into the new CSVs if they were archived, then **`npm run seed -- --yes`** again.

3. Confirm the change in the database (SQLite Viewer on **`data/app.db`**) or in **`/spreadsheet`** after reloading data.

<!-- .info -->
> ### Short Answer
> Answer in your `tutorial11/answers.txt` file:
> 
> 4. In one sentence: what is the difference between changing data with **`npm run seed`** and changing data only through the **REST API** or **data grid**?
> 5. Why should you run **`npm run generate`** again **before** **`npm run seed`** if you just edited **`api.config.yaml`**?

{% collapsible closed %}
## 4. Edit data in the data grid

1. With the server running, open a browser to <a href="http://localhost:3100/spreadsheet" target="_blank" rel="noopener noreferrer">http://localhost:3100/spreadsheet</a>. The home page at `/` also links to this UI (e.g. <code>/spreadsheet</code>).
2. Log in using **`admin`** / **`password`**
3. Choose a resource, load rows, and **change** at least one cell (or add a row, then save). Refresh the page or reload the list to confirm your change persisted.
4. If the spreadsheet shows **filters** or **search** for that resource, try changing them a few times. Watch the **address bar** or your browser’s **Network** tab: notice how the **URL for the list request** changes (for example, the path may stay the same while **query parameters** after `?` appear, change, or disappear). 

<!-- .info -->
> ### Short Answer
> Answer in your `tutorial11/answers.txt` file:
>
> 6. How did the list request URL change when you applied the filter(s)? (Mention the path, any new or removed query parameters, or if only the Network tab showed a change.)
> 7. Suppose your Sneakers API endpoint is `/api/sneakers` and `name` is marked queryable in `api.config.yaml`. What URL would you use for a `GET` request that asks the server for sneakers whose `name` includes the substring `running`?

{% collapsible closed %}
## 5. Interactive API docs (Swagger)

1. Open **`/api/docs`** on the same origin as your server.
2. Use **`POST /auth/login`** with **`admin`** / **`password`**, copy the **`token`** from the response.
3. Click **Authorize**, paste **`Bearer <token>`** (include the word `Bearer` and a space before the token if the UI expects the full scheme — follow what your docs UI shows).
4. Try at least **two** generated routes: for example **list** a public collection and **create** a row on a route that requires a logged-in user.

<!-- .info -->
> ### Short Answer
> Answer in your `tutorial11/answers.txt` file:
> 
> 8. What is one difference between experimenting in **`/api/docs`** and experimenting in the **data grid**?


{% collapsible closed %}
## 6. Swap in the “campus trees” API

You will replace the stock `api.config.yaml` with a **pre-written** config about **plants** (each with latitude, longitude, and optional notes) and **comments** on campus fruit trees.

First, **Backup** your current config (optional but good practice):

```bash
cp api.config.yaml api.config.backup.yaml
```

Next, replace your current `api.config.yaml` with the following structure:

```yaml
# Sample API: campus fruit trees and bushes
# Copy this file to the project root as api.config.yaml (backup the default first if you want).

resources:

  - type: Plant
    path: /api/plants
    operations: [list, retrieve, create, update, delete]
    fields:
      - name: name
        type: string
        required: true
        query: true
      - name: image_url
        type: image_url
        required: true
        query: true
      - name: species
        type: string
        required: true
        query: true
      - name: planted_year
        type: integer
      - name: latitude
        type: number
        required: true
      - name: longitude
        type: number
        required: true
      - name: notes
        type: text
    permissions:
      list: public
      retrieve: public
      create: user
      update: owner
      delete: owner

  - type: Comment
    path: /api/comments
    operations: [list, retrieve, create, update, delete]
    fields:
      - name: body
        type: text
        required: true
      - name: plant
        type: Plant
        required: true
        query: true
    permissions:
      list: public
      retrieve: public
      create: user
      update: owner
      delete: owner
 ```
   
Rebuild your API and generate new fake data:

```bash
npm run validate
npm run generate -- --yes
npm run seed -- --yes
```

Restart **`npm run dev`** if the server was stopped. Feel free to edit your fake data spreadsheets (and then rerun `npm run seed` to insert it into your API).

When you're done, open **`/api/docs`** again and confirm you see paths like **`/api/plants`** and **`/api/comments`**.

{% collapsible closed %}
## 7. Add a `PlantType` relation (manual edit + regenerate)

Right now **`species`** is a free-text string. You will introduce a **`PlantType`** resource and link each **Plant** to a **plant type** so names stay consistent (e.g. “Apple”, “Pear”, “Fig”).

Do this **by hand** in `api.config.yaml` (do not copy the answer file until you have tried):

1. Add a new resource **`PlantType`** with at least:
   - `type: PlantType`, `path: /api/plant-types`, full CRUD `operations`
   - Fields: e.g. **`name`** (`string`, `required`, `query: true`) and **`description`** (`text`)
   - **`permissions`** blocks similar to **`Plant`** (public list/retrieve, user create, owner update/delete is fine)

2. **Order matters:** put **`PlantType`** in the **`resources:`** list **before** **`Plant`** so it is easy to reason about dependencies (the generator will also order seed files correctly).

3. On **`Plant`**, **remove** the **`species`** field and add a relation field, for example:

   - `name: plant_type`
   - `type: PlantType`
   - `required: true`
   - `query: true` (optional but useful)

4. Run **`npm run validate`**. Fix YAML errors until it passes.

5. Run **`npm run generate -- --yes`** and **`npm run seed -- --yes`**.

6. In **`/api/docs`**, create a few **PlantType** rows (POST requests), then create a **Plant** that references one of those ids as **`plant_type`**.


<!-- .info -->
> ### Short Answer
> Answer in your `tutorial11/answers.txt` file:
> 
> 9. What is one advantage of introducing a separate **`PlantType`** resource (with a relation from **`Plant`**) instead of keeping **`species`** as a plain string on every plant row?

{% collapsible closed %}
## 8. Reflection and your project

<!-- .info -->
> ### Short Answer
> Answer in your `tutorial11/answers.txt` file:
> 
> 10. **Final project:** List **at least three** REST **paths** you expect to need for your final project (they can be placeholders like `/api/...`). For each, name:
>       1. The **resource**
>       1. the **data fields** you'll need
>       1. Which fields will be queryable
>       1. One **relationship** you might add (e.g., Sneakers are linked a Brand resource in another table)

{% collapsible %}
## Completion Checklist and Submission
To submit this tutorial, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository in the Moodle submission for Tutorial 11. Please ensure that you have completed all of the required tasks:

- [ ] Completed the exercises
- [ ] Regenerate the API with the trees & bushes structure
- [ ] Added the PlantType Resource and relationship
- [ ] Answered the 10 short-answer questions in `answers.txt`  (all of the green boxes)
- [ ] Committed and pushed changes to GitHub
- [ ] Submitted GitHub repository
