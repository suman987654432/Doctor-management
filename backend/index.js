const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bookRoute = require("./routes/bookRoutes");
mongoose.connect("mongodb://127.0.0.1:27017/bookmanagement").then(() => {
  console.log("DB Connected!!!");
});
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const UserRoute = require("./routes/UserRoute")
app.use("/books", bookRoute);
app.use("/user", UserRoute)
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
