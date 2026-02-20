// Solution for Theme Switcher

// Function to change the theme class on the body element
function changeClass(className) {
    const body = document.body;
    
    // Remove all existing theme classes first
    body.classList.remove('ocean', 'desert', 'high-contrast');
    
    // If "default" is clicked, we've already removed all classes, so do nothing
    // Otherwise, add the new theme class
    if (className !== 'default' && className !== '') {
        body.classList.add(className);
    }
}

// Attach the changeClass function to each button's click event
document.getElementById('default').addEventListener('click', function() {
    changeClass('default');
});

document.getElementById('desert').addEventListener('click', function() {
    changeClass('desert');
});

document.getElementById('ocean').addEventListener('click', function() {
    changeClass('ocean');
});

document.getElementById('high-contrast').addEventListener('click', function() {
    changeClass('high-contrast');
});
