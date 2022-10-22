const baseUrl = `http://localhost:4242/api/products`
//accessing section in html by class
const productsContainer = document.getElementById('products-container')
const addNewProduct = document.getElementById('add-new-product')
const addProductButton= document.getElementById("add-product-button")
const addNewProductFormButton = document.getElementById('add-new-product-form-button')
const formContainer = document.querySelector('.form-container')
const escForm = document.getElementById("esc-form")


const getProducts = () => {
    productsContainer.innerHTML = ''
    axios.get(baseUrl)
    .then(res=> {
        res.data.forEach(product =>{
            const productCard = createProductCard(product)
            productsContainer.innerHTML += productCard
        })
    })
    .catch(err => console.log(err))
}

//a function that creates a "card" to hold each individual product
const createProductCard = (product) => {
    productCard =
    `<div class="product-card">
    <img alt="gluten free product image" class="product-image" src=${product.imageurl}/>
    <p class="brand">${product.brand}</p>
    <p class="name">${product.name}</p>
    <p class="price">$${product.price}</p>
    <button id="delete-button" onclick="deleteProduct(${product.id})"> Delete </button>
    </div>`
    // console.log(product.imageUrl)
    
    return productCard
}

const submitHandler = (form) => {
    
    form.preventDefault()

    let imageUrl = document.getElementById('new-product-image');
    let brand = document.getElementById('new-product-brand');
    let name = document.getElementById('new-product-name')
    let price = document.getElementById('new-product-price');
    
    let body = {
        imageUrl: imageUrl.value,
        brand: brand.value,
        name: name.value,
        price: price.value
    } 
    // console.log(imageUrl)
        console.log(body)
    axios.post(baseUrl, body)
    .then(() =>{
        imageUrl.value = ''
        brand.value = ''
        name.value = ''
        price.value = ''
        productsContainer.innerHTML = ''
        console.log(productsContainer.innerHTML)
        getProducts()

    })

}

const deleteProduct = (id) => {
    // console.log(id)
    axios.delete(`${baseUrl}/${id}`)
    .then(getProducts)
    .catch(err => console.log(err))
}


addNewProductFormButton.addEventListener('click', () => formContainer.classList.add('show'))
addProductButton.addEventListener('click', () => formContainer.classList.remove('show'))
escForm.addEventListener('click', () => formContainer.classList.remove('show'))
addProductButton.addEventListener('click', submitHandler)

getProducts()
