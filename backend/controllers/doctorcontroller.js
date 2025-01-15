const DoctorModel = require("../models/doctorModel");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// const mongoose = require('mongoose');

const doctorSave = async (req, res) => {
  const { doctor_name, specialist, fee, date } = req.body;
  const image = req.file?.buffer; // Extract uploaded image

  if (!doctor_name || !specialist || fee == null) {
    return res.status(400).send("Required fields are missing");
  }

  try {
    const newDoctor = await DoctorModel.create({
      doctor_name,
      specialist,
      fee,
      date: date || new Date(),
      image,
    });

    res.status(201).json({
      message: "Doctor Created Successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    res.status(500).send("Error Saving Doctor: " + error.message);
  }
};

const doctorDisplay = async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    const doctorsWithImages = doctors.map((doctor) => ({
      ...doctor._doc, // Include all other fields
      image: doctor.image ? doctor.image.toString("base64") : null, // Convert image buffer to Base64
    }));
    res.status(200).json(doctorsWithImages);
  } catch (error) {
    res.status(500).send("Error Fetching Doctors: " + error.message);
  }
};

const doctorDelete = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Doctor ID is required for deletion." });
    }

    const deletedDoctor = await DoctorModel.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res.status(404).json({ error: "Doctor not found with the provided ID." });
    }

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ error: "An error occurred while deleting the doctor. Please try again." });
  }
};


const mongoose = require('mongoose');
const editDoctorDisplay = async (req, res) => {
  try {
    const { id } = req.params;  // Get id from the URL

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format." });
    }

    const doctor = await DoctorModel.findById(id);

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found with the provided ID." });
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    res.status(500).json({ error: "An error occurred while fetching the doctor data. Please try again." });
  }
};




const editDoctorSave = async (req, res) => {
  try {
    const { _id, doctor_name, specialist, date, fee } = req.body;
    const image = req.file?.buffer; // Image buffer from the uploaded file

    // Validate the _id
    if (!_id || !mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ error: "Invalid Doctor ID format." });
    }

    const updatedData = {
      doctor_name,
      specialist,
      date,
      fee,
    };

    if (image) {
      updatedData.image = image;
    }

    // Update the doctor data in the database
    const updatedDoctor = await DoctorModel.findByIdAndUpdate(_id, updatedData, {
      new: true, // Return the updated document
    });

    if (!updatedDoctor) {
      return res.status(404).json({ error: "Doctor not found with the provided ID." });
    }

    res.status(200).json({
      message: "Doctor updated successfully",
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ error: "An error occurred while updating the doctor record. Please try again." });
  }
};






const editDoctorSearch = async (req, res) => {
  const { book } = req.body; // The search term from the frontend

  try {
    // Search doctors by doctor_name or specialist using regex (case insensitive)
    const data = await DoctorModel.find({
      $or: [
        { doctor_name: { $regex: book, $options: 'i' } }, // Match doctor name
        { specialist: { $regex: book, $options: 'i' } }, // Match specialist
      ],
    });

    // Convert the image buffer to base64 string for each doctor
    const dataWithBase64Image = data.map(doctor => {
      if (doctor.image) {
        doctor.image = doctor.image.toString('base64'); // Convert buffer to base64 string
      }
      return doctor;
    });

    // Send the updated data with the base64 image
    res.send(dataWithBase64Image);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).send('Server error');
  }
};


module.exports = {
  doctorSave,
  doctorDisplay,
  upload,
  doctorDelete,
  editDoctorDisplay,
  editDoctorSave,
  editDoctorSearch
};
