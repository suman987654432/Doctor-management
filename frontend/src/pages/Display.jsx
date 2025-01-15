import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import del from "../assets/del.png";
import { formatDate } from "../../utils";
import edit from "../assets/edit.png";
import { useNavigate } from "react-router-dom";
import "../css/Update.css"; // Import the updated CSS file

const Update = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    const api = "http://localhost:9000/doctors/datadisplay";
    axios.get(api).then((res) => {
      console.log(res.data);
      setDoctors(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteDoctor = (id) => {
    const api = "http://localhost:9000/doctors/datadelete";
    axios.post(api, { id }).then((res) => {
      alert("Doctor data deleted successfully");
      loadData();
    });
  };

  const doctorRows = doctors.map((doctor) => (
    <tr key={doctor._id}>
      <td>{doctor.doctor_name}</td>
      <td>{doctor.specialist}</td>
      <td>{formatDate(doctor.date)}</td>
      <td>{doctor.fee}</td>
      <td>
        {doctor.image && (
          <img
            src={`data:image/png;base64,${doctor.image}`}
            alt={doctor.doctor_name}
            style={{ width: "100px", height: "auto" }}
          />
        )}
      </td>
      <td>
        <a
          href="#"
          onClick={() => {
            navigate("/dashboard/editdata/:id");
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
          <tbody>{doctorRows}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default Update;
