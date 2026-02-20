function runCode() {
    // TODO: Create an instance of Person with name 'Alice' and age 25
    // Then call the introduce() method and store the result
    // The Person class is already defined for you
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// Your code here
