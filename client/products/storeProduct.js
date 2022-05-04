//accessing section in html by class
const productsContainer = document.getElementsByClassName('products-container')
const addProductBtn = document.getElementsById('add-product')
const baseUrl = `http://localhost:4242/api/store-products`

const productsCallback = ({data: storeProducts}) => displayProducts(storeProducts)
const errCallback = err => console.log(err.res.data)

const getStoreProducts = () => axios.get(baseUrl).then(productsCallback).catch(errCallback)

addProductBtn.addEventListener('click', createProductForm)

const createProductForm = () => {
    const productFormContainer = document.createElement('div')
    productFormContainer.classList.add('product-form-container')

    productFormContainer.innerHTML = `<form id="add-product-form">
    <input type="text" id="product-image-url" placeholder="insert image url here></input>
    </form>`
}


//a function that creates a "card" to hold each individual product
const createProductCard = (product) => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    productCard.innerHTML = `<img alt="gluten free product image" class="product-image" src=${product.imageUrl}/>
    <div class="product-info">
    <p id="brand">${product.brand}</p>
    <p id="name">${product.name}</p>
    <p id="price">${product.price}</p>
    </div>`
    // console.log(product)
    productsContainer.appendChild(productCard)
}

//function that accesses the products container section that already exists in the html file and after separately loops through the array in the productDb.json and for each product in the database calls back to the createProductCard to allow for them to display each product in the products container in html
const displayProducts = (productsArr) => {
    productsContainer.innerHTML = ''
    for(let i = 0; i < productsArr.length; i++){
        createProductCard(productsArr[i])
    }
}





getStoreProducts()
