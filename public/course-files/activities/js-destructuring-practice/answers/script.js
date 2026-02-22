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
function createUserCard(user) {
    const { name, age, email } = user;
    return `
        <div class="user-card">
            <h3>${name}</h3>
            <p>Age: ${age}</p>
            <p>Email: ${email}</p>
        </div>
    `;
}

// Exercise 2: Array Destructuring
function getFirstTwoColors(colors) {
    const [first, second] = colors;
    return { first, second };
}

// Exercise 3: Spread Operator with Arrays
function combineTodos(todos1, todos2) {
    return [...todos1, ...todos2];
}

// Exercise 4: Spread Operator with Objects
function mergeUserInfo(basicInfo, contactInfo) {
    return { ...basicInfo, ...contactInfo };
}

// Exercise 5: Destructuring Function Parameters
function createTodoItem({ text, completed = false, priority = 'medium' }) {
    const completedClass = completed ? 'completed' : '';
    return `<li class="${completedClass}">${text} (${priority})</li>`;
}

// Exercise 6: Spread Operator for DOM Updates
function addTodosToList(existingTodos, newTodos) {
    const allTodos = [...existingTodos, ...newTodos];
    const todoList = document.querySelector('#todoList');
    allTodos.forEach(todo => {
        todoList.insertAdjacentHTML('beforeend', `<li>${todo}</li>`);
    });
}

// Exercise 7: Nested Destructuring
function getUserLocation(user) {
    const { address: { city } } = user;
    return city;
}

// Test functions
// const cardHtml = createUserCard(user);
// const userCards = document.querySelector('#userCards');
// userCards.insertAdjacentHTML('beforeend', cardHtml);

// console.log(getFirstTwoColors(colors));

// console.log(combineTodos(todos1, todos2));

// console.log(mergeUserInfo(basicInfo, contactInfo));

// const todoHtml = createTodoItem({ text: "Learn React", completed: false, priority: "high" });
// console.log(todoHtml);

// addTodosToList(todos1, todos2);

// console.log(getUserLocation(userWithAddress));
