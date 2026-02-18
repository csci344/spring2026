const c = query('#container');
window.runCode();
const b = query('#newBtn');
assert(!!c, 'container exists');
assert(!!b, 'new button exists');
assert(b.tagName.toLowerCase() === 'button', 'newBtn is a button');
assert(b.textContent.trim() === 'Click me', 'button text');
assert(c.contains(b), 'container contains new button');
