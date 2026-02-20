window.runCode();

// Check that a Person instance was created
const personExists = typeof window.person !== 'undefined' || typeof window.alice !== 'undefined';
assert(personExists, "A Person instance should be created");

// Check that introduce() was called
// We'll check the output div for the result
const output = query('#output');
const outputText = output ? output.textContent : '';
const hasIntro = outputText.includes("Hi, I'm Alice and I'm 25 years old.") || 
                  outputText.includes("Alice") && outputText.includes("25");
assert(hasIntro, "introduce() method should be called and display the result");
