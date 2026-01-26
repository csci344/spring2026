const element0 = query("#container");
const computed0 = getComputedStyle(element0, "display");
assert(computed0 === "grid", "Container should use grid display");

const element1 = query("#container");
const computed1 = getComputedStyle(element1, "gridTemplateColumns");
const normalized1 = normalizeGridTemplateValue(computed1);
const expected1 = normalizeGridTemplateValue("1fr 1fr 1fr");
assert(normalized1 === expected1, "Container should have 3 equal columns");

