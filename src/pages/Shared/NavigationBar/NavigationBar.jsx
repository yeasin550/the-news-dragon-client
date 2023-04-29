import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import profile from "../../../assets/profile.jpeg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
  const { user, loggedOut } = useContext(AuthContext);
  const hnadleLogOut = () => {
    loggedOut()
    .then(()=> {})
    .catch(error => console.log(error))
  }
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/category/0">Home</Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav className='d-flex align-items-center gap-2'>
                {user ? (
                  <Image
                    style={{ height: "45px" }}
                    src={profile}
                    roundedCircle
                  />
                ) : (
                  "Profile"
                ) }

                {user ? (
                  <Button onClick={hnadleLogOut} variant="secondary">Log Out</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;