// Check that elements with class 'highlight' have yellow background
const highlightedElements = queryAll(".highlight");
assert(highlightedElements.length === 2, "Should have 2 elements with class 'highlight'");

for (let i = 0; i < highlightedElements.length; i++) {
  const computed = getComputedStyle(highlightedElements[i], "backgroundColor");
  assert(computed === "rgb(255, 255, 0)" || computed === "yellow", `Element ${i + 1} with class 'highlight' should have yellow background`);
}

// Check that elements WITHOUT class 'highlight' do NOT have yellow background
const normalParagraph = query("p:not(.highlight)");
if (normalParagraph) {
  const computed = getComputedStyle(normalParagraph, "backgroundColor");
  assert(computed !== "rgb(255, 255, 0)" && computed !== "yellow" && computed !== "rgb(255,255,0)", "Normal paragraph (without class 'highlight') should NOT have yellow background");
}

const normalDiv = query("div");
if (normalDiv) {
  const computed = getComputedStyle(normalDiv, "backgroundColor");
  assert(computed !== "rgb(255, 255, 0)" && computed !== "yellow" && computed !== "rgb(255,255,0)", "Normal div (without class 'highlight') should NOT have yellow background");
}
