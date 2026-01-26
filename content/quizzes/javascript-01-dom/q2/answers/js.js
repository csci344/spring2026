const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const messageDiv = document.getElementById("message");

// Your code here
function validate(e) {
    e.preventDefault();
    const isValid = emailInput.value.includes("@");
    if (!isValid) {
      messageDiv.innerHTML = "Invalid email!";
    } else {
      messageDiv.innerHTML = "Valid email!";
    }
  }
  
  
  form.addEventListener("submit", validate);