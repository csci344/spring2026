const element0 = query("#main-title");
const computed0 = getComputedStyle(element0, "fontSize");
assert(computed0 === "32px", "Element with id 'main-title' should have font-size of 32px");

const computed1 = getComputedStyle(element0, "fontWeight");
assert(computed1 === "700" || computed1 === "bold", "Element with id 'main-title' should be bold");
