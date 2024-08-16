function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registrierung erfolgreich!');
        showLogin();
    } else {
        alert('Bitte alle Felder ausfüllen.');
    }
}
