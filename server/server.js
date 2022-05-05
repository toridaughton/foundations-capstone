require(`dotenv`).config()
const express = require(`express`);
const app = express();
const cors = require(`cors`);
const path = require(`path`)
const {SERVER_PORT} = process.env

app.use(cors());
app.use(express.json());


const {getProducts, addProduct} = require(`./productController.js`)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/products/storeProduct.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/products/storeProduct.js'))
})

app.get(`/css`, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/products/storeProduct.css'))
})

app.get(`/api/products`, getProducts)
app.get(`/api/products`, addProduct)
// app.get(`/api/products:id`, deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))