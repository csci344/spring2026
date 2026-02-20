const rect = new window.Rectangle(5, 10);
assert(rect.getArea() === 50, "getArea() should return 50 for width=5, height=10");

const rect2 = new window.Rectangle(3, 7);
assert(rect2.getArea() === 21, "getArea() should return 21 for width=3, height=7");

const rect3 = new window.Rectangle(1, 1);
assert(rect3.getArea() === 1, "getArea() should return 1 for width=1, height=1");
