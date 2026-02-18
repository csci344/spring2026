window.runCode();
assert(query('#toRemove') === null, '#toRemove was removed');
assert(!!query('#keep'), '#keep still exists');
