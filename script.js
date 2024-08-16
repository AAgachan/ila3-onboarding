function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}
 
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}
 
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
 
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
 
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
 
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'welcome.html';
    } else {
        alert('Ungültiger Benutzername oder Passwort.');
    }
}
