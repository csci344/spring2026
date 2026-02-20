function toggleMenu() {
    const button = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-links');
  
    button.classList.toggle('active');
    menu.classList.toggle('active');
  }