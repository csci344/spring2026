const element0 = query("#container");
const computed0 = getComputedStyle(element0, "display");
assert(computed0 === "flex", "Container should use flexbox display");

const element1 = query("#container");
const computed1 = getComputedStyle(element1, "flexWrap");
assert(computed1 === "wrap", "Container should allow wrapping");

