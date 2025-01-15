import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/edit.css"; // Your custom styles

const EditBook = () => {
  const { id } = useParams(); // Get the doctor ID from URL params
  const [image, setImage] = useState(null);
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  // Function to load doctor data based on ID
  const loadData = () => {
    const api = "http://localhost:9000/doctors/editdatadisplay";
    axios
      .post(api, { id })
      .then((res) => {
        setInput(res.data); // Populate form fields with doctor data
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  };

  useEffect(() => {
    loadData(); // Load doctor data when component mounts or ID changes
  }, [id]);

  // Handle form input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Handle form submission to update doctor data
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("_id", id); // Ensure the correct doctor ID is included
    formData.append("doctor_name", input.doctor_name);
    formData.append("specialist", input.specialist);
    formData.append("fee", input.fee);
    formData.append("date", input.date);

    // If image is selected, append it to the form data
    if (image) formData.append("image", image);

    axios
      .post("http://localhost:9000/doctors/editdatasave", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Doctor data updated successfully");
        navigate("/dashboard/update"); // Redirect to update page after successful submission
      })
      .catch((error) => {
        console.error("Error updating doctor data:", error);
      });
  };

  // Handle image file selection
  const handleImage = (e) => {
    setImage(e.target.files[0]); // Store the selected image file
  };

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <h1>Edit Doctor Data</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control
              type="text"
              name="doctor_name"
              value={input.doctor_name || ""}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Specialist</Form.Label>
            <Form.Control
              type="text"
              name="specialist"
              value={input.specialist || ""}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fee</Form.Label>
            <Form.Control
              type="number"
              name="fee"
              value={input.fee || ""}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={input.date || ""}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleImage}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditBook;
