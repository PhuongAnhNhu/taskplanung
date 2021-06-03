import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => {
      return tasks.reduce((currentData, task) => {
        const dataIndex = currentData.findIndex(singleData => singleData.startDate === task.startDate);
        if (dataIndex === -1) {
          currentData.push({ startDate: task.startDate, count: 1 })
        } else {
          currentData[dataIndex].count++;
        }
        return [...currentData];
      }, []).sort((a,b) => a.startDate > b.startDate ? 1: -1);
    })
  }, [tasks]);

  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
         {data.length == 0 ?  <div></div> : (<ResponsiveContainer width="100%" height={300}>
            <BarChart
              // width={760}
              // height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="startDate" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Offene Todos" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>) }
        </Col>
      </Row>
    </Container>
  );
};

export default Barchart;
