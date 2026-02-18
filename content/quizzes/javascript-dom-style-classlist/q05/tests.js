const box = query('#box');
assert(!!box, 'box exists');
window.runCode();
const bg = getComputedStyle(box, 'background-color');
assert(bg === 'rgb(255, 0, 0)', `background-color is red (got ${bg})`);
