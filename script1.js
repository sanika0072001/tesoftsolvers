const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');

const isLogin = localStorage.getItem('username') !== null;

if (isLogin) {
  window.location.href = 'home.html';
}

// Switch to login form after successful registration
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newUsername = registerForm.elements['new-username'].value;
  const newPassword = registerForm.elements['new-password'].value;
  const confirmPassword = registerForm.elements['confirm-password'].value;
  const email = registerForm.elements['email'].value;
  if (newPassword === confirmPassword) {
    // Perform registration and switch to login form
    console.log(`Registration details: Username - ${newUsername}, Password - ${newPassword}`);
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert('Passwords do not match');
  }
});

// Switch to registration form when "Register" link is clicked
registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;
  // Perform login validation and redirect to home page
  console.log(`Login details: Username - ${username}, Password - ${password}`);
  // Set local storage userdetails username 
  
  localStorage.setItem('username', username);

  window.location.href = 'home.html';
});