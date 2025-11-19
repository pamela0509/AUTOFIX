// Funcionalidad de la página de registro
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const passwordToggle = document.getElementById('passwordToggle');
  const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  // Toggle para mostrar/ocultar contraseña
  function setupPasswordToggle(toggle, input) {
    if (toggle && input) {
      toggle.addEventListener('click', () => {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        
        const icon = toggle.querySelector('i');
        if (type === 'password') {
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
        } else {
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
        }
      });
    }
  }

  setupPasswordToggle(passwordToggle, passwordInput);
  setupPasswordToggle(confirmPasswordToggle, confirmPasswordInput);

  // Validación de contraseñas
  function validatePasswords() {
    if (passwordInput && confirmPasswordInput) {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (confirmPassword && password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity('Las contraseñas no coinciden');
        confirmPasswordInput.style.borderColor = '#ea4335';
      } else {
        confirmPasswordInput.setCustomValidity('');
        confirmPasswordInput.style.borderColor = '';
      }
    }
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', validatePasswords);
  }

  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', validatePasswords);
  }

  // Manejar envío del formulario
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const terms = document.querySelector('input[name="terms"]').checked;
      const newsletter = document.querySelector('input[name="newsletter"]').checked;

      // Validación básica
      if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        alert('Por favor, completa todos los campos obligatorios');
        return;
      }

      if (!terms) {
        alert('Debes aceptar los Términos y Condiciones para continuar');
        return;
      }

      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
      }

      // Simular registro
      console.log('Registrando usuario...', { 
        firstName, 
        lastName, 
        email, 
        phone, 
        newsletter 
      });
      
      // Establecer usuario como autenticado después del registro
      if (typeof AuthManager !== 'undefined') {
        AuthManager.setAuthenticated(true);
        localStorage.setItem('userEmail', email);
      }
      
      // Mostrar mensaje de éxito y redirigir
      alert('¡Cuenta creada exitosamente! Redirigiendo...');
      window.location.href = 'cuenta.html';
    });
  }

  // Botones de registro social
  const socialButtons = document.querySelectorAll('.social-btn');
  socialButtons.forEach(button => {
    button.addEventListener('click', () => {
      const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
      alert(`Registro con ${provider} (funcionalidad próximamente)`);
    });
  });

  // Enlaces de términos y condiciones
  const termsLinks = document.querySelectorAll('.link-inline');
  termsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Términos y Condiciones / Política de Privacidad (próximamente)');
    });
  });
});

