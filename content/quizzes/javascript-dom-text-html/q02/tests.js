const msg = query('#message');
assert(!!msg, 'message exists');
window.runCode();
assert(msg.textContent === '<strong>Hello</strong>', 'textContent includes the angle brackets');
assert(msg.querySelector('strong') === null, 'no <strong> element was created');
