const lis = queryAll('#list li');
assert(lis.length === 3, '3 li elements exist');
window.runCode();
for (const li of lis) {
  assert(li.classList.contains('item'), 'each li has class item');
}
