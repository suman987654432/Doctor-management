const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  doctor_name: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    min: 0,
    max: 5000,
    required: true,
  },
  date: {
    type: Date,
  },
  image: {
    type: Buffer, // Storing the image as binary data
  },
});

module.exports = mongoose.model("doctor", doctorSchema);
