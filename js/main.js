// Carrusel Principal (Hero)
class HeroCarousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel-slide');
    this.dots = document.querySelectorAll('.carousel-dots .dot');
    this.prevBtn = document.querySelector('.carousel-prev');
    this.nextBtn = document.querySelector('.carousel-next');
    this.currentSlide = 0;
    this.autoPlayInterval = null;
    
    this.init();
  }

  init() {
    if (this.slides.length === 0) return;
    
    this.showSlide(this.currentSlide);
    this.setupEventListeners();
    this.startAutoPlay();
  }

  setupEventListeners() {
    // Botones de navegación
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Dots de navegación
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Pausar autoplay al hacer hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
      carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    }
  }

  showSlide(index) {
    // Ocultar todas las slides
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    // Mostrar la slide actual
    if (this.slides[index]) {
      this.slides[index].classList.add('active');
    }
    if (this.dots[index]) {
      this.dots[index].classList.add('active');
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.showSlide(this.currentSlide);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Carrusel de Reseñas
class ReviewsCarousel {
  constructor() {
    this.reviews = document.querySelectorAll('.review-card');
    this.prevBtn = document.querySelector('.review-prev');
    this.nextBtn = document.querySelector('.review-next');
    this.currentReview = 0;
    
    this.init();
  }

  init() {
    if (this.reviews.length === 0) return;
    
    this.showReview(this.currentReview);
    this.setupEventListeners();
  }

  setupEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevReview());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextReview());
    }
  }

  showReview(index) {
    // Ocultar todas las reseñas
    this.reviews.forEach(review => review.classList.remove('active'));

    // Mostrar la reseña actual
    if (this.reviews[index]) {
      this.reviews[index].classList.add('active');
    }
  }

  nextReview() {
    this.currentReview = (this.currentReview + 1) % this.reviews.length;
    this.showReview(this.currentReview);
  }

  prevReview() {
    this.currentReview = (this.currentReview - 1 + this.reviews.length) % this.reviews.length;
    this.showReview(this.currentReview);
  }
}

