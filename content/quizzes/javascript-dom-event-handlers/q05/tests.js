query('#swapBtn').click();
const img = query('#pic');
assert((img.getAttribute('src') || img.src).endsWith('cat.jpg'), 'src ends with cat.jpg after click');
