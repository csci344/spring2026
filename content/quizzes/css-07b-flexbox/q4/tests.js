const element0 = query("#container");
const computed0 = getComputedStyle(element0, "display");
assert(computed0 === "flex", "Container should use flexbox display");

const element1 = query("#container");
const computed1 = getComputedStyle(element1, "gap");
assert(computed1 === "20px", "Container should have 20px gap");

