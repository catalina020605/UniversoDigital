const searchInput = document.getElementById("searcher");

let filteredProducts = []; 

const filterProducts = (query) => {
  filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  });
  return filteredProducts;
};

const displayFilteredProducts = (filteredProducts) => {
  cardsContent.innerHTML = "";

  filteredProducts.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>${product.price} $</p>
    `;

    cardsContent.appendChild(content);

    let buy = document.createElement("button");
    buy.innerText = "Comprar";
    buy.className = "buy";

    content.appendChild(buy);

    //buy.addEventListener("click", () => {
    //});
  });
};

searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  const filteredProducts = filterProducts(query);
  displayFilteredProducts(filteredProducts);
});


