// Función para mostrar los productos en la página
const showProducts = (productsToShow) => {
    cardsContent.innerHTML = '';

    productsToShow.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price} $</p>
        `;

        cardsContent.append(content);
    });
};

// Función para filtrar los productos por precio ascendente
const sortByPriceAscending = (products) => {
    return products.slice().sort((a, d) => a.price - d.price);
};

// Función para filtrar los productos por precio descendente
const sortByPriceDescending = (products) => {
    return products.slice().sort((a, d) => d.price - a.price);
};

// Función para manejar el cambio en el filtro de precios
const handlePriceFilterChange = () => {
    const selectedValue = priceFilter.value;
    let filteredProductsCopy;

    if (filteredProducts.length > 0) {
        filteredProductsCopy = [...filteredProducts];
    } else {
        filteredProductsCopy = [...products];
    }

    if (selectedValue === 'ascending') {
        filteredProductsCopy = sortByPriceAscending(filteredProductsCopy);
    } else if (selectedValue === 'descending') {
        filteredProductsCopy = sortByPriceDescending(filteredProductsCopy);
    }

    showProducts(filteredProductsCopy);
};

priceFilter.addEventListener('change', handlePriceFilterChange);




