// src/pages/SelectionPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleSelection = (region) => {
    navigate(`/data/${region}`);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} className="text-center">
          <Button onClick={() => handleSelection("us")}>US</Button>
        </Col>
        <Col md={6} className="text-center">
          <Button onClick={() => handleSelection("india")}>India</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectionPage;
