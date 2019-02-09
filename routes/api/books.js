// dependencies
const express = require('express');
const router = express.Router();

// import Book model
const Book = require('../../models/Book');

// @GET to api/books
// @desc Get all saved books as json
router.get('/',
  (req, res) => {
    Book.find()
      .sort({ date: -1 })
      .then(books => res.json(books));
  }
);

// @POST to api/books
// @desc Post a new book to the database
router.post('/',
  (req, res) => {
    const savedBook = new Book({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
    });
    savedBook.save().then(book => res.json(book));
  }
);

// @DELETE to api/books/:id
// @desc Delete a saved book from the database
router.delete('/:id',
  (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.json({ success: true }))
      .catch(err => res.status(404).json({ success: false }));
  }
);

module.exports = router;