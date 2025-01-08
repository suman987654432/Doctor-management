import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBook=()=>{
 const {id} = useParams();

 const [input, setInput]=useState({});

 const loadData=()=>{
    let api="http://localhost:9000/books/editdatadisplay";
    axios.post(api, {id:id}).then((res)=>{
          setInput(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, [])


 const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
 }


 const handleSubmit=()=>{
     let api="http://localhost:9000/books/editdatasave";
     axios.post(api, input).then((res)=>{
         alert("updated data ");
     })
 }


    return(
        <>
          <h1> Edit Book Data</h1>
          
          <Form style={{width:"300px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author name</Form.Label>
        <Form.Control type="text"  name="author_name" 
        value={input.author_name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" name="book_title" 
        value={input.book_title} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Publish Year</Form.Label>
        <Form.Control type="date" name="publish_year" 
        value={input.publish_year} onChange={handleInput}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="number" name="price" 
        value={input.price} onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default EditBook;