import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {logIn,  handleGoogleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('')

  const handlelogged = event =>{
    setError('')
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const password = form.password.value;
    logIn(email,password)
    .then(result=>{
      const loggedUser= result.user;
      navigate(from, {replace: true})
    })
    .catch(error=>{
      setError(error.message)
    })
  }
   
  const handleGoogleSign = () =>{
    handleGoogleSignIn ()
    .then(result =>{
        const user = result.user;
        navigate(from, {replace: true})
    })
    .catch(error =>{
        console.log('error massage', error.massage)
    })
}



  return (
    <Container className="w-25 mx-auto mb-5 mt-5">
      <h1 className="text-center">Login Here</h1>
      <Form onSubmit={handlelogged} className="mt-5 bg-secondary bg-opacity-10 p-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
      <small className="fw-semibold">New to cookMaster? <Link to='/register'>Register</Link> </small>
      <Button onClick={handleGoogleSign} variant="outline-secondary">
           Log with Google
        </Button>
        <Button  variant="outline-secondary">
           Log in GitHub
        </Button>
        <p className="text-danger">{error}</p>
    </Container>
  );
};

export default Login;
