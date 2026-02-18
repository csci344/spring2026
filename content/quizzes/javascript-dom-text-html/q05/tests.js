const list = query('#list');
assert(!!list, 'list exists');
window.runCode();
assert(list.querySelectorAll('li').length === 3, 'list has 3 li total');
