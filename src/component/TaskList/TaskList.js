import React from "react";
import { Table, Col, Row, Container, Button } from "react-bootstrap";

const TaskList = ({ tasks = [] }) => {
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
                  <td>{task.startDate.toLocaleDateString()}</td>
                  <td>{task.kategotie}</td>
                  <td>
                    <Button>
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
