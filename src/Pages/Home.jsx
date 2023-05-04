import React, { useEffect, useState } from "react";
import background from "../assets/bg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Feature from "./Feature";
import ServicePackage from "./ServicePackage";


const Home = () => {
  const [cookDataLoader, setCookDataLoader] =useState([])
  console.log(cookDataLoader)

 useEffect(()=>{
  fetch('http://localhost:5000/cook')
  .then(res=> res.json())
  .then(data=> setCookDataLoader(data))
 },[])

  return (
    <div>
      <div className="bg-secondary bg-opacity-10">
        <Container>
          <Row>
            <Col lg={5} className="mt-5">
              <h1 className="mt-4 fw-bolder">
                Cook Anything With <br /> The Expart
              </h1>
              <p className="mt-3 fw-bold text-secondary">
                View over 3000 recipes from Great British Chefs including recipe
                ideas for every occasion from quick weeknight meals ideas to
                elaborate dinner parties
              </p>
              <div className="mt-3 mb-3">
                <Button variant="danger" className="me-3">
                  Lets cook
                </Button>
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

      {/* interesting feature add-extra section on the ui */}

      <Feature></Feature>

      {/* subcription package- add another section */}
      <ServicePackage></ServicePackage>
    </div>
  );
};

export default Home;

