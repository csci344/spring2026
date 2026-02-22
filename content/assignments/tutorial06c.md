---
title: "Objects & Product Display"
type: "tutorial"
num: 6c
draft: 0
hide_from_list: 1
assigned_date: "2026-02-27"
due_date: "2026-03-02"
heading_max_level: 3
order: 6
points: 6
---

## Setup
Create a folder `03-product-catalog` inside `tutorial06` with `index.html`, `styles.css`, and `script.js`.

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Product Catalog</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>Product Catalog</h1>
    <div class="controls">
      <input type="text" id="searchInput" placeholder="Search products..." />
    <div id="productGrid"></div>
  </div>
</body>
</html>
```

### CSS
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

#searchInput {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

#productGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-card h2 {
  margin-top: 0;
  color: #333;
}

.product-card .price {
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
  margin: 10px 0;
}

.product-card .description {
  color: #666;
  margin: 10px 0;
}

.product-card .category {
  display: inline-block;
  background-color: #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  margin-top: 10px;
}
```

## JavaScript Tasks

### 1. Create an array of product objects
```javascript
const products = [
  {
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop for work and play',
    category: 'Electronics',
    inStock: true
  },
  {
    name: 'Coffee Maker',
    price: 49.99,
    description: 'Brew perfect coffee every morning',
    category: 'Appliances',
    inStock: false
  },
  {
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'Premium sound quality with noise cancellation',
    category: 'Electronics',
    inStock: false
  },
  {
    name: 'Desk Chair',
    price: 199.99,
    description: 'Ergonomic office chair for long work sessions',
    category: 'Furniture',
    inStock: true
  },
  {
    name: 'Smartphone',
    price: 699.99,
    description: 'Latest model with advanced features',
    category: 'Electronics',
    inStock: false
  },
  {
    name: 'Microwave',
    price: 89.99,
    description: 'Quick and efficient cooking',
    category: 'Appliances',
    inStock: true
  }
];

const productGrid = document.querySelector('#productGrid');
const searchInput = document.querySelector('#searchInput');
```

### 2. Create a function to format price
```javascript
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
```

### 3. Create a function to create product card HTML
Use template literals with object properties:

```javascript
function createProductCard(product) {
  // Return a template literal (use backticks) with the HTML structure:
  // - <div class="product-card">
  // - <h2> with product.name
  // - <div class="price"> with formatPrice(product.price)
  // - <p class="description"> with product.description
  // - <span class="category"> with product.category
  // - Close all tags
  // Hint: Use ${} to insert variables and function calls
}
```

### 4. Create a function to render products
```javascript
function renderProducts(productsToShow) {
  // 1. Clear productGrid using innerHTML = ''
  
  // 2. Use forEach to loop through productsToShow array
  //    - For each product, call createProductCard(product)
  //    - Store the result in a variable (e.g., productHTML)
  //    - Use insertAdjacentHTML('beforeend', productHTML) to add it to productGrid
}
```


## Test
Test your UI by verifying that all products display.


## Optional Enhancements

### Enhance the createProductCard by adding conditional styling
Add a stock status indicator that changes color based on whether the product is in stock by modifying the `createProductCard` function you just made:

```javascript
function createProductCard(product) {
  // Use a ternary operator to set stockStatus:
  // - If product.inStock is true, use green "In Stock" span
  // - Otherwise, use red "Out of Stock" span
  // Hint: const stockStatus = product.inStock ? '...' : '...';
  
  // Then include ${stockStatus} in your template literal
}
```

### Add a sort function

**1. Add a sort dropdown to your HTML** (in the `.controls` section):
```html
<select id="sortSelect">
  <option value="name">Sort by Name</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
</select>
```

**2. Create the sort function:**
```javascript
function sortProducts(sortBy) {
  let sorted = products.slice(); // Create a copy of the array
  
  if (sortBy === 'price-low') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  renderProducts(sorted);
}
```

**3. Add an event listener** to call the sort function when the dropdown changes:
```javascript
const sortSelect = document.querySelector('#sortSelect');
sortSelect.addEventListener('change', function() {
  sortProducts(this.value);
});
```

**Note:** You may want to combine sorting with filtering - if so, modify `filterProducts()` to also apply sorting, or create a combined function that handles both.


## Key Concepts Practiced

- **Objects**: Storing related data (`{ name: '...', price: 99.99 }`)
- **Arrays of Objects**: Managing collections
- **Template Literals**: Creating HTML with object properties
- **Array Methods**: `filter`, `forEach`, `sort`
- **Control Structures**: Conditional logic for filtering
- **Functions**: Reusable code blocks

<a href="/spring2026/assignments/tutorial06" class="nu-button">← Back to Tutorial 6</a>
