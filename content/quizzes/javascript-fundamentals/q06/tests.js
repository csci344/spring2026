const result1 = window.add(5, 3);
assert(result1 === 8, 'add(5, 3) should return 8');

const result2 = window.add(10, 20);
assert(result2 === 30, 'add(10, 20) should return 30');

const result3 = window.add(-5, 5);
assert(result3 === 0, 'add(-5, 5) should return 0');
