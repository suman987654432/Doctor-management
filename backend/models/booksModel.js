const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  author_name: {
    type: String,
    require: true,
  },
  book_title: {
    type: String,
    require: true,
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
});
module.exports = mongoose.model("book", bookSchema);
