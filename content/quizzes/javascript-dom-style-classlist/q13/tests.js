window.runCode(); // Sets up event handler
query('#hideBtn').click();
const box = query('#box');
assert(getComputedStyle(box, 'visibility') === 'hidden', 'box visibility is hidden after click');
