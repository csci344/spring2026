const element0 = query("p");
const computed0 = getComputedStyle(element0, "color");
assert(computed0 === "rgb(0, 0, 255)" || computed0 === "blue", "All paragraphs should be blue");
