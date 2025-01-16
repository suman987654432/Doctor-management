import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/book.css';

const Appointment = () => {
  const { state } = useLocation();
  const doctor = state?.doctor;

  if (!doctor) {
    return <div>No doctor data available.</div>;
  }

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        {/* Left side: Doctor's Image */}
        <div className="appointment-image-container">
          <img
            src={`data:image/png;base64,${doctor.image}`}
            alt={doctor.doctor_name}
            className="appointment-image"
          />
        </div>

        {/* Right side: Doctor's Details */}
        <div className="appointment-details">
          <h1 className="appointment-header">Book Appointment with Dr. {doctor.doctor_name}</h1>
          
          <p><strong>Specialist:</strong> {doctor.specialist}</p>
          <p><strong>Date:</strong> {new Date(doctor.date).toLocaleDateString()}</p>
          <p><strong>Fee:</strong> ₹{doctor.fee}</p>

          {/* <button className="book-appointment-btn">Book Appointment</button> */}
        </div>
      </div>
    </div>
  );
};

export default Appointment;

