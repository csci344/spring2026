const element0 = query("#container");
const computed0 = getComputedStyle(element0, "display");
assert(computed0 === "grid", "Container should use grid display");

const element1 = query("#container");
const computed1 = getComputedStyle(element1, "gridTemplateColumns");
const normalized1 = normalizeGridTemplateValue(computed1);
const expected1 = normalizeGridTemplateValue("repeat(2, 1fr)");
assert(normalized1 === expected1, "Container should have 2 columns");

const element2 = query("#container");
const computed2 = getComputedStyle(element2, "gap");
assert(computed2 === "15px", "Container should have 15px gap");

