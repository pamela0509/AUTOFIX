// Funcionalidad de la página de login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const passwordToggle = document.getElementById('passwordToggle');
  const passwordInput = document.getElementById('password');

  // Toggle para mostrar/ocultar contraseña
  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      const icon = passwordToggle.querySelector('i');
      if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    });
  }

  // Manejar envío del formulario
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const remember = document.querySelector('input[name="remember"]').checked;

      // Validación básica
      if (!email || !password) {
        alert('Por favor, completa todos los campos');
        return;
      }

      // Simular inicio de sesión
      console.log('Iniciando sesión...', { email, remember });
      
      // Establecer usuario como autenticado
      if (typeof AuthManager !== 'undefined') {
        AuthManager.setAuthenticated(true);
        localStorage.setItem('userEmail', email);
      }
      
      // Mostrar mensaje de éxito y redirigir
      alert('¡Bienvenido! Iniciando sesión...');
      window.location.href = 'cuenta.html';
    });
  }

  // Botones de login social
  const socialButtons = document.querySelectorAll('.social-btn');
  socialButtons.forEach(button => {
    button.addEventListener('click', () => {
      const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
      alert(`Iniciando sesión con ${provider} (funcionalidad próximamente)`);
    });
  });

  // Enlace de olvidé contraseña
  const forgotPasswordLink = document.querySelector('.forgot-password');
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Funcionalidad de recuperación de contraseña (próximamente)');
    });
  }
});

