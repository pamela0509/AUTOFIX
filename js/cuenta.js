// Funcionalidad de la página de cuenta
document.addEventListener('DOMContentLoaded', () => {
  // Verificar si el usuario está autenticado
  if (typeof AuthManager !== 'undefined' && !AuthManager.isAuthenticated()) {
    alert('Por favor, inicia sesión para acceder a tu cuenta');
    window.location.href = 'login.html';
    return;
  }

  const menuItems = document.querySelectorAll('.account-menu-item');
  const panels = document.querySelectorAll('.account-panel');

  // Manejar clics en el menú
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section');
      
      // Si es cerrar sesión, mostrar confirmación
      if (section === 'logout') {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
          // Cerrar sesión usando AuthManager
          if (typeof AuthManager !== 'undefined') {
            AuthManager.logout();
          }
          alert('Sesión cerrada. Redirigiendo...');
          window.location.href = 'index.html';
        }
        return;
      }

      // Remover clase active de todos los items y panels
      menuItems.forEach(mi => mi.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Agregar clase active al item seleccionado
      item.classList.add('active');

      // Mostrar el panel correspondiente
      const targetPanel = document.getElementById(`${section}-panel`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Manejar envío de formularios
  const forms = document.querySelectorAll('.account-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cambios guardados correctamente');
    });
  });

  // Manejar botones de direcciones
  const editButtons = document.querySelectorAll('.address-btn.edit');
  editButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Funcionalidad de editar dirección (próximamente)');
    });
  });

  const deleteButtons = document.querySelectorAll('.address-btn.delete');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que deseas eliminar esta dirección?')) {
        alert('Dirección eliminada');
      }
    });
  });

  // Botón agregar dirección
  const addAddressBtn = document.querySelector('.add-address');
  if (addAddressBtn) {
    addAddressBtn.addEventListener('click', () => {
      alert('Funcionalidad de agregar dirección (próximamente)');
    });
  }

  // Botones de pedidos
  const orderButtons = document.querySelectorAll('.order-card .account-btn');
  orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const orderCard = btn.closest('.order-card');
      const orderNumber = orderCard.querySelector('.order-number').textContent;
      alert(`Ver detalles de ${orderNumber}`);
    });
  });

  // Botones establecer dirección principal
  const setPrimaryButtons = document.querySelectorAll('.address-card .account-btn.secondary');
  setPrimaryButtons.forEach(btn => {
    if (btn.textContent.includes('Establecer')) {
      btn.addEventListener('click', () => {
        alert('Dirección establecida como principal');
      });
    }
  });
});

