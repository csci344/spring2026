const element0 = query("#container");
const computed0 = getComputedStyle(element0, "display");
assert(computed0 === "grid", "Container should use grid display");

const element1 = query("#container");
const computed1 = getComputedStyle(element1, "gridTemplateRows");
const normalized1 = normalizeGridTemplateValue(computed1);
const expected1 = normalizeGridTemplateValue("100px 200px 100px");
assert(normalized1 === expected1, "Container should have specified row heights");

