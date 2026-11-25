try {
  if (sessionStorage.getItem('ar-market-authenticated') !== 'true') {
    window.location.replace('login.html');
  }
} catch {
  window.location.replace('login.html');
}