// Base de datos de productos
const productsDatabase = [
  {
    id: 1,
    name: "Kit de Afinación con Cambio de Aceite AC Delco para Tornado Van 1.5L",
    image: "https://refaccionariamario.info/135194-tm_large_default/kit-de-afinacion-con-cambio-de-aceite-ac-delco-para-tornado-van-15l.jpg",
    category: "Kit",
    keywords: ["kit", "afinación", "aceite", "ac delco", "tornado", "van"],
    vehicle: { año: "2022-2024", marca: "AC Delco", modelo: "Tornado Van" },
    autoparte: "kit afinación"
  },
  {
    id: 2,
    name: "Kit Frenos Traseros AP Racing PRO 5000R 355x32mm",
    image: "https://rieraracing.com/wp-content/uploads/Joc-complet-darrera-1-1024x683.jpg",
    category: "Frenos",
    keywords: ["kit", "frenos", "traseros", "ap racing", "pastillas"],
    vehicle: { año: "2007 - Presente", marca: "Volkswagen", modelo: "Golf" },
    autoparte: "frenos"
  },
  {
    id: 3,
    name: "Kit Distribucion Gm Aveo 1.6 C/bomba Agua 2008 - 2018",
    image: "https://http2.mlstatic.com/D_NQ_NP_659555-MLM71643202195_092023-O-kit-distribucion-gm-aveo-16-cbomba-agua-2008-2018.webp",
    category: "Kit",
    keywords: ["kit", "distribución", "gm", "aveo", "bomba", "agua", "distribucion"],
    vehicle: { año: "2008 - 2018", marca: "Chevrolet", modelo: "Aveo" },
    autoparte: "kit distribución"
  },
  {
    id: 4,
    name: "Filtro de Aceite de Motor Mann Filter para Jetta A4, New Beetle, Crafter, Passat B5 TDI",
    image: "https://refaccionariamario.info/38544-tm_large_default/filtro-de-aceite-de-motor-mann-filter-para-jetta-a4-new-beetle-crafter-passat-b5-tdi.jpg",
    category: "Filtros",
    keywords: ["filtro", "aceite", "premium", "original"],
    vehicle: { año: "1998-2012", marca: "Mann Filter", modelo: "Jetta A4" },
    autoparte: "filtro aceite"
  },
  {
    id: 5,
    name: "Balatas de Ceramica Duralast D1282",
    image: "https://contentinfo.autozone.com/znetcs/product-info/es/MX/epa/D1282/image/8/",
    category: "Frenos",
    keywords: ["pastillas", "freno", "delanteras", "cerámicas", "frenos", "duralast", "d1282"],
    vehicle: { año: "2019", marca: "Ford", modelo: "Focus" },
    autoparte: "pastillas freno"
  },
  {
    id: 6,
    name: "Bateria AGM Duralast Platinum 24F-AGM",
    image: "https://contentinfo.autozone.com/znetcs/product-info/es/MX/jcm/24F-AGM/image/8/",
    category: "Eléctrico",
    keywords: ["batería", "12v", "60ah", "libre", "mantenimiento", "eléctrico", "duralast", "platinum", "24f-agm"],
    vehicle: { año: "2022", marca: "Nissan", modelo: "Sentra" },
    autoparte: "batería"
  },
  {
    id: 7,
    name: "Amortiguador Trasero Original",
    image: "https://via.placeholder.com/300x200/E5E5E5/999999?text=AMORTIGUADOR",
    category: "Suspensión",
    keywords: ["amortiguador", "trasero", "original", "suspensión"],
    vehicle: { año: "2018", marca: "Volkswagen", modelo: "Jetta" },
    autoparte: "amortiguador"
  },
  {
    id: 8,
    name: "Bujía Iridium Premium 4 Pzas",
    image: "https://via.placeholder.com/300x200/E5E5E5/999999?text=BUJIA",
    category: "Motor",
    keywords: ["bujía", "iridium", "premium", "motor", "encendido"],
    vehicle: { año: "2020", marca: "Toyota", modelo: "Camry" },
    autoparte: "bujía"
  },
  {
    id: 9,
    name: "Radiador de Aluminio Original",
    image: "https://via.placeholder.com/300x200/E5E5E5/999999?text=RADIADOR",
    category: "Refrigeración",
    keywords: ["radiador", "aluminio", "original", "refrigeración", "agua"],
    vehicle: { año: "2017", marca: "Ford", modelo: "Fiesta" },
    autoparte: "radiador"
  },
  {
    id: 10,
    name: "Termostato Motor 82°C Original",
    image: "https://via.placeholder.com/300x200/E5E5E5/999999?text=TERMOSTATO",
    category: "Refrigeración",
    keywords: ["termostato", "motor", "82", "refrigeración", "temperatura"],
    vehicle: { año: "2019", marca: "Chevrolet", modelo: "Cruze" },
    autoparte: "termostato"
  },
  {
    id: 11,
    name: "Bobina de Encendido Alta Potencia",
    image: "https://via.placeholder.com/300x200/E5E5E5/999999?text=BOBINA",
    category: "Eléctrico",
    keywords: ["bobina", "encendido", "alta", "potencia", "eléctrico"],
    vehicle: { año: "2021", marca: "Nissan", modelo: "Versa" },
    autoparte: "bobina"
  },
  {
    id: 12,
    name: "Aceite Motor Sintético 5W-30 4L",
    image: "https://via.placeholder.com/300x200/E5E5E5/999999?text=ACEITE",
    category: "Lubricantes",
    keywords: ["aceite", "motor", "sintético", "5w-30", "lubricante"],
    vehicle: { año: "2023", marca: "Toyota", modelo: "RAV4" },
    autoparte: "aceite"
  }
];

