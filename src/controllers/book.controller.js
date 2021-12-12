const Book = require('../models/book.model');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        res.send({ status: 200, data: { books } });
    } catch (err) {
        res.status(500).send({ status: 500, message: 'Internal server error.' });
    }
};

const createBook = async (req, res) => {
    const book = new Book(req.body);

    try {
        await book.save();

        console.log('Book: New book was added.');

        res.status(201).send({ status: 201, data: { book } });
    } catch (err) {
        res.status(400).send({ status: 400, message: err });
    }
};

const getBook = async (req, res) => {
    const bookID = req.params.id;
    if (!bookID) return res.status(400).send({ status: 400, message: 'Bad request.' });

    try {
        const book = await Book.findById(bookID);
        if (!book) throw new Error();

        res.send({ status: 200, data: { book } });
    } catch (err) {
        res.status(500).send({ status: 500, message: 'Internal server error.' });
    }
};

module.exports = {
    getBooks,
    createBook,
    getBook,
};
