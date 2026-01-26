let count = 0;
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Your code here
function incrementCounter() {
    counter.innerHTML = ++count;
}

function decrementCounter() {
    counter.innerHTML = --count;
}

function resetCounter() {
    count = 0;
    counter.innerHTML = count;
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);



