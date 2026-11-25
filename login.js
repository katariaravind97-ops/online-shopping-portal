const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginMessage = document.querySelector('#login-message');

document.querySelector('#toggle-password').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const reveal = passwordInput.type === 'password';
  passwordInput.type = reveal ? 'text' : 'password';
  button.textContent = reveal ? 'Hide' : 'Show';
  button.setAttribute('aria-pressed', String(reveal));
});

document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailInput.value.trim() || !emailInput.validity.valid || !passwordInput.value) {
    loginMessage.className = 'login-message is-error';
    loginMessage.textContent = 'Enter a valid email address and password to continue.';
    return;
  }

  loginMessage.className = 'login-message is-success';
  loginMessage.textContent = 'Welcome back — opening AR Market…';
  window.setTimeout(() => {
    window.location.assign('index.html');
  }, 350);
});
