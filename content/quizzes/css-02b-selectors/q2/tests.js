const element0 = query(".highlight");
const computed0 = getComputedStyle(element0, "backgroundColor");
assert(computed0 === "rgb(255, 255, 0)" || computed0 === "yellow", "Elements with class 'highlight' should have yellow background");

const element1 = queryAll(".highlight");
assert(element1.length === 2, "Should have 2 elements with class 'highlight'");
