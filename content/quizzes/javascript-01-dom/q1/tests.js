const element0 = query("#counter");
assert(element0.textContent === "0", "Counter should start at 0");

const element1 = query("#increment");
element1.click();
await wait(10);
const checkElement1 = query("#counter");
assert(checkElement1.textContent === "1", "Clicking + should increment to 1");

const element2 = query("#decrement");
element2.click();
await wait(10);
const checkElement2 = query("#counter");
assert(checkElement2.textContent === "0", "Clicking - should decrement to 0");

const element3 = query("#reset");
element3.click();
await wait(10);
const checkElement3 = query("#counter");
assert(checkElement3.textContent === "0", "Reset button sets counter to 0");

