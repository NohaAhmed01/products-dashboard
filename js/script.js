document.querySelector(".loading").style.display = "block";
fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => showProduct(data))
    .catch(error => {console.log(error); document.querySelector(".error").style.display = "block";})
    .finally(()=> document.querySelector(".loading").style.display = "none")


const productContainer = document.querySelector(".products-container");

function showProduct(data) {
    console.log(data);
    const cardCol = document.createElement("div");
    cardCol.classList = "row";
    cardCol.innerHTML = "";
    data.forEach(element => {
        cardCol.innerHTML += `
                <div class="column">
                <div class="item">
                    <img src= "${element.images[0]}" alt="${element.slug}">
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