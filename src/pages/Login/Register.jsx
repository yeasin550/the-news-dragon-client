import React, { useContext, useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProviders';
const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [accepted, setAccepted] = useState(false)
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)
    createUser(email, password)
      .then(result => {
        const createUser = result.user;
        console.log(createUser);
      })
      .catch(error => {
      console.log(error)
    })
  }
  const handleAccepted = event => {
    const check = event.target.checked;
    setAccepted(check)
  }
    return (
      <Container className="w-25 mx-auto mt-5">
        <h3 className="text-center">Register your account</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to='/terms'>Term & Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Button variant="primary" disabled={!accepted} type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="">
            Already Have An Account ?
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    );
};

export default Register;