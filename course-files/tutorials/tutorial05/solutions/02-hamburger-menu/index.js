// Function to toggle the hamburger menu
function toggleMenu() {
  // Get references to the menu button and navigation links
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Toggle the 'active' class on both the button and navigation links
  // This will show/hide the menu and transform the hamburger into an X
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");

  // Update the aria-expanded attribute for accessibility
  const isExpanded = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isExpanded);
}
