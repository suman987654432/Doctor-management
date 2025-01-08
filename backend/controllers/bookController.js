const BookModel = require("../models/booksModel");
const bookSave = async (req, res) => {
  const { authorname, booktitle, publishdate, bookprice } = req.body;
  const Book = await BookModel.create({
    author_name: authorname,
    book_title: booktitle,
    publish_year: publishdate,
    price: bookprice,
  });
  res.send("Book created");
};

const bookDisplay = async (req, res) => {
  const Book = await BookModel.find();
  res.send(Book);
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
const editbookSave=async(req, res)=>{
  const { _id,author_name,book_title,publish_year,price} = req.body;
  const Data= await BookModel.findByIdAndUpdate(_id, {
      author_name,
      book_title,
      publish_year,
      price
  })
 res.send("OKKK");
}

const editbookSearch=async(req, res)=>{
const {book}= req.body;
const Data = await BookModel.find({"book_title":{$regex: book, $options: 'i'}});
res.send(Data);
}

module.exports = {
  bookSave,
  bookDisplay,
  bookDelete,
  editbookDisplay, 
  editbookSave,
  editbookSearch
};
