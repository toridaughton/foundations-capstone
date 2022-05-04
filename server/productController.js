// To obtain objects / info from json file we must use require
const storeProducts = require(`./productDb.json`);

// Allowing for adjustment for in index when items are deleted

const storeProductsID = storeProducts[storeProducts.length -1] +1

module.exports = {
    // Obtaining all items from json database
    getStoreProducts: (req, res) => {
        res.status(200).send(storeProducts);
    }

    // // Creating a new gluten free store product
    // createStoreProduct: (req, res) => {
    //     const {brand, name, price, imageUrl, tags} = req.body;
    //     const newGlutenFreeProduct = {
    //         id: glutenFreeProductsID,
    //         brand,
    //         name,
    //         price,
    //         imageUrl,
    //         tags
    //     }
    //     glutenFreeProducts.push(newGlutenFreeProduct)
    //     res.status(200).send(glutenFreeProducts)
    //     glutenFreeProductsID++      
    // },

    // // Allowing user to make changes / update posted products
    // updateStoreProduct: (req, res) => {
    //     const {id} = req.params;
    //     const index = storeProducts.findIndex(storeProduct => storeProduct.id ===+req.params.id);
    //     res.status(200).send(glutenFreeProducts)
    // },

    // // Deleting an item from the data base
    // deleteStoreProduct: (req, res) => {
    //     const index = storeProducts.findIndex(storeProduct => storeProduct.id === +req.params.id);
    //     storeProducts.splice(index, 1);
    //     res.status(200).send(storeProducts);
    // },
    
}