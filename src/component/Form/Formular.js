import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import { format } from "date-fns";
import de from "date-fns/locale/de";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("de", de);
const Formular = ({ onNewToDo }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [kategotie, setKategotie] = useState("");

  const saveHandler = () => {
    onNewToDo({
      task,
      kategotie,
      startDate: format(startDate, "dd.MM.yyyy"),
    });
  };

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
                  placeholder="Aufgabe hinzufügen..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>erledigt bis</Form.Label>
                <Form.Group>
                  <DatePicker
                    locale="de"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd.MM.yyyy"
                  />
                </Form.Group>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Kategorie</Form.Label>
                <Form.Control
                  as="select"
                  value={kategotie}
                  onChange={(e) => setKategotie(e.target.value)}
                >
                  <option>-</option>
                  <option>Privat</option>
                  <option>Arbeit</option>
                  <option>Schule</option>
                </Form.Control>
              </Form.Group>

              <Button
                variant="secondary"
                onClick={saveHandler}
                disabled={task ? false : true}
              >
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
