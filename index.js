const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is from the products server');
})

app.get('/products', (req, res) => {

})

app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
})