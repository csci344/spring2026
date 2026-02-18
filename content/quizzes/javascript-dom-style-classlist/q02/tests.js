const btn = query('#btn');
assert(!!btn, 'button exists');
window.runCode();
assert(!btn.classList.contains('disabled'), "#btn no longer has class 'disabled' after calling window.runCode()");
