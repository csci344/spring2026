const element0 = query("#container");
const computed0 = getComputedStyle(element0, "display");
assert(computed0 === "flex", "Container should use flexbox display");

const element1 = query("#container");
const computed1 = getComputedStyle(element1, "justifyContent");
assert(computed1 === "center", "Container should center items horizontally");

const element2 = query("#container");
const computed2 = getComputedStyle(element2, "alignItems");
assert(computed2 === "center", "Container should center items vertically");

