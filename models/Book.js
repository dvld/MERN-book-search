// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const BookSchema = new Schema({

  title: {
    type: String
  },

  authors: {
    type: [String]
  },

  description: {
    type: String
  },

  image: {
    type: String
  },

  link: {
    type: String
  }

});

module.exports = Book = mongoose.model('book', BookSchema);