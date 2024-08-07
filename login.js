document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    
    emailError.style.color = 'red';
    passwordError.style.color = 'red';
    
    if (email === '') {
        emailError.textContent = 'Please enter your email.';
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
    
    if (password === '') {
        passwordError.textContent = 'Please enter your password.';
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
    } else if (password.length > 16) {
        passwordError.textContent = 'Password must be no more longer than 16 characters.';
    } else {
        passwordError.textContent = '';
    }
    
    if (emailError.textContent === '' && passwordError.textContent === '') {
        // Login successful!
        console.log('Login successful!');
    }
});

document.getElementById('email').addEventListener('input', function() {
    let email = this.value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailError = document.getElementById('email-error');
    
    if (email === '') {
        emailError.textContent = 'Please enter your email.';
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});


document.getElementById('password').addEventListener('input', function() {
    let password = this.value;
    let passwordError = document.getElementById('password-error');
    
    if (password === '') {
        passwordError.textContent = 'Please enter your password.';
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
    } else if (password.length > 16) {
        passwordError.textContent = 'Password must be no more longer than 16 characters.';
    } else {
        passwordError.textContent = '';
    }
});

document.getElementById('toggle-password-icon').addEventListener('click', function() {
    let passwordInput = document.getElementById('password');
    let eyeOpenIcon = document.getElementById('eye-open-icon');
    let eyeCloseIcon = document.getElementById('eye-close-icon');
    
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
        eyeOpenIcon.style.display = 'none';
        eyeCloseIcon.style.display = 'block';
    } else {
        passwordInput.setAttribute('type', 'password');
        eyeOpenIcon.style.display = 'block';
        eyeCloseIcon.style.display = 'none';
    }
});