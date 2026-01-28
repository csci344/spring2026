const element0 = query("div p");
const computed0 = getComputedStyle(element0, "fontStyle");
assert(computed0 === "italic", "Paragraphs inside divs should be italic");

const element1 = queryAll("div p");
assert(element1.length === 2, "Should have 2 paragraphs inside divs");

const element2 = query("p:not(div p)");
if (element2) {
  const computed2 = getComputedStyle(element2, "fontStyle");
  assert(computed2 !== "italic", "Paragraph outside div should not be italic");
}
