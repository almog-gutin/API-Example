const express = require('express');

const bookController = require('../controllers/book.controller');

const router = new express.Router();

// Ednpoint that gets all the books
router.get('/', bookController.getBooks);

// Endpoint for creating a new book
router.post('/new', bookController.createBook);

// Ednpoints for getting/updating/deleting information of a specific book
router.get('/:id', bookController.getBook);

module.exports = router;
