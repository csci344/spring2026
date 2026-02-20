const person = new window.Person("Alice", 25);
assert(person.name === "Alice", "person.name should be 'Alice'");
assert(person.age === 25, "person.age should be 25");

const person2 = new window.Person("Bob", 30);
assert(person2.name === "Bob", "person2.name should be 'Bob'");
assert(person2.age === 30, "person2.age should be 30");
