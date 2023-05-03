import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <div className="bg-dark p-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 className="text-white">POPULAR PICKS</h4>
            <p className="text-white">Muradabadi Chicken Recipe</p>
            <p className="text-white">RecipeGinger</p>
            <p className="text-white">RecipeKeema</p>
            <p className="text-white">RecipeKashmiri</p>
            <p className="text-white">Juice RecipeChinese</p>
          </Col>
          <Col lg={4}>
            <h4 className="text-white">Service</h4>
            <p className="text-white">Our Menu</p>
            <p className="text-white">Earn Credit</p>
            <p className="text-white">Gift Cards</p>
            <p className="text-white">Terms of Service</p>
            <p className="text-white">Privacy Policy</p>
          </Col>
          <Col lg={4}>
              <h4 className="text-white">Get our newsletter every week</h4>
              <p className="text-white">Submit your email here. You will get update about our CookMaster every week</p>
              <InputGroup size="sm" className="mb-3 mt-4">
              <InputGroup.Text id="inputGroup-sizing-sm" className=" bg-danger"> <span className="text-white fw-bold">Submit</span></InputGroup.Text>
              <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
               />
               </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

