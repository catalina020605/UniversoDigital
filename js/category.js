// Obtener referencia al select de categorías
const categoryFilter = document.getElementById("categoryFilter");

// Manejar el cambio en la selección de categoría
categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;

    // Mostrar u ocultar tarjetas según la categoría seleccionada
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const cardCategory = card.dataset.category;
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
