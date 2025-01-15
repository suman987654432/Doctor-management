const BookModel = require("../models/booksModel");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const bookSave = async (req, res) => {
  const { author_name, book_title, publish_year, price } = req.body;
  const image = req.file?.buffer;

  if (!image) {
    return res.status(400).send("Image is required");
  }

  try {
    const newBook = await BookModel.create({
      author_name,
      book_title,
      publish_year,
      price,
      image, // Save image as binary data
    });

    res.status(201).json({
      message: "Book Created Successfully",
      book: newBook,
    });
  } catch (error) {
    res.status(500).send("Error Saving Book: " + error.message);
  }
};

const bookDisplay = async (req, res) => {
  try {
    const books = await BookModel.find();
    const booksWithImages = books.map((book) => ({
      ...book._doc, // Include all other fields
      image: book.image ? book.image.toString("base64") : null, // Convert image buffer to Base64
    }));
    res.status(200).json(booksWithImages);
  } catch (error) {
    res.status(500).send("Error Fetching Books: " + error.message);
  }
};

const bookDelete = async (req, res) => {
  const { id } = req.body;
  const Data = await BookModel.findByIdAndDelete(id);
  res.send("ok");
};
const editbookDisplay = async (req, res) => {
  const { id } = req.body;
  const Data = await BookModel.findById(id);
  res.send(Data);
};
const editbookSave = async (req, res) => {
  try {
    // Destructure required fields from the request body
    const { _id, author_name, book_title, publish_year, price } = req.body;
    const image = req.file?.buffer;

    // Check if ID is provided
    if (!_id) {
      return res.status(400).json({ error: "ID is required for updating the book." });
    }

    // Create the updated data object
    const updatedData = {
      author_name,
      book_title,
      publish_year,
      price,
    };

    // Include image in update if provided
    if (image) {
      updatedData.image = image;
    }

    // Perform the update operation in the database
    const updatedBook = await BookModel.findByIdAndUpdate(_id, updatedData, {
      new: true, // Return the updated document
    });

    // If the book is not found
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found with the provided ID." });
    }

    // Respond with success message and updated book data
    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error updating book:", error); // Log error for debugging
    res.status(500).json({ error: "An error occurred while updating the book. Please try again." });
  }
};





const editbookSearch = async (req, res) => {
  const { book } = req.body;
  const Data = await BookModel.find({ "book_title": { $regex: book, $options: 'i' } });
  res.send(Data);
}

module.exports = {
  bookSave,
  bookDisplay,
  upload,
  bookDelete,
  editbookDisplay,
  editbookSave,
  editbookSearch
};
