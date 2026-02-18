setInputValue('#nameInput', 'First');
query('#addBtn').click();
setInputValue('#nameInput', 'Second');
query('#addBtn').click();
const items = queryAll('#list li');
assert(items.length === 2, 'two li added');
assert(items[0].textContent.trim() === 'First', 'first li text');
assert(items[1].textContent.trim() === 'Second', 'second li text');
