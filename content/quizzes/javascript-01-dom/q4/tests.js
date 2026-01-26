const element0 = query("#content");
assert(element0.classList.contains("light") === true, "Content should have 'light' class initially");

const element1 = query("#themeToggle");
assert(element1.textContent === "Switch to Dark", "Button text should be 'Switch to Dark' initially");

const element2 = query("#themeToggle");
element2.click();
await wait(10);
const checkElement2 = query("#content");
assert(checkElement2.classList.contains('dark') === true, "Clicking toggle switches to dark theme");

const element3 = query("#themeToggle");
assert(element3.textContent === "Switch to Light", "Button text updates to 'Switch to Light'");

const element4 = query("#themeToggle");
element4.click();
await wait(10);
const checkElement4 = query("#content");
assert(checkElement4.classList.contains('light') === true, "Clicking again switches back to light");

