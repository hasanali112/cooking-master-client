import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServicePackage = () => {
  return (
    <div className="mb-5">
      <h1 className="text-center mb-5">Choose your best package</h1>
      <Container>
        <Row >
          <Col lg={4}>
            <Card style={{ width: "18rem" }} className="bg-light">
              <Card.Title className="text-center bg-dark fw-semibold fs-2 bg-opacity-10 p-2">
                Basic Package
              </Card.Title>
              <Card.Text className="text-center fw-semibold fs-2 mt-3">
                $30
              </Card.Text>
              <ListGroup.Item className="text-center fw-semibold mb-3 mt-5">
                Get anytime best chef
              </ListGroup.Item>
              <ListGroup.Item className="text-center fw-semibold mb-3">
                Get one month free service
              </ListGroup.Item>
              <ListGroup.Item className="text-center fw-semibold mb-3">
                Get best cooking food
              </ListGroup.Item>
              <Card.Body className="mx-auto">
                <Button variant="danger" className="px-5 fw-semibold">
                  Select
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "18rem" }} className="bg-light">
              <Card.Title className="text-center bg-dark fw-semibold fs-2 bg-opacity-10 p-2">
                Standard
              </Card.Title>
              <Card.Text className="text-center fw-semibold fs-2 mt-3">
                $130
              </Card.Text>
              <ListGroup.Item className="text-center fw-semibold mb-3 mt-5">
                Get anytime best chef
              </ListGroup.Item>
              <ListGroup.Item className="text-center fw-semibold mb-3">
                Get one month free service
              </ListGroup.Item>
              <ListGroup.Item className="text-center fw-semibold mb-3">
                Get best cooking food
              </ListGroup.Item>
              <Card.Body className="mx-auto">
                <Button variant="danger" className="px-5 fw-semibold">
                  Select
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: "18rem" }} className="bg-light">
              <Card.Title className="text-center bg-dark fw-semibold fs-2 bg-opacity-10 p-2">
                Premium
              </Card.Title>
              <Card.Text className="text-center fw-semibold fs-2 mt-3">
                $200
              </Card.Text>
              <ListGroup.Item className="text-center fw-semibold mb-3 mt-5">
                Get anytime best chef
              </ListGroup.Item>
              <ListGroup.Item className="text-center fw-semibold mb-3">
                Get one month free service
              </ListGroup.Item>
              <ListGroup.Item className="text-center fw-semibold mb-3">
                Get best cooking food
              </ListGroup.Item>
              <Card.Body className="mx-auto">
                <Button variant="danger" className="px-5 fw-semibold">
                  Select
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicePackage;
