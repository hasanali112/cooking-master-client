import React from "react";
import background from "../assets/bg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="bg-secondary bg-opacity-10">
        <Container>
          <Row >
            <Col lg={5} className="mt-5">
              <h1 className="mt-4 fw-bolder">Cook Anything With <br /> The Expart</h1>
              <p className="mt-3 fw-bold text-secondary">
                View over 3000 recipes from Great British Chefs including recipe
                ideas for every occasion from quick weeknight meals ideas to
                elaborate dinner parties
              </p>
              <div className="mt-3">
                <Button variant="danger" className="me-3">Lets cook</Button>
                <Button variant="outline-secondary">Learn more</Button>
              </div>
              
            </Col>
            <Col lg={7}>
              <img
                src={background}
                className="container-fluid rounded"
                alt="cooking chef"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className='mt-5 '>
               
            </div>
            <div>
               
            </div> */
}
