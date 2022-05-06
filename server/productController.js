// To obtain objects / info from json file we must use require
const storeProducts = require(`./productDb.json`);

require(`dotenv`).config()
const Sequelize = require(`sequelize`)

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
             rejectUnauthorized: false
        }
    }
});

// Allowing for adjustment for in index when items are deleted

// const storeProductsID = storeProducts[storeProducts.length -1] +1

module.exports = {
    // Obtaining all items from SQL database
       getProducts: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM products
            ORDER BY id desc;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    // // Creating a new gluten free store product
    addProduct: (req, res) => {
        const {imageurl, brand, name, price} = req.body;
        console.log(req.body)
        sequelize.query(`
            INSERT INTO products (imageurl, brand, name, price)
            VALUES ('${imageurl}', '${brand}', '${name}', ${price} )

        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))      
    },

    // Deleting an item from the data base
    deleteProduct: (req, res) => {
       let {id} = req.params
        console.log(id)
        sequelize.query(`
            DELETE
            FROM products
            WHERE id = ${id}
        `)
        
        .then(res.sendStatus(200))
        .catch(err => console.log(err))
    }
    
}