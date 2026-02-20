// Solution for Carousel - with comments explaining how it works

// Track the current position in the carousel (which slide we're showing)
let currentPosition = 0;

// Gap between slides in pixels
let gap = 10;

// Width of each slide in pixels
const slideWidth = 400;

// Function to move the carousel forward or backward
function moveCarousel(direction) {
    // Get all carousel items (images and divs)
    const items = document.querySelectorAll(".carousel-item");

    // Handle forward movement
    if (direction == "forward") {
        // Check if we're at the end (minus 2 because first 2 slides are already showing)
        // If we are, don't move forward
        if (currentPosition >= items.length - 2) {
            return false;
        }
        // Move to the next position
        currentPosition++;
    } else {
        // Handle backward movement
        // Check if we're at the beginning
        // If we are, don't move backward
        if (currentPosition == 0) {
            return false;
        }
        // Move to the previous position
        currentPosition--;
    }

    // Calculate how far to shift all items (offset in pixels)
    // Multiply current position by (slide width + gap between slides)
    const offset = (slideWidth + gap) * currentPosition;

    // Apply the transform to each carousel item to move them
    // translateX moves items horizontally (negative = left, positive = right)
    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
