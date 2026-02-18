const formEl = query('#myForm');
const statusEl = query('#status');
query('#submitBtn').click();
assert(!!formEl && !!statusEl, 'form and status exist');
assert(statusEl.textContent.trim() === 'Submitted', 'status updated on submit');
