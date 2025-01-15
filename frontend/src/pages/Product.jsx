import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Product.css";

const ProductPage = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  // Fetch all doctor data from the API
  const loadDoctors = () => {
    const api = "http://localhost:9000/doctors/datadisplay";
    axios.get(api).then((res) => {
      setDoctors(res.data);
    });
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const bookAppointment = (doctor) => {
    // Navigate to appointment page and pass doctor data as state
    navigate("/appointment", { state: { doctor } });
  };

  return (
    <div className="product-page-container">
      <h1>Our Doctors</h1>
      <div className="product-grid">
        {doctors.map((doctor) => (
          <div className="product-card" key={doctor._id}>
            {doctor.image && (
              <img
                src={`data:image/png;base64,${doctor.image}`}
                alt={doctor.doctor_name}
                className="product-image"
              />
            )}
            <div className="product-details">
              <h3>{doctor.doctor_name}</h3>
              <p><strong>Specialist:</strong> {doctor.specialist}</p>
              <p><strong>Date:</strong> {new Date(doctor.date).toLocaleDateString()}</p>
              <p><strong>Fee:</strong> ₹{doctor.fee}</p>
            </div>
            <button
              className="book-appointment-btn"
              onClick={() => bookAppointment(doctor)}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
