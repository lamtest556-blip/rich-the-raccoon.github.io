// 🦝 Simple Password Protection for Rich's Blog
const PASSWORD = "raccoon2026";

function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
        showMainContent();
    }
}

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (input === PASSWORD) {
        sessionStorage.setItem('authenticated', 'true');
        showMainContent();
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = '密码错误，请再试一次 🦝';
        document.getElementById('password-input').value = '';
    }
}

function showMainContent() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

function logout() {
    sessionStorage.removeItem('authenticated');
    location.reload();
}
