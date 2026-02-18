const box = query('#box');
assert(!!box, 'box exists');
window.runCode();
assert(box.dataset.status === 'ready', 'dataset.status is ready');
assert(box.getAttribute('data-status') === 'ready', 'data-status attribute is ready');
