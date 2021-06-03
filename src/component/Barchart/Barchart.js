import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Barchart = ({ tasks }) => {

 console.log(tasks)
  const mock = [
    {
      name: "02.06.2021",
      pv: 2,
    },
    {
      name: "Page B",
      pv: 1,
    },
    {
      name: "Page C",
      pv: 9,
    },
    {
      name: "Page D",
      pv: 3,
    },
    {
      name: "Page E",
      pv: 4,
    },
    {
      name: "Page F",
      pv: 3,
    },
    {
      name: "Page G",
      pv: 4,
    },
    {
      name: "Page H",
      pv: 4,
    },
  ];
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
        <ResponsiveContainer width="100%" height={300}>

          <BarChart
            // width={760}
            // height={300}
            data={mock}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Barchart;
