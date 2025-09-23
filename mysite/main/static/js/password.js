// Get all password input elements and their toggle buttons
const passwordInput = document.querySelector('#password1');
const confirmPasswordInput = document.querySelector('#password2');
const showPasswordBtn = document.querySelector('#showPassword');
const showConfirmPasswordBtn = document.querySelector('#showConfirmPassword');

function togglePasswordVisibility(input, icon) {
    if (!input || !icon) return;
    
    const isPassword = input.getAttribute('type') === 'password';
    input.setAttribute('type', isPassword ? 'text' : 'password');
    
    icon.classList.toggle('bi-eye', !isPassword);
    icon.classList.toggle('bi-eye-slash', isPassword);
}

if (passwordInput && showPasswordBtn) {
    showPasswordBtn.addEventListener('click', () => {
        togglePasswordVisibility(passwordInput, showPasswordBtn);
    });
}
if (confirmPasswordInput && showConfirmPasswordBtn) {
    showConfirmPasswordBtn.addEventListener('click', () => {
        togglePasswordVisibility(confirmPasswordInput, showConfirmPasswordBtn);
    });
}