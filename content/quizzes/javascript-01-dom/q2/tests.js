const element0 = query("#message");
assert(element0.textContent === "", "Message div should be empty initially");

setInputValue("#email", "invalidemail");
await wait(50);
const element1 = query("#emailForm");
element1.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
await wait(200);
const checkElement1 = query("#message");
assert(checkElement1.textContent === "Invalid email!", "Submit form with invalid email (no @) - should show 'Invalid email!'");

setInputValue("#email", "test@example.com");
await wait(50);
const element2 = query("#emailForm");
element2.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
await wait(200);
const checkElement2 = query("#message");
assert(checkElement2.textContent === "Valid email!", "Submit form with valid email (contains @) - should show 'Valid email!'");

