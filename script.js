
function validateLoginForm() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var errorElement = document.getElementById("loginError");
    errorElement.textContent = "";
    if (username.trim() === "") {
      errorElement.textContent = "Username cannot be empty";
      return false;
    }
    if (password.trim() === "") {
      errorElement.textContent = "Password cannot be empty";
      return false;
    }
    return true;
  }
  
  function validateSignupForm() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorElement = document.getElementById("signupError");
    errorElement.textContent = "";
    if (username.trim() === "") {
      errorElement.textContent = "Username cannot be empty";
      return false;
    }
    if (password.length < 8 || !(/[a-zA-Z]/.test(password)) || !(/\d/.test(password))) {
      errorElement.textContent = "Password must be at least 8 characters and include letters and numbers";
      return false;
    }
    if (password !== confirmPassword) {
      errorElement.textContent = "Passwords do not match";
      return false;
    }
    return true;
  }
  