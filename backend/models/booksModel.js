const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author_name: {
    type: String,
    required: true,
  },
  book_title: {
    type: String,
    required: true,
  },
  publish_year: {
    type: Date,
    default: Date.now(),
  },
  price: {
    type: Number,
    min: 0,
    max: 5000,
    required: true,
  },
  image: {
    type: Buffer, // To store the binary image data
    required: true,
  },
});

module.exports = mongoose.model("book", bookSchema);
