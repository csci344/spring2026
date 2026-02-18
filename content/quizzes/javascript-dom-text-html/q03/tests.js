const list = query('#list');
assert(!!list, 'list exists');
window.runCode();
const items = list.querySelectorAll('li');
assert(items.length === 3, 'list has 3 items');
assert(items[2].textContent.trim() === 'Third', 'third item text is Third');
