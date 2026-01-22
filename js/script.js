function fetchApi() {
    const loading = document.querySelector(".loading");
    const errorMsg = document.querySelector(".error");

    loading.style.display = "block";
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => showProduct(data))
        .catch(error => { console.log(error); errorMsg.style.display = "block"; })
        .finally(() => loading.style.display = "none")


    const productContainer = document.querySelector(".products-container");

    function showProduct(data) {
        console.log(data);
        const cardCol = document.createElement("div");
        cardCol.classList = "row";
        cardCol.innerHTML = "";
        let imageSrc;

        data.forEach(element => {
            imageSrc = element.images[1] ?  element.images[0] : "https://placehold.co/400x400";
            cardCol.innerHTML += `
                <div class="column">
                <div class="item">
                    <img src= "${imageSrc}" alt="${element.slug}">
                    <div class="prod-details">
                        <h3 class="prod-title">${element.title}</h3>
                        <p class="prod-description">${element.description}</p>
                        <span class="prod-price">EGP ${element.price}</span>
                    </div>
                </div>
            </div>
    `
        });
        productContainer.appendChild(cardCol);
    }
}

fetchApi();