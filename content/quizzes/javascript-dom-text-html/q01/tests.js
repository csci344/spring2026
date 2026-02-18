const msg = query('#message');
assert(!!msg, 'message exists');
window.runCode();
assert(msg.innerHTML.trim().toLowerCase() === '<strong>hello</strong>', 'innerHTML matches <strong>Hello</strong> (case-insensitive)');
assert(msg.querySelector('strong') !== null, 'a <strong> element exists inside #message');
