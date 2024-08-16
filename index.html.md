<div id="loginForm" class="form-container">
            <h2>Login</h2>
            <input type="text" id="loginUsername" placeholder="Benutzername" required>
            <input type="password" id="loginPassword" placeholder="Passwort" required>
            <button onclick="login()">Login</button>
            <p>Noch kein Konto? <a href="#" onclick="showRegister()">Registrieren</a></p>
        </div>
<div id="registerForm" class="form-container" style="display:none;">
            <h2>Registrierung</h2>
            <input type="text" id="registerUsername" placeholder="Benutzername" required>
            <input type="email" id="email" placeholder="E-Mail" required>
            <input type="password" id="registerPassword" placeholder="Passwort" required>
            <button onclick="register()">Registrieren</button>
            <p>Bereits ein Konto? <a href="#" onclick="showLogin()">Login</a></p>
        </div>
