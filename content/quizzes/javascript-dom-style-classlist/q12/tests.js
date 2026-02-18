window.runCode(); // Sets up event handler
query('#hideBtn').click();
const box = query('#box');
assert(getComputedStyle(box, 'display') === 'none', 'box display is none after click');
