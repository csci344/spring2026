// Sample data
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
};

const colors = ['red', 'green', 'blue', 'yellow'];

const todos1 = ['Buy groceries', 'Finish homework'];
const todos2 = ['Call mom', 'Read docs'];

const basicInfo = { name: "Bob", age: 30 };
const contactInfo = { email: "bob@example.com", phone: "555-1234" };

const userWithAddress = {
    name: "Charlie",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    }
};

// Exercise 1: Object Destructuring
// Create a function createUserCard that takes a user object
// and uses destructuring to extract properties

// Exercise 2: Array Destructuring
// Create a function getFirstTwoColors that uses array destructuring

// Exercise 3: Spread Operator with Arrays
// Create a function combineTodos that combines arrays using spread

// Exercise 4: Spread Operator with Objects
// Create a function mergeUserInfo that merges objects using spread

// Exercise 5: Destructuring Function Parameters
// Create a function createTodoItem that destructures parameters

// Exercise 6: Spread Operator for DOM Updates
// Create a function addTodosToList that uses spread and DOM manipulation

// Exercise 7: Nested Destructuring
// Create a function getUserLocation that destructures nested objects

// Test your functions here (uncomment as you complete each exercise):

// Exercise 1 test:
// const cardHtml = createUserCard(user);
// const userCards = document.querySelector('#userCards');
// userCards.insertAdjacentHTML('beforeend', cardHtml);

// Exercise 2 test:
// console.log(getFirstTwoColors(colors));

// Exercise 3 test:
// console.log(combineTodos(todos1, todos2));

// Exercise 4 test:
// console.log(mergeUserInfo(basicInfo, contactInfo));

// Exercise 5 test:
// const todoHtml = createTodoItem({ text: "Learn React", completed: false, priority: "high" });
// console.log(todoHtml);

// Exercise 6 test:
// addTodosToList(todos1, todos2);

// Exercise 7 test:
// console.log(getUserLocation(userWithAddress));
