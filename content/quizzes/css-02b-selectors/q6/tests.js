const element0 = query("h1");
const computed0 = getComputedStyle(element0, "color");
assert(computed0 === "rgb(255, 0, 0)" || computed0 === "red", "h1 should be red");

const element1 = query("h2");
const computed1 = getComputedStyle(element1, "color");
assert(computed1 === "rgb(255, 0, 0)" || computed1 === "red", "h2 should be red");

const element2 = query("h3");
if (element2) {
  const computed2 = getComputedStyle(element2, "color");
  assert(computed2 !== "rgb(255, 0, 0)" && computed2 !== "red", "h3 should not be red");
}
