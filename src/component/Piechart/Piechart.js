import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechart = ({ tasks }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => {
      return tasks
        .reduce((currentData, task) => {
          const dataIndex = currentData.findIndex(
            (singleData) => singleData.kategorie === task.kategorie
          );
          if (dataIndex === -1) {
            currentData.push({ kategorie: task.kategorie, count: 1 });
          } else {
            currentData[dataIndex].count++;
          }
          return [...currentData];
        }, [])
        .sort((a, b) => (a.kategorie > b.kategorie ? 1 : -1));
    });
  }, [tasks]);

  console.log(data);

  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
                nameKey="kategorie"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  ></Cell>
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Piechart;
