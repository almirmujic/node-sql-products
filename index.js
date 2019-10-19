const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

require('dotenv').config()

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

connection.connect(error => {
    if (error) {
        return error;
    }
});

// console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is from the products server');
})

app.get('/products', (req, res) => {

})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port 4000`);
})