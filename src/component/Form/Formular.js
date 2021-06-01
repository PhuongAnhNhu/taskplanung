import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Formular = ({onNewToDo}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [kategotie, setKategotie] = useState("");

  const saveHandler = () => {
    onNewToDo({task, kategotie, startDate})
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="aufgabe">
                <Form.Label>Aufgabe</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
        
                />
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
                <Form.Control
                  as="select"
                  value={kategotie}
                  onChange={(e) => setKategotie(e.target.value)}
                  required
                >
                  <option>Privat</option>
                  <option>Arbeit</option>
                  <option>Schule</option>
                </Form.Control>
              </Form.Group>

              <Button variant="secondary" onClick={saveHandler}>
                Aufgabe speichen
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formular;
