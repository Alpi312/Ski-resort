const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');

// Open popup when login button is clicked
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'block';
});

// Close popup when close button is clicked
function closePopup() {
  loginPopup.style.display = 'none';
}

// Close popup when clicking outside the popup
window.onclick = function(event) {
  if (event.target == loginPopup) {
    loginPopup.style.display = 'none';
  }
};

// Handle login form submission (you can add your own logic here)
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // Add your authentication logic here
  console.log(`Username: ${username}, Password: ${password}`);
  loginPopup.style.display = 'none';
});
