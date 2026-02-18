setInputValue('#nameInput', 'Ada');
const btn = query('#addBtn');
const out = query('#output');
assert(!!btn && !!out, 'button and output exist');
btn.click();
assert(out.textContent === 'Ada', 'output shows input text after click');
