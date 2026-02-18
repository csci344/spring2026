const box = query('#box');
assert(!!box, 'box exists');
window.runCode();
const bc = getComputedStyle(box, 'border-top-color');
assert(bc === 'rgb(0, 0, 255)', `border color is blue (got ${bc})`);
