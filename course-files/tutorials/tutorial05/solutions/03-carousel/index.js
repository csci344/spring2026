// Global variables to track carousel state
let currentPosition = 0; // Tracks which slide is currently visible (0-based index)
let gap = 10; // Space between carousel items in pixels
const slideWidth = 400; // Width of each carousel item in pixels

/**
 * Moves the carousel in the specified direction
 * @param {string} direction - Either "forward" or "backward"
 * @returns {boolean} - Returns false if movement is not possible, true otherwise
 */
function moveCarousel(direction) {
  // Get all carousel items (images and divs) from the DOM
  const items = document.querySelectorAll(".carousel-item");

  if (direction == "forward") {
    // Check if we can move forward (prevent going past the last visible slide)
    // We subtract 2 because the carousel shows 2 slides at once
    if (currentPosition >= items.length - 2) {
      return false; // Can't move forward - already at the end
    }
    currentPosition++; // Move to the next slide
  } else {
    // Check if we can move backward (prevent going before the first slide)
    if (currentPosition == 0) {
      return false; // Can't move backward - already at the beginning
    }
    currentPosition--; // Move to the previous slide
  }

  // Calculate how far to move all items (offset in pixels)
  // Each slide is slideWidth + gap pixels wide
  const offset = (slideWidth + gap) * currentPosition;

  // Apply the transform to all carousel items to move them
  // Using translateX with negative offset moves items to the left
  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}
