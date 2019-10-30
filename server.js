const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

require('dotenv').config()

const app = express();

const SELECT_ALL_PRODUCTS = 'SELECT * FROM `products`';

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

connection.connect(error => {
    if (error) {
        console.log(error);
        return error;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is from the products server');
})

app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: result
            })
        }
    })
})

app.get('/products/add', (req, res) => {
    const item = req.query.item;
    const price = req.query.price;
    const INSERT_PRODUCT_QUERY = `INSERT INTO products (item, price) VALUES('${item}','${price}')`;

    connection.query(INSERT_PRODUCT_QUERY, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send('Item successfully added.')
        }
    });

})

app.get('/products/delete', (req, res) => {
    const item = req.query.item;
    console.log(item);
    const DELETE_PRODUCT_QUERY = `DELETE FROM products WHERE item='${item}' AND product_id<>0`;

    connection.query(DELETE_PRODUCT_QUERY, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send('Item successsfully deleted.');
        }
    });
})

app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
})