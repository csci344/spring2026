const img = query('#pic');
assert(!!img, 'image exists');
window.runCode();
assert((img.getAttribute('src') || img.src).endsWith('bird.jpg'), "src ends with 'bird.jpg' after calling window.runCode()");
