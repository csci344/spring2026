const target = query('#target');
assert(!!target, 'target exists');
window.runCode();
const note = query('#note');
assert(!!note, 'note exists');
assert(note.nextElementSibling === target, 'note is immediately before target');
assert(note.textContent.trim() === 'Note', 'note text is Note');
