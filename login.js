const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const rememberInput = document.querySelector('#remember-me');
const loginMessage = document.querySelector('#login-message');
const loginForm = document.querySelector('#login-form');
const submitButton = loginForm.querySelector('button[type="submit"]');

document.querySelector('#toggle-password').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const reveal = passwordInput.type === 'password';
  passwordInput.type = reveal ? 'text' : 'password';
  button.textContent = reveal ? 'Hide' : 'Show';
  button.setAttribute('aria-pressed', String(reveal));
});

try {
  const rememberedUsername = localStorage.getItem('ar-shop-remembered-user');
  if (rememberedUsername) {
    emailInput.value = rememberedUsername;
    rememberInput.checked = true;
  }
} catch {
  loginMessage.className = 'login-message is-error';
  loginMessage.textContent = 'Remember me is unavailable in this browser.';
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = emailInput.value.trim();

  if (!username || !passwordInput.value) {
    loginMessage.className = 'login-message is-error';
    loginMessage.textContent = 'Enter a username or email address and password to continue.';
    emailInput.focus();
    return;
  }

  try {
    if (rememberInput.checked) localStorage.setItem('ar-shop-remembered-user', username);
    else localStorage.removeItem('ar-shop-remembered-user');
  } catch {
    loginMessage.className = 'login-message is-error';
    loginMessage.textContent = 'Browser storage is unavailable. Sign-in could not be saved.';
    return;
  }

  try {
    sessionStorage.setItem('ar-market-authenticated', 'true');
  } catch {
    loginMessage.className = 'login-message is-error';
    loginMessage.textContent = 'Your browser could not start a sign-in session.';
    return;
  }

  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = 'Signing in…';
  loginMessage.className = 'login-message is-success';
  loginMessage.textContent = 'Welcome back — opening AR Market…';
  window.setTimeout(() => window.location.assign('index.html'), 350);
});
