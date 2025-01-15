import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../css/Insert.css";

const Insert = () => {
  const [input, setInput] = useState({
    doctor_name: "",
    specialist: "",
    fee: "",
    date: "",
  });
  const [image, setImage] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]); // Capture the uploaded image
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("doctor_name", input.doctor_name);
    formData.append("specialist", input.specialist);
    formData.append("fee", input.fee);
    formData.append("date", input.date);
    formData.append("image", image); // Attach the image file

    try {
      const api = "http://localhost:9000/doctors/datasave";
      await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Doctor saved successfully");
    } catch (error) {
      alert("Error saving doctor: " + error.message);
    }
  };

  return (
    <div className="insert-container">
      <div className="form-container">
        <h1 className="title">Insert Doctor</h1>
        <Form className="insert-form">
          <Form.Group className="mb-3">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control
              type="text"
              name="doctor_name"
              value={input.doctor_name}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Specialist</Form.Label>
            <Form.Control
              type="text"
              name="specialist"
              value={input.specialist}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fee</Form.Label>
            <Form.Control
              type="number"
              name="fee"
              value={input.fee}
              onChange={handleInput}
              min="0"
              max="5000"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={input.date}
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
          <Button
            variant="primary"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Insert;
