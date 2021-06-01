import React from "react";
import { Table, Col, Row, Container, Button } from "react-bootstrap";

const TaskList = (props) => {
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
              <tr>
                <td>props</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Button>
                    <i class="fas fa-times-circle"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <Button>
                    <i class="fas fa-check-circle"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
