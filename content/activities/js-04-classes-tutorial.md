---
title: "JavaScript Classes Tutorial"
type: "activity"
start_date: "2026-02-25"
draft: 1
ordering: 2
heading_max_level: 3
---

## Goal
Learn how to create and use JavaScript classes, comparing them to what you know from Java.

## JavaScript Classes vs Java Classes

### Key Similarities

Both Java and JavaScript classes have:
- Constructors
- Instance methods
- Instance variables (properties)
- The ability to create multiple instances

### Key Differences

| Feature | Java | JavaScript |
|---------|------|------------|
| Access modifiers | `public`, `private`, `protected` | None (everything is accessible) |
| Type declarations | Required (`int`, `String`, etc.) | Optional (dynamic typing) |
| Constructor name | Same as class name | `constructor` keyword |
| Method syntax | `public void methodName()` | `methodName() { }` |
| `this` keyword | Always refers to instance | Can be tricky with arrow functions |

## Creating Your First Class

### Example: Person Class

**Java:**
```java
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
    
    public int getAge() {
        return age;
    }
}
```

**JavaScript:**
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
    
    getAge() {
        return this.age;
    }
}
```

## Exercise 1: Create a Person Class

Create a file called `person-class.mjs`:

```javascript
// Create a Person class with:
// - constructor that takes name and age
// - introduce() method that logs a greeting
// - getAge() method that returns the age

class Person {
    // Your code here
}

// Create instances and test
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.introduce();  // Should print: "Hi, I'm Alice and I'm 25 years old."
person2.introduce();  // Should print: "Hi, I'm Bob and I'm 30 years old."

console.log(person1.getAge());  // Should print: 25
```

Run it with: `node person-class.mjs`

<details>
<summary>Show Solution</summary>

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
    
    getAge() {
        return this.age;
    }
}
```
</details>

## Exercise 2: Add More Methods

Extend your Person class with:
- `haveBirthday()` method that increments age by 1
- `canVote()` method that returns `true` if age >= 18, `false` otherwise

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Add your new methods here
}

// Test
const person = new Person("Charlie", 17);
console.log(person.canVote());  // Should print: false
person.haveBirthday();
console.log(person.getAge());   // Should print: 18
console.log(person.canVote());  // Should print: true
```

<details>
<summary>Show Solution</summary>

```javascript
haveBirthday() {
    this.age++;
}

canVote() {
    return this.age >= 18;
}
```
</details>

## Exercise 3: The `this` Keyword

The `this` keyword refers to the current instance. It's important to understand how it works:

```javascript
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count++;
        console.log("Count is now:", this.count);
    }
    
    // Arrow function - 'this' is bound to the instance
    incrementArrow = () => {
        this.count++;
        console.log("Count is now:", this.count);
    }
}

const counter = new Counter();
counter.increment();      // Works fine
counter.incrementArrow(); // Also works fine
```

**Important:** In regular methods, `this` refers to the instance. In arrow functions, `this` is lexically bound (inherited from the enclosing scope).

## Exercise 4: Create a Rectangle Class

Create a file called `rectangle-class.mjs`:

```javascript
// Create a Rectangle class with:
// - constructor that takes width and height
// - getArea() method that returns width * height
// - getPerimeter() method that returns 2 * (width + height)
// - isSquare() method that returns true if width === height

class Rectangle {
    // Your code here
}

// Test
const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(7, 7);

console.log(rect1.getArea());      // Should print: 50
console.log(rect1.getPerimeter()); // Should print: 30
console.log(rect1.isSquare());     // Should print: false

console.log(rect2.isSquare());     // Should print: true
```

<details>
<summary>Show Solution</summary>

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    
    isSquare() {
        return this.width === this.height;
    }
}
```
</details>

## Exercise 5: Create a Bank Account Class

Create a file called `bank-account.mjs`:

```javascript
// Create a BankAccount class with:
// - constructor that takes an initial balance (default to 0)
// - deposit(amount) method that adds to balance
// - withdraw(amount) method that subtracts from balance (don't allow negative)
// - getBalance() method that returns current balance

class BankAccount {
    // Your code here
}

// Test
const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance());  // Should print: 150

account.withdraw(30);
console.log(account.getBalance());  // Should print: 120

account.withdraw(200);  // Should not allow (balance would go negative)
console.log(account.getBalance());  // Should still print: 120
```

<details>
<summary>Show Solution</summary>

```javascript
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    
    deposit(amount) {
        this.balance += amount;
    }
    
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
    }
    
    getBalance() {
        return this.balance;
    }
}
```
</details>

## Common Mistakes

1. **Forgetting `this`**: Always use `this.propertyName` to access instance properties
2. **Using arrow functions for methods**: Regular methods are usually better (unless you need specific `this` binding)
3. **Not using `new`**: Always use `new` when creating instances: `const person = new Person(...)`
4. **Access modifiers**: JavaScript doesn't have `private` - everything is accessible (though ES2022 added private fields with `#`)

## Next Steps

- Complete the [Classes Practice Game](js-classes-game) activity
- Review [Basic Programming in JavaScript - Objects & Classes](/spring2026/resources/js-03-basic-programming#5-objects--classes)
- Try creating your own classes for practice!
