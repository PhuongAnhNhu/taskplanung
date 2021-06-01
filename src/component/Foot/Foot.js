import React from "react";
import { Container, Image, Navbar, Col, Row } from "react-bootstrap";

const Foot = () => {
  return (
    <Navbar bg="primary">
      <Container className="justify-content-center">
        <Navbar.Brand>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Image src="/assets/logo.png" fluid />
            </Col>
          </Row>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Foot;
