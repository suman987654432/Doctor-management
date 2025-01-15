import axios from "axios";
import { useState } from "react";
import "../css/Search.css"; // Import the updated CSS file

const Search = () => {
  const [book, setBook] = useState(""); // Search input value
  const [mydata, setMydata] = useState([]); // State to store search results

  const handleSubmit = () => {
    const api = "http://localhost:9000/doctors/datasearch"; // Updated API endpoint
    axios
      .post(api, { book }) // Send the search term to the backend
      .then((res) => {
        setMydata(res.data); // Set response data to mydata state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  // Map through the search results and display doctor data
  const ans = mydata.map((doctor) => (
    <tr key={doctor._id}>
      <td>{doctor.doctor_name}</td>
      <td>{doctor.specialist}</td>
      <td>{new Date(doctor.date).toLocaleDateString()}</td>
      <td>₹{doctor.fee}</td>
      <td>
        {doctor.image ? (
          <img
            src={`data:image/png;base64,${doctor.image}`} // Make sure it's directly used here
            alt={doctor.doctor_name}
            style={{ width: "50px", height: "50px" }} // Adjust image size
          />
        ) : (
          <span>No image</span>
        )}
      </td>

    </tr>
  ));

  return (
    <div className="search-container">
      <h1>Search Doctors</h1>
      <div className="input-container">
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)} // Handle input change
          placeholder="Enter doctor name or specialist"
        />
        <button onClick={handleSubmit}>Search Doctor</button>
      </div>
      <hr />
      {mydata.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Specialist</th>
              <th>Date</th>
              <th>Fee</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody style={{ color: "red" }}>{ans}</tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", color: "#4c51af", fontSize: "1.2rem" }}>
          No data found
        </p>
      )}
    </div>
  );
};

export default Search;
