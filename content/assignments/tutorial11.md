---
title: "Create Your Own Backend"
type: "tutorial"
num: 11
draft: 1
assigned_date: "2026-04-17"
due_date: "2026-04-17"
heading_max_level: 3
order: 11
points: 6
---

> ## Overview
>
> In this tutorial, you’ll use a tool created by Sarah — the api-generator — to start exploring what it takes to design an API and backend system. You’ll dive deeper into these ideas in Software Engineering (CSCI 338), but this is an important early introduction. Understanding how frontends communicate with backends is a core concept in web development, and this activity will give you a first look at how those pieces fit together.
>
> By the end of this tutorial, you should be able to:
>
> 1. Explain, in simple terms, what a **backend** is
> 2. Explain what **Express** is doing in this project
> 3. Explain why we use a **database**
> 4. Run the basic backend workflow:
>    - `npm install`
>    - `npm run validate`
>    - `npm run generate`
>    - `npm start`
> 5. Open `/api/docs` and test the generated API
> 6. Make one small change to `api.config.yaml` and confirm that it appears in the docs

{% collapsible closed %}
## 1. What is a backend?

When we build a web app, there are usually **two sides**: the **frontend**: what the user sees and interacts with, and the **backend**: the code running on a server. 

So far, you’ve been focused on **frontend** programming -- building layouts, handling user interactions, and using `fetch` to create, retrieve, and delete data from the PhotoApp API. But where does that data actually come from?

That’s the job of the **backend**, another core part of web development. The backend is responsible for things like:

1. Receiving requests  
1. Sending responses  
1. Storing data  
1. Handling login/authentication  
1. Deciding what data a user is allowed to access  

When your frontend code calls `fetch(...)`, the **backend** is what receives that request and decides what happens next.

Backends are also a bit “special” compared to frontends. A backend server needs to be **constantly running**, listening for incoming traffic and responding to requests at any time. Because of this, we can’t deploy a backend the same way we deploy a frontend (e.g., on GitHub Pages). Instead, backends require server infrastructure that can stay online, handle requests, and manage resources -- things you can explore as extra credit extensions in this course.

{% collapsible closed %}
## 2. What is Express?

**Express** is a Node.js library for building web servers.

It helps us:

- listen for requests
- create routes such as `/auth/login` or `/api/books`
- send JSON back to the client

You do **not** need to become an Express expert in this tutorial.

The main idea is:

- Express is the server tool
- The API Generator (that Sarah made) helps create the backend code that Express will run

{% collapsible closed %}
## 3. Why do we need a database?

If data only lives in JavaScript variables, it disappears when the server stops.

A **database** lets the app store data so it can be used later.

In this project, the database is **SQLite**, and the local database file is stored here: `data/app.db`

This means your app can store things like users, books, and genres and that storage will persist over time.

> **Tips**:
> - `npm run generate` will create / recreate the database. 
> - Keep in mind that running this command will **delete existing local data** (it's like resetting your database with a new structure and clearing out the data).

{% collapsible closed %}
## 4. Before You Start

Download the `api-generator` and save it to a folder called `final-project`. Your file system structure should look something like this...


Important files include:

- `api.config.yaml` = where you describe your API
- `generated/` = generated backend files
- `data/app.db` = local SQLite database
- `README.md` = some instructions for how to use the **api-generator**.

In this starter project, the config already includes two resources for a "Bookstore" app -- `genres` and `books`. It also includes built-in authentication routes such as:

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

{% collapsible closed %}
## 5. Look at the API Config

Open `api.config.yaml`.

Spend a minute looking for these ideas:

1. resource names
2. paths
3. fields
4. operations
5. auth rules

You should notice:

- `genres` uses `/api/genres`
- `books` uses `/api/books`
- `books` has fields such as `title`, `description`, `author`, `in_stock`, and `price`

{% collapsible closed %}
## 6. Install the Packages

Run this in the `api-generator` folder:

```bash
npm install
```

This installs the packages the project needs.

{% collapsible closed %}
## 7. Validate the Config

Run:

```bash
npm run validate
```

This checks whether your `api.config.yaml` file is valid.

It checks things like:

- YAML syntax
- field types
- operation names
- auth rule names
- relations between resources

If this step works, you know your config is in good shape.

{% collapsible closed %}
## 8. Generate the Backend

Run:

```bash
npm run generate
```

This does two important things:

1. generates backend files
2. recreates the database

After this step, the generated code should match your YAML config.

{% collapsible closed %}
### Need help understanding "generate"?

In this project, you are **not** writing every backend route by hand.

Instead:

1. you describe the API in `api.config.yaml`
2. the generator creates the backend code for you

So the YAML file is the main source of truth.

{% collapsible closed %}
### Why did my data disappear?

`npm run generate` recreates `data/app.db`.

That means old local data is deleted.

This is normal for this starter project.

{% collapsible closed %}
## 9. Start the Server

Run:

```bash
npm start
```

If the server starts correctly, open this URL in your browser:

```text
http://localhost:3100/api/docs
```

This page shows interactive API docs.

Use this page as your main testing tool.

{% collapsible closed %}
### What is the difference between `/auth/...` and `/api/...`?

- `/auth/...` routes are for logging in and checking who the user is
- `/api/...` routes are for your app's resources such as books or genres

Examples:

- `/auth/register`
- `/auth/login`
- `/auth/me`
- `/api/books`
- `/api/genres`

{% collapsible closed %}
## 10. Try the Built-In Auth Flow

In `/api/docs`, test these routes:

1. `POST /auth/register`
2. `POST /auth/login`
3. `GET /auth/me`

Suggested test user:

- username: `student1`
- password: `password`

After login, copy the token if the docs show one.

Then use the **Authorize** button in the docs so you can test protected routes.

{% collapsible closed %}
## 11. Try One Generated Resource

Still in `/api/docs`, inspect these generated routes:

- `/api/genres`
- `/api/books`

Try at least one request.

Good choices:

- list genres
- create a book
- list books

If a route needs authorization, use the token from the login step.

{% collapsible closed %}
## 12. Make One Small Change

Now make one very small change to `api.config.yaml`.

Inside the `books` resource, add this field:

```yaml
      - name: year_published
        type: integer
```

Add it in the `fields` list under the other book fields.

Then also add `year_published` to the `summary` and `detail` view field lists.

After you save the file, run these commands again:

```bash
npm run validate
npm run generate
npm start
```

Then refresh `/api/docs`.

Confirm that `year_published` now appears in the book schema.

{% collapsible closed %}
### Why are we doing this step?

This is the most important idea in the tutorial:

- you change the YAML
- you regenerate the backend
- the API changes

That is the core workflow of this project.

## 13. Tutorial Checklist

Before you finish, make sure you can say yes to all of these:

- [ ] I can explain what a backend is.
- [ ] I can explain what Express is doing in this project.
- [ ] I can explain why this project uses a database.
- [ ] I ran `npm install`.
- [ ] I ran `npm run validate`.
- [ ] I ran `npm run generate`.
- [ ] I ran `npm start`.
- [ ] I opened `http://localhost:3100/api/docs`.
- [ ] I tested the auth flow.
- [ ] I tested at least one generated endpoint.
- [ ] I added `year_published` to `books` and saw it appear in the docs.

## What to Submit

Be prepared to show your instructor or TA:

1. the `books` resource in `api.config.yaml`
2. the new `year_published` field
3. `/api/docs` running in the browser
4. the updated book schema in the docs
