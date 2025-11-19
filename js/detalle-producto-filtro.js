// Funcionalidad de la página de detalles del producto - Filtro de Aceite
document.addEventListener('DOMContentLoaded', () => {
  const quantityInput = document.getElementById('productQuantity');
  const quantityMinus = document.getElementById('quantityMinus');
  const quantityPlus = document.getElementById('quantityPlus');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // Control de cantidad
  if (quantityMinus) {
    quantityMinus.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value) || 1;
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  }

  if (quantityPlus) {
    quantityPlus.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value) || 1;
      quantityInput.value = currentValue + 1;
    });
  }

  // Validar input de cantidad
  if (quantityInput) {
    quantityInput.addEventListener('change', () => {
      const value = parseInt(quantityInput.value);
      if (isNaN(value) || value < 1) {
        quantityInput.value = 1;
      }
    });
  }

  // Agregar al carrito
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value) || 1;
      const product = {
        id: 4,
        name: "Filtro de Aceite de Motor Mann Filter para Jetta A4, New Beetle, Crafter, Passat B5 TDI",
        image: "https://refaccionariamario.info/38544-tm_large_default/filtro-de-aceite-de-motor-mann-filter-para-jetta-a4-new-beetle-crafter-passat-b5-tdi.jpg",
        price: 800
      };

      // Agregar la cantidad especificada
      for (let i = 0; i < quantity; i++) {
        CartManager.addProduct(product);
      }

      // Mostrar notificación
      const notification = document.createElement('div');
      notification.className = 'cart-notification';
      notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${quantity} producto(s) agregado(s) al carrito</span>
      `;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.classList.add('show');
      }, 10);

      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    });
  }

  // Tabs de información
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Remover active de todos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Agregar active al seleccionado
      button.classList.add('active');
      const targetPanel = document.getElementById(`${targetTab}-tab`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});

