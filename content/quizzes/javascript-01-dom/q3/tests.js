const element0 = query("#todoList");
assert(element0.children.length === 0, "Todo list should be empty initially");

const element1 = query("#todoInput");
element1.value = "Buy groceries";
element1.dispatchEvent(new Event("input", { bubbles: true }));
await wait(10);
// Event triggered: Adding a todo creates a list item

const element2 = query("#addBtn");
element2.click();
await wait(10);
const checkElement2 = query("#todoList");
assert(checkElement2.children.length === 1, "Clicking Add button adds item to list");

const element3 = query("#todoList li:first-child");
// Check that the text content includes "Buy groceries" (may also include button text)
assert(element3.textContent.includes("Buy groceries"), "First todo item contains the text");

// Check that the first list item has a delete button
const deleteButton1 = query("#todoList li:first-child button");
assert(deleteButton1 !== null, "First todo item should have a delete button");
assert(deleteButton1.textContent.includes("Delete") || deleteButton1.textContent.trim() !== "", "Delete button should have text or be visible");

const element4 = query("#todoInput");
element4.value = "Walk the dog";
element4.dispatchEvent(new Event("input", { bubbles: true }));
await wait(10);
// Event triggered: Adding another todo

const element5 = query("#addBtn");
element5.click();
await wait(10);
const checkElement5 = query("#todoList");
assert(checkElement5.children.length === 2, "Clicking Add adds second item");

// Check that both list items have delete buttons
const firstItem = query("#todoList li:first-child");
const secondItem = query("#todoList li:last-child");
const deleteButtonFirst = firstItem.querySelector("button");
const deleteButtonSecond = secondItem.querySelector("button");
assert(deleteButtonFirst !== null, "First todo item should have a delete button");
assert(deleteButtonSecond !== null, "Second todo item should have a delete button");

// Check that the delete button on the first item works
const element6 = query("#todoList li:first-child button");
assert(element6 !== null, "Delete button should exist on first item");
element6.click();
await wait(10);
const checkElement6 = query("#todoList");
assert(checkElement6.children.length === 1, "Clicking delete button removes the item");

// Verify the remaining item is the second one (Walk the dog)
const remainingItem = query("#todoList li:first-child");
assert(remainingItem.textContent.includes("Walk the dog"), "Remaining item should be 'Walk the dog'");
