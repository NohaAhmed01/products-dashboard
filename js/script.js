let products = [];
const productContainer = document.querySelector(".products-container");

function fetchApi() {
    const loading = document.querySelector(".loading");
    const errorMsg = document.querySelector(".error");

    loading.style.display = "block";
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {showProduct(data); products=data; console.log("I am in fetch api function and this is the prod array: ", products)})
        .catch(error => { console.log(error); errorMsg.style.display = "block"; })
        .finally(() => loading.style.display = "none")

}

fetchApi();

function showProduct(data) {
    console.log("I am in show product function and this is the filtered/whole array: ", data);
    const cardCol = document.createElement("div");
    cardCol.classList = "row";
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
    productContainer.innerHTML = "";
    productContainer.appendChild(cardCol);
}
const searchbox = document.querySelector("#searchBox");
searchbox.addEventListener("keydown", ()=>{
    const searchQuery = searchbox.value.toLowerCase();
    console.log(searchQuery);
    const results = products.filter((searchOutput)=>{
       if (searchOutput.title.toLowerCase().includes(searchQuery))
        return true;
       else
         return false;

    });
    console.log("results are: ", results);
    showProduct(results);
})