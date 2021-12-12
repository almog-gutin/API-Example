const express = require('express');
const cors = require('cors');

const bookRouter = require('./routers/book.router');
const userRouter = require('./routers/user.router');
const cartRouter = require('./routers/cart.router');

require('./databases/mongoose.database');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('API Example'));

app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('/cart', cartRouter);

module.exports = app;
