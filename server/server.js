require(`dotenv`).config()
const express = require(`express`);
const app = express();
const cors = require(`cors`);
const path = require(`path`)
const {SERVER_PORT} = process.env

app.use(cors());
app.use(express.json());


const {getProducts, addProduct, deleteProduct} = require(`./productController.js`)

app.get(`/`, (req, res) => res.sendFile(path.join(__dirname, '../client/home/home.html')))
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, '../client/products/storeProduct.html')))
app.get(`/about`, (req, res) => res.sendFile(path.join(__dirname, '../client/about/about.html')))


app.use(express.static(path.join(__dirname, '../client')))
app.use(express.static(path.join(__dirname, '../node_modules')))

app.get(`/api/products`, getProducts)
app.post(`/api/products`, addProduct)
app.delete(`/api/products/:id`, deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))