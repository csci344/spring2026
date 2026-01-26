const element0 = query("#charCount");
assert(element0.textContent === "Characters: 0", "Counter should start at 'Characters: 0'");

const element1 = query("#textInput");
element1.value = "Hello";
element1.dispatchEvent(new Event("input", { bubbles: true }));
await wait(10);
const checkElement1 = query("#charCount");
assert(checkElement1.textContent === "Characters: 5", "Typing 'Hello' updates counter to 5");

const element2 = query("#textInput");
element2.value = "Hello World";
element2.dispatchEvent(new Event("input", { bubbles: true }));
await wait(10);
const checkElement2 = query("#charCount");
assert(checkElement2.textContent === "Characters: 11", "Adding more text updates counter");

const element3 = query("#textInput");
element3.value = "";
element3.dispatchEvent(new Event("input", { bubbles: true }));
await wait(10);
const checkElement3 = query("#charCount");
assert(checkElement3.textContent === "Characters: 0", "Clearing text resets counter to 0");

