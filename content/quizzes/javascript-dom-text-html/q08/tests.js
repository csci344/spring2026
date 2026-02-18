const c = query('#container');
assert(!!c, 'container exists');
window.runCode();
assert(c.innerHTML.replace(/\s+/g,' ').trim().toLowerCase() === '<p>done</p>', 'innerHTML is exactly <p>Done</p> (case-insensitive)');
