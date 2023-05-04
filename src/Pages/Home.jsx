import React, { useEffect, useState } from "react";
import background from "../assets/bg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Feature from "./Feature";
import ServicePackage from "./ServicePackage";
import "./CSS/Shared.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [cookDataLoader, setCookDataLoader] = useState([]);
  console.log(cookDataLoader);

  useEffect(() => {
    fetch("http://localhost:5000/cook")
      .then((res) => res.json())
      .then((data) => setCookDataLoader(data));
  }, []);

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

      {/* 6 card show in ui */}
      <div className="cook-container">
        <h3 className="text-center fw-bolder fs-1">Let's meet the expart</h3>
        <p className="text-center fw-semibold text-secondary">Meet our Food & Drink experts· Recommended you for felling best test</p>

        <div className="cook-card">
          {cookDataLoader.map((cookData) => (
            <div key={cookData.id}>
              <Card style={{ width: "18rem" }} className="mb-3 bg-light">
                <Card.Img variant="top" src={cookData.chef_picture} />
                <Card.Body>
                  <Card.Title>{cookData.chef_name}</Card.Title>
                  <Card.Text>
                       <div>
                          <h6 className="text-secondary">Years of experience: <span className="fw-bold">{cookData.years_of_experience}</span> </h6>
                          <h6 className="text-secondary">Numbers of recipes: <span className="fw-bold">{cookData.number_of_recipes}</span></h6>
                          <h6 className="text-secondary">Likes: <span className="fw-bold">{cookData.likes}</span></h6>
                       </div>
                  </Card.Text>
                  <Link to={`/cookdetail/${cookData.id}`}>
                        <Button variant="danger">View Recipes</Button>
                  </Link> 
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>


      {/* our subcription package */}
       <ServicePackage></ServicePackage>
    </div>
  );
};

export default Home;