// Función para filtrar productos por vehículo
function filterProductsByVehicle(filters) {
  let results = productsDatabase;
  
  // Filtrar por año
  if (filters.año && filters.año.trim() !== '') {
    results = results.filter(product => 
      product.vehicle && product.vehicle.año === filters.año
    );
  }
  
  // Filtrar por marca
  if (filters.marca && filters.marca.trim() !== '') {
    results = results.filter(product => 
      product.vehicle && product.vehicle.marca.toLowerCase() === filters.marca.toLowerCase()
    );
  }
  
  // Filtrar por modelo
  if (filters.modelo && filters.modelo.trim() !== '') {
    const modeloTerm = filters.modelo.toLowerCase().trim();
    results = results.filter(product => 
      product.vehicle && product.vehicle.modelo.toLowerCase().includes(modeloTerm)
    );
  }
  
  // Filtrar por autoparte
  if (filters.autoparte && filters.autoparte.trim() !== '') {
    const autoparteTerm = filters.autoparte.toLowerCase().trim();
    results = results.filter(product => 
      product.autoparte && product.autoparte.toLowerCase().includes(autoparteTerm)
    );
  }
  
  return results;
}

// Función para buscar productos
function searchProducts(query, vehicleFilters = null) {
  let results = productsDatabase;
  
  // Si hay filtros de vehículo, aplicarlos primero
  if (vehicleFilters) {
    results = filterProductsByVehicle(vehicleFilters);
  }
  
  // Si hay query de búsqueda, aplicarla
  if (query && query.trim() !== '') {
    const searchTerm = query.toLowerCase().trim();
    
    results = results.filter(product => {
      // Buscar en el nombre
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      
      // Buscar en las palabras clave
      const keywordsMatch = product.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm)
      );
      
      // Buscar en la categoría
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      
      return nameMatch || keywordsMatch || categoryMatch;
    });
  }
  
  return results;
}

// Constante para productos por página
const PRODUCTS_PER_PAGE = 6;

// Función para renderizar productos con paginación
function renderProducts(products, container, currentPage = 1) {
  if (!container) return;
  
  container.innerHTML = '';
  
  if (products.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search" style="font-size: 48px; color: var(--text-light); margin-bottom: 20px;"></i>
        <h3>No se encontraron productos</h3>
        <p>Intenta con otros términos de búsqueda</p>
      </div>
    `;
    return { totalPages: 0, currentPage: 1 };
  }
  
  // Calcular paginación
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productsToShow = products.slice(startIndex, endIndex);
  
  // Renderizar productos de la página actual
  productsToShow.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <h3 class="product-name">${product.name}</h3>
      <button class="product-details-btn">DETALLES</button>
    `;
    container.appendChild(productCard);
  });
  
  // Re-inicializar los botones de detalles
  initProductButtons();
  
  return { totalPages, currentPage, totalProducts: products.length };
}

