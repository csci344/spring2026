const box = query('#box');
const status = query('#status');
assert(!!box && !!status, 'elements exist');
window.runCode();
assert(status.textContent === 'ON', 'status is ON when active');
