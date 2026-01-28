const element0 = query(".menu > li");
const computed0 = getComputedStyle(element0, "borderWidth");
assert(computed0 === "1px", "Direct children of .menu should have 1px border");

const element1 = queryAll(".menu > li");
assert(element1.length === 2, "Should have 2 direct children of .menu");

const element2 = query("ul:not(.menu) li");
if (element2) {
  const computed2 = getComputedStyle(element2, "borderWidth");
  assert(computed2 === "0px" || computed2 === "", "Nested list items should not have border");
}
