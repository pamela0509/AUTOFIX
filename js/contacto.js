// Validación y manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  // Validación en tiempo real
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    input.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        validateField(this);
      }
    });
  });

  // Validación del checkbox de privacidad
  const privacidadCheckbox = document.getElementById('privacidad');
  privacidadCheckbox.addEventListener('change', function() {
    validateField(this);
  });

  // Manejo del envío del formulario
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validar todos los campos
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    // Validar checkbox de privacidad
    if (!validateField(privacidadCheckbox)) {
      isValid = false;
    }

    if (isValid) {
      // Simular envío del formulario
      submitForm();
    } else {
      // Scroll al primer error
      const firstError = contactForm.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
    }
  });

  // Función de validación de campos
  function validateField(field) {
    const fieldId = field.id;
    const errorElement = document.getElementById(fieldId + 'Error');
    let isValid = true;
    let errorMessage = '';

    // Remover clases de error previas
    field.classList.remove('error');
    if (errorElement) {
      errorElement.textContent = '';
    }

    // Validar campo requerido
    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
      errorMessage = 'Este campo es obligatorio';
    }

    // Validaciones específicas por tipo de campo
    if (field.value.trim() && field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
        errorMessage = 'Por favor, ingresa un correo electrónico válido';
      }
    }

    if (field.value.trim() && field.type === 'tel') {
      const phoneRegex = /^[\d\s\(\)\+\-]{10,}$/;
      if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
        isValid = false;
        errorMessage = 'Por favor, ingresa un número de teléfono válido';
      }
    }

    if (field.value.trim() && field.id === 'mensaje') {
      if (field.value.trim().length < 10) {
        isValid = false;
        errorMessage = 'El mensaje debe tener al menos 10 caracteres';
      }
    }

    // Validar checkbox
    if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
      isValid = false;
      errorMessage = 'Debes aceptar la política de privacidad';
    }

    // Mostrar error si existe
    if (!isValid) {
      field.classList.add('error');
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    }

    return isValid;
  }

  // Función para enviar el formulario
  function submitForm() {
    // Mostrar estado de carga
    const submitBtn = contactForm.querySelector('.contact-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    // Simular envío (en producción, aquí harías una petición AJAX al servidor)
    setTimeout(() => {
      // Ocultar formulario y mostrar mensaje de éxito
      contactForm.style.display = 'none';
      successMessage.style.display = 'block';
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Guardar datos en localStorage (opcional, para desarrollo)
      const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        asunto: document.getElementById('asunto').value,
        mensaje: document.getElementById('mensaje').value,
        fecha: new Date().toISOString()
      };

      // Guardar en localStorage (solo para desarrollo/demo)
      let contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      contactSubmissions.push(formData);
      localStorage.setItem('contactSubmissions', JSON.stringify(contactSubmissions));

      // Restaurar botón (por si el usuario quiere enviar otro mensaje)
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Opcional: Resetear formulario después de 5 segundos
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        successMessage.style.display = 'none';
      }, 5000);
    }, 1500);
  }

  // Manejo del botón de limpiar
  const resetBtn = contactForm.querySelector('.contact-reset-btn');
  resetBtn.addEventListener('click', function() {
    // Limpiar errores
    contactForm.querySelectorAll('.error').forEach(field => {
      field.classList.remove('error');
    });
    contactForm.querySelectorAll('.error-message').forEach(error => {
      error.textContent = '';
    });
    successMessage.style.display = 'none';
  });
});

