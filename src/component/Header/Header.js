import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary">
      <Container className="justify-content-center">
        <Navbar.Brand>
          <h1>Mein TODO-test</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