// Funcionalidad de búsqueda
function initSearch() {
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');
  const productsGrid = document.getElementById('products-grid');
  const catalogTitle = document.getElementById('catalog-title');
  const catalogSubtitle = document.getElementById('catalog-subtitle');
  const searchResultsInfo = document.getElementById('search-results-info');
  const searchResultsText = document.getElementById('search-results-text');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  // Verificar si estamos en la página de productos
  const isProductsPage = productsGrid !== null;

  // Cargar parámetros de búsqueda de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('q');
  const currentPage = parseInt(urlParams.get('page')) || 1;
  const vehicleFilters = {
    año: urlParams.get('año') || '',
    marca: urlParams.get('marca') || '',
    modelo: urlParams.get('modelo') || '',
    autoparte: urlParams.get('autoparte') || ''
  };
  
  // Cargar filtros de vehículo en los campos si estamos en productos.html
  if (isProductsPage) {
    const añoSelect = document.querySelector('.filter-pill:nth-child(1) .filter-select');
    const marcaSelect = document.querySelector('.filter-pill:nth-child(2) .filter-select');
    const modeloInput = document.querySelector('.filter-pill:nth-child(3) .filter-input');
    const autoparteInput = document.querySelector('.filter-pill:nth-child(4) .filter-input');
    
    if (vehicleFilters.año && añoSelect) añoSelect.value = vehicleFilters.año;
    if (vehicleFilters.marca && marcaSelect) marcaSelect.value = vehicleFilters.marca;
    if (vehicleFilters.modelo && modeloInput) modeloInput.value = vehicleFilters.modelo;
    if (vehicleFilters.autoparte && autoparteInput) autoparteInput.value = vehicleFilters.autoparte;
  }
  
  if ((searchQuery || Object.values(vehicleFilters).some(v => v)) && isProductsPage) {
    if (searchInput) searchInput.value = searchQuery || '';
    performSearch(searchQuery || '', vehicleFilters, currentPage);
  } else if (isProductsPage) {
    // Renderizar todos los productos si no hay búsqueda
    const paginationInfo = renderProducts(productsDatabase, productsGrid, currentPage);
    updatePagination(paginationInfo, currentPage);
  }

  function performSearch(query, filters = null, page = 1) {
    const results = searchProducts(query, filters);
    
    if (isProductsPage && productsGrid) {
      const paginationInfo = renderProducts(results, productsGrid, page);
      updatePagination(paginationInfo, page);
      
      // Construir texto de búsqueda
      const hasQuery = query && query.trim() !== '';
      const hasFilters = filters && Object.values(filters).some(v => v && v.trim() !== '');
      
      if (hasQuery || hasFilters) {
        let searchText = '';
        if (hasQuery) {
          searchText = `"${query}"`;
        }
        if (hasFilters) {
          const filterParts = [];
          if (filters.año) filterParts.push(`${filters.año}`);
          if (filters.marca) filterParts.push(filters.marca);
          if (filters.modelo) filterParts.push(filters.modelo);
          if (filters.autoparte) filterParts.push(filters.autoparte);
          if (filterParts.length > 0) {
            searchText = searchText ? `${searchText} - ${filterParts.join(' ')}` : filterParts.join(' ');
          }
        }
        
        catalogTitle.textContent = `Resultados de búsqueda: ${searchText}`;
        catalogSubtitle.textContent = `Se encontraron ${results.length} producto(s)`;
        if (searchResultsInfo) searchResultsInfo.style.display = 'block';
        if (searchResultsText) searchResultsText.textContent = `Mostrando ${paginationInfo.totalProducts} resultado(s)`;
      } else {
        catalogTitle.textContent = 'Catálogo Completo de Productos';
        catalogSubtitle.textContent = 'Explora nuestra amplia gama de refacciones y autopartes de calidad';
        if (searchResultsInfo) searchResultsInfo.style.display = 'none';
      }
    }
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      
      if (isProductsPage) {
        // Si estamos en productos.html, obtener filtros actuales
        const currentFilters = getVehicleFilterValues();
        performSearch(query, currentFilters, 1); // Resetear a página 1 en nueva búsqueda
        // Actualizar URL sin recargar
        updateProductsURL(query, currentFilters, 1);
      } else {
        // Si estamos en index.html, redirigir a productos.html con parámetros
        const currentFilters = getVehicleFilterValues();
        const url = buildProductsURL(query, currentFilters, 1);
        window.location.href = url;
      }
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  }

  // Botón para limpiar búsqueda
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      
      // Limpiar filtros de vehículo
      const añoSelect = document.querySelector('.filter-pill:nth-child(1) .filter-select');
      const marcaSelect = document.querySelector('.filter-pill:nth-child(2) .filter-select');
      const modeloInput = document.querySelector('.filter-pill:nth-child(3) .filter-input');
      const autoparteInput = document.querySelector('.filter-pill:nth-child(4) .filter-input');
      
      if (añoSelect) añoSelect.value = '';
      if (marcaSelect) marcaSelect.value = '';
      if (modeloInput) modeloInput.value = '';
      if (autoparteInput) autoparteInput.value = '';
      
      performSearch('', null, 1);
      window.history.pushState({}, '', 'productos.html');
    });
  }
}

