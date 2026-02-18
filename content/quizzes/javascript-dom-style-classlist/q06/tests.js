const box = query('#box');
assert(!!box, 'box exists');
window.runCode();
const bw = getComputedStyle(box, 'border-top-width');
assert(bw === '4px', `border width is 4px (got ${bw})`);
