const express = require("express");
const route = express.Router();
const multer = require("multer");
const doctorController = require("../controllers/doctorcontroller");

// Set up multer for image file handling
const upload = multer({ storage: multer.memoryStorage() });

// Routes for doctor data operations
route.post("/datasave", upload.single("image"), doctorController.doctorSave); // Save doctor data
route.get("/datadisplay", doctorController.doctorDisplay); // Display doctor data
route.post("/datadelete", doctorController.doctorDelete); // Delete doctor data
route.post("/editdatadisplay", doctorController.editDoctorDisplay); // Edit doctor data display
route.post("/editdatasave", upload.single("image"), doctorController.editDoctorSave); // Save edited doctor data
route.post("/datasearch", doctorController.editDoctorSearch); 

module.exports = route;
