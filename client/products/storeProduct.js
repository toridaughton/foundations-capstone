const baseUrl = `http://localhost:4242/api/products`
//accessing section in html by class
const productsContainer = document.getElementById('products-container')

// const addProductFormBtn = document.getElementById('product-form-btn')

const newProductForm = document.getElementById("add-product-button")

const submitHandler = (form) => {
    
    form.preventDefault()

    let imageUrl = document.getElementById('new-product-image');
    let brand = document.getElementById('new-product-brand');
    let name = document.getElementById('new-product-name')
    let price = document.getElementById('new-product-price');
    
    let body = {
        imageurl: imageUrl.value,
        brand: brand.value,
        name: name.value,
        price: price.value
    } 
        console.log(body)
    axios.post(baseUrl, body)
    .then(() =>{
        imageUrl.value = ''
        brand.value = ''
        name.value = ''
        price.value = 0
        productsContainer.innerHTML = ''
        console.log(productsContainer.innerHTML)
        getProducts()

    })

}

const getProducts = () => {
    productsContainer.innerHTML = ''
    axios.get(baseUrl)
        .then(res=> {
            res.data.forEach(product =>{
                console.log(res.data)
                // console.log(product)
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
    </div>
    <button id="delete-button" onclick="deleteProduct(${product.id})"> Delete </button>` 
    // console.log(product.id)

    return productCard
}

// const deleteProduct = (id) => {
//     axios.delete(`${baseUrl}/:${id}`)
//     .then(() => getProducts())
//     .catch(err => console.log(err))
// }

// const deleteProduct = (id) => {
//     console.log(id)
//     axios.delete(`${baseUrl}/${id}`)
//     .then(() => getProducts())
//     .catch(err => console.log(err))
// }
const deleteProduct = (id) => {
    // console.log(id)
    axios.delete(`${baseUrl}/${id}`)
    .then(getProducts)
    .catch(err => console.log(err))
}



// const createProductForm = () => {
//     const productFormContainer = document.createElement('div')
//     productFormContainer.classList.add('product-form-container')
//     const formContainer = document.getElementById('form-container')
    
//     formContainer.innerHTML = 
//     `<form id="add-product-form">
//     <input type="text" id="product-image-url" placeholder="insert image url here/>
//     <input type="text" id="brand" placeholder="Product Brand"/>
//     <input type="text" id="name" placeholder="Product Name/>
//     <input type="text" id="price" placeholder="Input Price"/>
//     <button id="add-product-btn">Add Product</button>
//     </form>`
//     return formContainer
// }



newProductForm.addEventListener('click', submitHandler)
getProducts()
