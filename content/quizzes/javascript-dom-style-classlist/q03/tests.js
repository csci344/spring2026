const card = query('#card');
assert(!!card, 'card exists');
window.runCode();
assert(card.className === 'card featured', "className is exactly 'card featured' after calling window.runCode()");
