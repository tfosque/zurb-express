// require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app =  express();

app.use(express.json());

const productRouter = require('./routes/products');
app.use('/products', productRouter)
// 'localhost:3000/products'


/* mongoose.connect('mongodb+srv://timmy:fosque@nodejs-mgnoa.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopoloy: true, useNewUrlParser: true });
 */

mongoose.connect('mongodb+srv://timmy:fosque@nodejs-mgnoa.mongodb.net/<dbname>?retryWrites=true&w=majority', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log('DB Connection Error:');
});

const db = mongoose.connection;
db.on('error', (err) => console.err(err));
db.once('open', () => console.log('connected to database'));

app.listen(3000, () => console.log('server started on port 3000...  '));