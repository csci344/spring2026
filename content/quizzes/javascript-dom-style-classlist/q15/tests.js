const box = query('#box');
assert(!!box, 'box exists');
window.runCode();
assert(getComputedStyle(box, 'border-top-style') === 'solid', 'border style solid');
assert(getComputedStyle(box, 'border-top-width') === '2px', 'border width 2px');
