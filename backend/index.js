const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL;
const port = process.env.PORT;

const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bookRoute = require("./routes/bookRoutes");

mongoose.connect(dbUrl).then(() => {
  console.log("DB Connected!!!");
});

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/books", bookRoute);

app.listen(port, () => {
  console.log(`Server run on ${port}` );
});
