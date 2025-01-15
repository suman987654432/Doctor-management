import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import del from "../assets/del.png";
import edit from "../assets/edit.png";
import { formatDate } from "../../utils";
import { useNavigate } from "react-router-dom";
import "../css/Update.css"; // Import the updated CSS file

const Update = () => {
  const [doctors, setDoctors] = useState([]); // State to hold doctor data
  const navigate = useNavigate();

  // Function to fetch all doctor data from the server
  const loadData = async () => {
    try {
      const api = "http://localhost:9000/doctors/datadisplay";
      const response = await axios.get(api);
      setDoctors(response.data); // Set the fetched data into state
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Function to handle deletion of doctor data
  const deleteDoctor = async (id) => {
    try {
      const api = "http://localhost:9000/doctors/datadelete";
      await axios.post(api, { id });
      alert("Doctor data deleted successfully");
      loadData(); // Reload data after deletion
    } catch (error) {
      console.error("Error deleting doctor data:", error);
    }
  };

  // Generate table rows dynamically based on the `doctors` data
  const doctorRows = doctors.map((doctor) => (
    <tr key={doctor._id}>
      <td>{doctor.doctor_name}</td>
      <td>{doctor.specialist}</td>
      <td>{doctor.date ? formatDate(doctor.date) : "N/A"}</td>
      <td>{doctor.fee ? `₹${doctor.fee}` : "N/A"}</td>
      <td>
        {doctor.image ? (
          <img
            src={`data:image/png;base64,${doctor.image}`}
            alt={doctor.doctor_name}
            style={{ width: "100px", height: "auto" }}
          />
        ) : (
          "No Image"
        )}
      </td>
      <td>
        <a
          href="#"
          onClick={() => {
            navigate(`/dashboard/editdata/:id`);
          }}
        >
          <img src={edit} className="imgsize" alt="Edit" />
        </a>
      </td>
      <td>
        <a
          href="#"
          onClick={() => {
            deleteDoctor(doctor._id);
          }}
        >
          <img src={del} className="imgsize" alt="Delete" />
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="update-container">
      <h1>Doctors Management</h1>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialist</th>
              <th>Date</th>
              <th>Fee</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctorRows.length > 0 ? doctorRows : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No doctors available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Update;
