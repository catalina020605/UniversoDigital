const cardsContent = document.getElementById("shopContent");
const seeCar = document.getElementById("seeCar");
const modalContent = document.getElementById("modalContent")
const quantityCar = document.getElementById("quantityCar")


let carShop = JSON.parse(localStorage.getItem("Carrito")) || [];

products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.dataset.category = product.category;
    content.dataset.quantity = product.quantity;
    content.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>${product.price} $</p>
    <p>Stock: <span id="quantity_${product.id}">${product.quantity}</span></p>
`;

    cardsContent.append(content);

    let buy = document.createElement("button")
    buy.innerText = "Agregar al carrito";
    buy.className = "buy";

    content.append(buy)

    // Dentro del evento click del botón de compra
    buy.addEventListener("click", () => {
        const repeat = carShop.some((repeatProduct) => repeatProduct.id === product.id);
        const productInStock = products.find((prod) => prod.id === product.id);
        const quantityElement = document.getElementById(`quantity_${product.id}`);

        if (productInStock.quantity > 0) {
            if (repeat) {
                carShop.map((prod) => {
                    if (prod.id === product.id && productInStock.quantity > 0) {
                        prod.quantity++;
                        productInStock.quantity--;
                        quantityElement.innerText = productInStock.quantity; // Actualizar stock en el HTML
                    }
                });
            } else {
                carShop.push({
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
                productInStock.quantity--;
                quantityElement.innerText = productInStock.quantity; // Actualizar stock en el HTML
            }
            carCountent();
            saveLocal();
        } else {
            alert("Producto agotado");
        }
    });

});

const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(carShop));
    console.log("Carrito guardado en el almacenamiento local:", carShop);
};