// Función auxiliar para obtener valores de filtros de vehículo
function getVehicleFilterValues() {
  const añoSelect = document.querySelector('.filter-pill:nth-child(1) .filter-select');
  const marcaSelect = document.querySelector('.filter-pill:nth-child(2) .filter-select');
  const modeloInput = document.querySelector('.filter-pill:nth-child(3) .filter-input');
  const autoparteInput = document.querySelector('.filter-pill:nth-child(4) .filter-input');
  
  return {
    año: añoSelect?.value || '',
    marca: marcaSelect?.value || '',
    modelo: modeloInput?.value || '',
    autoparte: autoparteInput?.value || ''
  };
}

// Función para construir URL de productos con parámetros
function buildProductsURL(query, filters, page = 1) {
  const params = new URLSearchParams();
  
  if (query && query.trim() !== '') {
    params.append('q', query.trim());
  }
  
  if (filters) {
    if (filters.año && filters.año.trim() !== '') {
      params.append('año', filters.año.trim());
    }
    if (filters.marca && filters.marca.trim() !== '') {
      params.append('marca', filters.marca.trim());
    }
    if (filters.modelo && filters.modelo.trim() !== '') {
      params.append('modelo', filters.modelo.trim());
    }
    if (filters.autoparte && filters.autoparte.trim() !== '') {
      params.append('autoparte', filters.autoparte.trim());
    }
  }
  
  if (page > 1) {
    params.append('page', page.toString());
  }
  
  const queryString = params.toString();
  return queryString ? `productos.html?${queryString}` : 'productos.html';
}

// Función para actualizar URL sin recargar
function updateProductsURL(query, filters, page = 1) {
  const url = buildProductsURL(query, filters, page);
  window.history.pushState({}, '', url);
}

// Función para actualizar la paginación visual
function updatePagination(paginationInfo, currentPage) {
  const paginationContainer = document.querySelector('.pagination');
  if (!paginationContainer || paginationInfo.totalPages === 0) {
    if (paginationContainer) paginationContainer.style.display = 'none';
    return;
  }
  
  paginationContainer.style.display = 'flex';
  paginationContainer.innerHTML = '';
  
  const totalPages = paginationInfo.totalPages;
  const page = currentPage || paginationInfo.currentPage;
  
  // Botón Anterior
  if (page > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.textContent = '← Anterior';
    prevBtn.addEventListener('click', () => {
      goToPage(page - 1);
    });
    paginationContainer.appendChild(prevBtn);
  }
  
  // Botones de página
  const maxVisiblePages = 5;
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  if (startPage > 1) {
    const firstBtn = document.createElement('button');
    firstBtn.className = 'pagination-btn';
    firstBtn.textContent = '1';
    firstBtn.addEventListener('click', () => goToPage(1));
    paginationContainer.appendChild(firstBtn);
    
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.textContent = '...';
      paginationContainer.appendChild(ellipsis);
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = 'pagination-btn';
    if (i === page) {
      pageBtn.classList.add('active');
    }
    pageBtn.textContent = i.toString();
    pageBtn.addEventListener('click', () => goToPage(i));
    paginationContainer.appendChild(pageBtn);
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.textContent = '...';
      paginationContainer.appendChild(ellipsis);
    }
    
    const lastBtn = document.createElement('button');
    lastBtn.className = 'pagination-btn';
    lastBtn.textContent = totalPages.toString();
    lastBtn.addEventListener('click', () => goToPage(totalPages));
    paginationContainer.appendChild(lastBtn);
  }
  
  // Botón Siguiente
  if (page < totalPages) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.textContent = 'Siguiente →';
    nextBtn.addEventListener('click', () => {
      goToPage(page + 1);
    });
    paginationContainer.appendChild(nextBtn);
  }
}

// Función para navegar a una página específica
function goToPage(page) {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('q') || '';
  const vehicleFilters = {
    año: urlParams.get('año') || '',
    marca: urlParams.get('marca') || '',
    modelo: urlParams.get('modelo') || '',
    autoparte: urlParams.get('autoparte') || ''
  };
  
  // Construir nueva URL con la página
  const url = buildProductsURL(searchQuery, vehicleFilters, page);
  window.location.href = url;
}

