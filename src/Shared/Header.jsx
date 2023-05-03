import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaHotel} from "react-icons/fa";


const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="danger bg-opacity-75" variant="danger bg-opacity-75">
        <Container>
          <Navbar.Brand  className="text-white d-flex  align-items-center ms-2 fw-bold"><FaHotel/> <span className="ms-2">CookMaster</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto px-4">
            <NavLink
            to="/"  className={({ isActive }) => isActive ? "text-info  text-decoration-none me-4 fw-bolder" : "text-white text-decoration-none me-4 fw-bolder"}>Home
            </NavLink>
            <NavLink
            to="/blog"  className={({ isActive }) => isActive ? "text-info  text-decoration-none fw-bolder" : "text-white text-decoration-none fw-bolder"}>Blog
            </NavLink>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">ProfileUrl</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
