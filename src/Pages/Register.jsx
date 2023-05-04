import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
  const {createUser, userUpdateData} = useContext(AuthContext)
  const [error, setError] = useState('')

  const handleRegister = event =>{
    setError('')
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email= form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result=>{
      setError('')
      const createdUser= result.user;
      console.log(createdUser)
      userUpdateData(result.user, name, photo)
      .then(()=>{ 
        console.log("update")
      })
      .catch(error=>{
        console.log(error.message)
      })
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })
  }

  


  return (
    <Container className="w-50 mx-auto mb-5 mt-5">
      <h1 className="text-center">Registration please</h1>
      <Form onSubmit={handleRegister} className="mt-5 bg-secondary bg-opacity-10 p-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter photoUrl"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to='/login'>
        <Button variant="danger" type="submit">
          Submit
        </Button>
        </Link>
        
      </Form>
      <small className="fw-semibold">Allready have an account? <Link to='/login'>Login</Link> </small>
       <p className="text-danger">{error}</p>
    </Container>
  );
};

export default Register;