// Función para poblar el select de años
function populateYearSelect() {
  const yearSelects = document.querySelectorAll('.filter-pill:first-child .filter-select');
  
  yearSelects.forEach(select => {
    // Limpiar opciones existentes excepto la primera
    const firstOption = select.querySelector('option[value=""]');
    select.innerHTML = '';
    if (firstOption) {
      select.appendChild(firstOption);
    } else {
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Selecciona un año';
      select.appendChild(defaultOption);
    }
    
    // Agregar años del 2000 al 2026 (en orden descendente)
    for (let year = 2026; year >= 2000; year--) {
      const option = document.createElement('option');
      option.value = year.toString();
      option.textContent = year.toString();
      select.appendChild(option);
    }
  });
}

// Funcionalidad de filtros de vehículo
function initVehicleFilters() {
  // Poblar los selects de año
  populateYearSelect();
  
  // Obtener todos los elementos de filtro (selects e inputs)
  const filterInputs = document.querySelectorAll('.filter-pill .filter-input');
  const filterSelects = document.querySelectorAll('.filter-pill .filter-select');
  
  // Función para aplicar filtros y redirigir
  function applyFiltersAndSearch() {
    const filters = getVehicleFilterValues();
    
    // Verificar si hay al menos un filtro seleccionado
    const hasFilters = filters.año || filters.marca || filters.modelo || filters.autoparte;
    
    if (hasFilters) {
      // Redirigir a productos.html con los filtros
      const url = buildProductsURL('', filters);
      window.location.href = url;
    } else {
      // Si no hay filtros, ir a productos.html sin parámetros
      window.location.href = 'productos.html';
    }
  }
  
  // Botón de búsqueda de filtros
  const filterSearchBtn = document.getElementById('filter-search-btn');
  if (filterSearchBtn) {
    filterSearchBtn.addEventListener('click', () => {
      applyFiltersAndSearch();
    });
  }
  
  // Agregar eventos a los inputs (Enter) - también redirige
  filterInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        applyFiltersAndSearch();
      }
    });
  });
  
  // Si estamos en productos.html, los selects también deben actualizar la búsqueda
  const isProductsPage = document.getElementById('products-grid') !== null;
  if (isProductsPage) {
    filterSelects.forEach(select => {
      select.addEventListener('change', () => {
        const filters = getVehicleFilterValues();
        const searchInput = document.querySelector('.search-input');
        const query = searchInput ? searchInput.value.trim() : '';
        
        // Actualizar búsqueda en la misma página
        const results = searchProducts(query, filters);
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
          const urlParams = new URLSearchParams(window.location.search);
          const currentPage = parseInt(urlParams.get('page')) || 1;
          const paginationInfo = renderProducts(results, productsGrid, currentPage);
          updatePagination(paginationInfo, currentPage);
          updateProductsURL(query, filters, currentPage);
        }
      });
    });
  }
}

// Funcionalidad de botones de producto
function initProductButtons() {
  const detailButtons = document.querySelectorAll('.product-details-btn');
  
  detailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      
      // Buscar el producto en la base de datos
      const product = productsDatabase.find(p => p.name === productName);
      
      if (product) {
        // Redirigir a la página de detalles según el ID del producto
        if (product.id === 1) {
          window.location.href = 'detalle-producto.html';
        } else if (product.id === 2) {
          window.location.href = 'detalle-producto-frenos.html';
        } else if (product.id === 3) {
          window.location.href = 'detalle-producto-distribucion.html';
        } else if (product.id === 4) {
          window.location.href = 'detalle-producto-filtro.html';
        } else if (product.id === 5) {
          window.location.href = 'detalle-producto-balatas.html';
        } else if (product.id === 6) {
          window.location.href = 'detalle-producto-bateria.html';
        } else {
          // Para otros productos, redirigir a la página principal de detalles
          window.location.href = 'detalle-producto.html';
        }
      } else {
        // Si no se encuentra el producto, redirigir a la página principal de detalles
        window.location.href = 'detalle-producto.html';
      }
    });
  });
}

