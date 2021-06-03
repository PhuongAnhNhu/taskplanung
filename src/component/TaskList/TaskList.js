import React from "react";
import { Table, Col, Row, Container, Button } from "react-bootstrap";

const TaskList = ({ tasks = [], deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <Container fluid className="mt-3">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h2>Alles erledigt, keine offenen Todos!</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  const deleteHandler = (index) => {
    deleteTask({ index });
  };
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Table bordered hover size="lg">
            <thead>
              <tr>
                <th>Aufgabe</th>
                <th>bis</th>
                <th>Kategorie</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.task}</td>
                  <td>{task.startDate}</td>
                  <td>{task.kategorie}</td>
                  <td>
                    <Button onClick={() => deleteHandler(index)}>
                      <i className="fas fa-times-circle"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
