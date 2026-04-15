---
title: "Activity: Design a REST API for a Online Sneaker Store"
type: activity
draft: 0
heading_max_level: 3
ordering: 1
start_date: "2026-04-15"
due_date: "2026-04-15"
---

You are going to design an API blueprint for an online show store. To do this, you're going to have to make some decisions about:

- What resources your system needs
- What endpoints exist
- What fields each endpoint needs
- Which fields can be queried
- Who is allowed to use each endpoint

In other words, we can focus on **API design first** without worrying yet about implementation

## The Three Endpoints

For this activity, keep the scope limited to these three resources/endpoints:

- `sneakers`
- `favorites`
- `orders`

These three give us a simple store:

- `sneakers` is the public catalog
- `favorites` is a private list saved by a logged-in user
- `orders` is a private purchase or inquiry record

## 1. Resource: `Sneaker`

This endpoint should let shoppers browse the shoe catalog.

**Endpoint:** `/api/sneakers`

Suggested fields:

| name | data type | searchable |
| --- | --- | --- |
| `name` | `string` | yes |
| `brand` | `string` | yes |
| `price` | `number` | no |
| `image_url` | `string` | no |
| `size` | `integer` | yes |
| `condition` | `string` | no |
| `is_available` | `boolean` | yes |
| `description` | `text` | no |


## 2. Resource: `Favorite`

This endpoint should let a logged-in user save shoes they are interested in.

**Endpoint:** `/api/favorites`

Suggested fields:

| name | data type | searchable |
| --- | --- | --- |
| `note` | `text` | no |
| `sneaker` | `Sneaker` | yes |

That means `favorites` should include a relation to `sneakers`, which will generate a foreign key such as `sneaker_id`.


## 3. Resource: `Order`

This endpoint should store a customer's purchase or inquiry.

**Endpoint:** `/api/orders`

Suggested fields:

| name | data type | searchable |
| --- | --- | --- |
| `customer_name` | `string` | no |
| `email` | `string` | no |
| `status` | `string` | yes |
| `total` | `number` | no |
| `created_at` | `datetime` | no |
| `sneaker` |  `Sneaker` | yes |


## 4. Configuration File (We'll go over this on Friday)

```yaml
resources:
  - name: sneakers
    path: /api/sneakers
    operations: [list, retrieve, create, update, delete]
    fields:
      - name: name
        type: string
        required: true
        query: true
      - name: brand
        type: string
        required: true
        query: true
      - name: price
        type: number
        required: true
        query: true
      - name: photo
        type: image_url
        required: true
      - name: size
        type: integer
        query: true
      - name: condition
        type: string
      - name: is_available
        type: boolean
        query: true
      - name: description
        type: text
    permissions:
      list: public
      retrieve: public
      create: user
      update: owner
      delete: owner

  - name: favorites
    path: /api/favorites
    operations: [list, retrieve, create, update, delete]
    fields:
      - name: note
        type: string
    relations:
      - name: sneaker
        references: sneakers
        required: true
        query: true
    permissions:
      list: owner
      retrieve: owner
      create: user
      update: owner
      delete: owner

  - name: orders
    path: /api/orders
    operations: [list, retrieve, create, update, delete]
    fields:
      - name: customer_name
        type: string
        required: true
      - name: email
        type: string
        required: true
      - name: status
        type: string
        required: true
        query: true
      - name: total
        type: number
        required: true
      - name: created_at
        type: datetime
    relations:
      - name: sneaker
        references: sneakers
        required: true
        query: true
    permissions:
      list: owner
      retrieve: owner
      create: user
      update: owner
      delete: owner
```

## 5. In-Class Demo
1. Paste in the YAML
2. Build the API
3. Share the endpoint with the class
4. Think about how to build your front-end using your API