// Funcionalidad de botones de contacto
function initContactButtons() {
  const contactButtons = document.querySelectorAll('.contact-btn');
  
  contactButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent.trim();
      console.log('Acción:', buttonText);
      // Aquí se puede agregar la lógica de contacto
      if (buttonText.includes('FORMULARIO')) {
        alert('Abrir formulario de contacto');
      } else {
        alert('Llamar al: +52 55 1234 5678');
      }
    });
  });
}

// Funcionalidad de paginación (ya no es necesaria, se maneja dinámicamente)
// La paginación ahora se genera dinámicamente en updatePagination()

// Sistema de gestión de autenticación
const AuthManager = {
  // Verificar si el usuario está autenticado
  isAuthenticated: () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  },

  // Establecer usuario como autenticado
  setAuthenticated: (value) => {
    localStorage.setItem('isAuthenticated', value ? 'true' : 'false');
    updateAuthUI();
  },

  // Cerrar sesión
  logout: () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    updateAuthUI();
  }
};

// Sistema de gestión del carrito
const CartManager = {
  // Obtener carrito del localStorage
  getCart: () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  },

  // Guardar carrito en localStorage
  saveCart: (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
  },

  // Agregar producto al carrito
  addProduct: (product) => {
    const cart = CartManager.getCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

    CartManager.saveCart(cart);
    return cart;
  },

  // Eliminar producto del carrito
  removeProduct: (productId) => {
    const cart = CartManager.getCart();
    const filteredCart = cart.filter(item => item.id !== productId);
    CartManager.saveCart(filteredCart);
    return filteredCart;
  },

  // Actualizar cantidad de un producto
  updateQuantity: (productId, quantity) => {
    const cart = CartManager.getCart();
    const product = cart.find(item => item.id === productId);
    
    if (product) {
      if (quantity <= 0) {
        return CartManager.removeProduct(productId);
      }
      product.quantity = quantity;
    }

    CartManager.saveCart(cart);
    return cart;
  },

  // Obtener total de items en el carrito
  getTotalItems: () => {
    const cart = CartManager.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Obtener total del precio
  getTotalPrice: () => {
    const cart = CartManager.getCart();
    return cart.reduce((total, item) => {
      const price = item.price || 0;
      return total + (price * item.quantity);
    }, 0);
  },

  // Limpiar carrito
  clearCart: () => {
    CartManager.saveCart([]);
  }
};

// Función para actualizar el badge del carrito
function updateCartBadge() {
  const cartBadge = document.querySelector('.cart-badge');
  if (cartBadge) {
    const totalItems = CartManager.getTotalItems();
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

// Función para actualizar la UI según el estado de autenticación
function updateAuthUI() {
  const isAuthenticated = AuthManager.isAuthenticated();
  
  // Buscar todos los enlaces de login y cuenta en el header
  const headerActions = document.querySelector('.header-actions');
  if (!headerActions) return;
  
  const loginLinks = headerActions.querySelectorAll('a[href*="login"], a[href="login.html"]');
  const accountLinks = headerActions.querySelectorAll('a[href*="cuenta"], a[href="cuenta.html"]');
  
  // Actualizar enlaces de login
  loginLinks.forEach(link => {
    if (isAuthenticated) {
      link.style.display = 'none';
    } else {
      link.style.display = 'inline-block';
    }
  });
  
  // Actualizar enlaces de cuenta
  accountLinks.forEach(link => {
    if (isAuthenticated) {
      link.style.display = 'inline-block';
    } else {
      link.style.display = 'none';
    }
  });
  
  // Asegurar que el carrito siempre esté visible
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
    cartIcon.style.display = 'inline-block';
  }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Actualizar UI de autenticación
  updateAuthUI();
  
  // Actualizar badge del carrito
  updateCartBadge();
  
  // Inicializar carruseles (solo si existen los elementos)
  if (document.querySelector('.carousel-slide')) {
    new HeroCarousel();
  }
  if (document.querySelector('.review-card')) {
    new ReviewsCarousel();
  }
  
  // Inicializar funcionalidades
  initSearch();
  initVehicleFilters();
  initProductButtons();
  initContactButtons();
  
  console.log('AUTOFIX - Página inicializada correctamente');
});

