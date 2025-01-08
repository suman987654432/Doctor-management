import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../css/Insert.css";

const Insert = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let api = "http://localhost:9000/books/datasave";
    axios.post(api, input).then((res) => {
      alert("Data saved successfully");
    });
  };

  return (
    <div className="insert-container">
      <div className="form-container">
        <h1 className="title">Insert Book</h1>
        <Form className="insert-form">
          <Form.Group className="mb-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              name="authorname"
              value={input.authorname}
              onChange={handleInput}
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              name="booktitle"
              value={input.booktitle}
              onChange={handleInput}
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publish Year</Form.Label>
            <Form.Control
              type="date"
              name="publishdate"
              value={input.publishdate}
              onChange={handleInput}
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="bookprice"
              value={input.bookprice}
              onChange={handleInput}
              className="form-control"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className="submit-btn"
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
