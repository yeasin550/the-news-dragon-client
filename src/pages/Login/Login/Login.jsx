import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  const from = location.state?.from?.pathname || '/category/0'

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error));
  }



  return (
    <Container className="w-25 mx-auto mt-5">
      <h1 className="text-center">Please Login</h1>
      <Form onSubmit={handleLogin}>
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
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div className="w-full text-center">
          <Button className="" variant="primary" type="submit">
            Submit
          </Button>
        </div>
        <br />
        <Form.Text className="">
          Don’t Have An Account ?
          <Link className="text-primary" to="/register">
            Register
          </Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
