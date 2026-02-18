const btn = query('#toggleBtn');
const box = query('#box');
window.runCode(); // Sets up event handler
btn.click();
assert(box.classList.contains('active'), 'active after first click');
assert(getComputedStyle(box, 'background-color') === 'rgb(255, 215, 0)', 'bg is gold when active');
btn.click();
assert(!box.classList.contains('active'), 'inactive after second click');
const bg2 = getComputedStyle(box, 'background-color');
assert(bg2 === 'rgba(0, 0, 0, 0)' || bg2 === 'transparent', `bg cleared when inactive (got ${bg2})`);
