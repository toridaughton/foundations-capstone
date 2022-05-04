const express = require(`express`);
const cors = require(`cors`);

const app = express();

app.use(cors());
app.use(express.json());


const {getStoreProducts} = require(`./productController.js`)

app.get(`/api/store-products`, getStoreProducts)

app.listen(4242, () => {console.log(`Listening on port 4242`)})