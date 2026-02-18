const btn = query('#closeBtn');
assert(!!btn, 'button exists');
window.runCode();
assert(btn.getAttribute('aria-label') === 'Close', 'aria-label is Close');
