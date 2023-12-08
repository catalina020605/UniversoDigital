const paintCar = () => {

    modalContent.innerHTML = "";
    modalContent.style.display = "flex";
    const modal = document.createElement("div");
    modal.className = "modal-car"
    modal.innerHTML = `
        <h1 class="modal-car-title">Carrito</h1>
    `;
    modalContent.append(modal);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "✖️";
    modalbutton.className = "modal-close-button";

    modalbutton.addEventListener("click", () => {
        modalContent.style.display = "none";
    })

    modalContent.append(modalbutton);

    const clearCar = document.createElement("h1");
    clearCar.innerText = "🧹";
    clearCar.classList = "carClear";

    if (clearCar) {
        clearCar.addEventListener("click", () => {
            carShop = [];
            saveLocal();
            paintCar();

            // Limpia el carrito y actualiza el contador a cero
            updateCartCounter(0);
        });
    }

    modalContent.append(clearCar);

    carShop.forEach((product) => {

        let carContent = document.createElement("div");
        carContent.className = "modal-content";
        carContent.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price} $</p>
        <span class="rest"> - </span>
        <p>Cantidad: ${product.quantity}</p>
        <span class="sum"> + </span>
        <p>Total: ${product.quantity * product.price}</p>
        `;

        modalContent.append(carContent);

        let rest = carContent.querySelector(".rest");
        rest.addEventListener("click", () => {
            if (product.quantity != 1) {
                product.quantity--;
            }
            saveLocal();
            paintCar();
        })

        let sum = carContent.querySelector(".sum");
        sum.addEventListener("click", () => {
            product.quantity++;
            saveLocal();
            paintCar();
        })

        console.log(carShop.length);

        let drop = document.createElement("span")
        drop.innerText = "🗑️";
        drop.className = "delete-product";
        carContent.append(drop);

        drop.addEventListener("click", dropProduct);
    });


    const total = carShop.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const totalBuy = document.createElement("div");
    totalBuy.className = "total-content"
    totalBuy.innerHTML = `Total a pagar: ${total} $`

    modalContent.append(totalBuy);

};

seeCar.addEventListener("click", paintCar);

const dropProduct = () => {
    const foundId = carShop.find((element) => element.id);

    carShop = carShop.filter((carShopId) => {
        return carShopId !== foundId;
    })
    carCountent();
    saveLocal();
    paintCar();
};

const carCountent = () => {
    quantityCar.style.display = "block";

    const carLength = carShop.length;

    localStorage.setItem("CarCount", JSON.stringify(carLength));

    quantityCar.innerText = JSON.parse(localStorage.getItem("CarCount"));

    if (carLength === 0) {
        updateCartCounter(0);
    }
};

const updateCartCounter = (count) => {
    quantityCar.innerText = count;
    localStorage.setItem("CarCount", count);
};

carCountent();