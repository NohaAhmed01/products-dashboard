let products, category = [];
const productContainer = document.querySelector(".products-container");
const loading = document.querySelector(".loading");
const errorMsg = document.querySelector(".error");
const select = document.querySelector("select");

function fetchApi() {
    loading.style.display = "block";
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
            showProduct(data);
            products = data;
            let uniqueCategories = [...new Set(category)];
            populateOptions(uniqueCategories);
            console.log("unique categories", uniqueCategories);
            filterCategories();
        })
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
        imageSrc = element.images.length > 1 ? element.images[0] : "https://placehold.co/500x400";
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
        category.push(element.category.name);
    });
    productContainer.innerHTML = "";
    productContainer.appendChild(cardCol);
    if (data.length === 0)
        productContainer.innerHTML = "<p>No Product Found</p>";
}

const searchbox = document.querySelector("#searchBox");
searchbox.addEventListener("input", () => {
    const searchQuery = searchbox.value.toLowerCase();
    console.log(searchQuery);
    const results = products.filter(searchOutput =>
        searchOutput.title.toLowerCase().includes(searchQuery)
    );
    console.log("results are: ", results);
    showProduct(results);
})

//method 1
//const uniqueCategories = category.filter((item, index) => category.indexOf(item) === index);

//method 2
/* let uniqueCategoriesss = new Set(category);
let uniqueCategories = [...uniqueCategoriesss]; */

//method 3
/* let uniqueCategories = [];
category.forEach((element)=>{
    if(!uniqueCategories.includes(element)){
        uniqueCategories.push(element);
    }
}) */

function populateOptions(uniqueCategories) {
    for (let i = 0; i < uniqueCategories.length; i++) {
        let newOption = document.createElement('option');
        newOption.textContent = uniqueCategories[i];
        newOption.value = uniqueCategories[i];
        select.appendChild(newOption);
    }
}

function filterCategories() {
    select.addEventListener('change', (ev) => {
        console.log(ev.target.value);
        let selectedCategory = ev.target.value;
        if (selectedCategory != 'all') {
            let selectedProducts = products.filter(item =>
                item.category.name === selectedCategory
            );
            showProduct(selectedProducts);
        }else{
            showProduct(products);
        }
    })

}