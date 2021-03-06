const express = require('express');
const app = express()
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
const books = require('./routes/books')
var transactions = require('./routes/transactions')

mongoose.connect('mongodb://localhost/api-crud-mongoose');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)