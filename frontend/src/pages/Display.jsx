import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { formatDate } from "../../utils";
import '../css/Display.css';  // Import the CSS file

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    let api = "http://localhost:9000/books/datadisplay";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.author_name}</td>
        <td>{key.book_title}</td>
        <td>{formatDate(key.publish_year)}</td>
        <td>{key.price}</td>
      </tr>
    );
  });

  return (
    <div className="display-container">
      <div className="content-container">
        <h1>Display Data</h1>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Author Name</th>
              <th>Book Title</th>
              <th>Publish Year</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default Display;
