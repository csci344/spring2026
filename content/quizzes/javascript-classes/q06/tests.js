const person = new window.Person("Alice", 25);
const intro = person.introduce();
assert(intro === "Hi, I'm Alice and I'm 25 years old.", "introduce() should return the correct string");

const person2 = new window.Person("Bob", 30);
const intro2 = person2.introduce();
assert(intro2 === "Hi, I'm Bob and I'm 30 years old.", "introduce() should work for different instances");
