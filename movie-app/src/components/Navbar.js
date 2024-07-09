import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="">MovieApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/">Mes favoris</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-light">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
