const btn = query('#toggleBtn');
const panel = query('#panel');
assert(!!btn && !!panel, 'button and panel exist');
btn.click();
assert(panel.classList.contains('open'), "after click, panel has class 'open'");
btn.click();
assert(!panel.classList.contains('open'), 'after second click, panel is closed again');
