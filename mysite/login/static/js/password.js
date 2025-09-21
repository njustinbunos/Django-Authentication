const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const showPassword = document.querySelector('#showPassword');
const showConfirmPassword = document.querySelector('#showConfirmPassword');

function toggleVisibility(input, icon) {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
}

if (password && showPassword) {
    showPassword.addEventListener('click', () => toggleVisibility(password, showPassword));
}

if (confirmPassword && showConfirmPassword) {
    showConfirmPassword.addEventListener('click', () => toggleVisibility(confirmPassword, showConfirmPassword));
}
