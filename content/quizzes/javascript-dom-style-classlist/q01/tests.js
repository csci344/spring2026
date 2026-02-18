const box = query('#box');
assert(!!box, 'box exists');
window.runCode();
assert(box.classList.contains('active'), "#box has class 'active' after calling window.runCode()");
