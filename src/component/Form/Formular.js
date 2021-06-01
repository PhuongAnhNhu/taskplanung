import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Formular = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form>
              <Form.Group>
                <Form.Label>Aufgabe</Form.Label>
                <Form.Control type="text" placeholder="Do Be Do Be Do" />
              </Form.Group>

              <Form.Group>
                <Form.Label>erledigt bis</Form.Label>
                <Form.Group>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Form.Group>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Kategotie</Form.Label>
                <Form.Control as="select">
                  <option>Privat</option>
                  <option>Arbeit</option>
                  <option>Schule</option>
                </Form.Control>
              </Form.Group>

              <Button variant="secondary">Aufgabe speichen</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formular;
