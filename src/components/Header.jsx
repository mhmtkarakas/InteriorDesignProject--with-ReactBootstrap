import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaPhone } from "react-icons/fa";
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../utils/img/logo.png"


const Header = () => {
  return (
    <div className="container">
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="fixed-top  shadow">
      <Container>
        <Navbar.Brand className="picture">
          <Link to="/" className=" navbar-brand fw-semibold text-uppercase">
            <img className="img img-fluid  rounded" src={Logo} alt="logo" /> 
          </Link>
          <div className="name-container"><p className="name">esinayla <span>mimarlik</span>
           </p></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100 ">
            <Nav.Link
              href="/"
              className="active text-uppercase d-flex align-items-center mx-1"
            >
              {" "}
              Anasayfa <FaHome className="mx-1" />
            </Nav.Link>

            <Nav.Link
              href="/about"
              className="text-uppercase d-flex align-items-center mx-1"
            >
              Hakkimizda{" "}
            </Nav.Link>
            <Nav.Link
              href="/services"
              className="text-uppercase d-flex align-items-center mx-1"
            >
              Hizmetler{" "}
            </Nav.Link>
            <Nav.Link
              href="/projects"
              className="text-uppercase d-flex align-items-center mx-1"
            >
              Projeler{" "}
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="text-uppercase d-flex align-items-center "
            >
              Iletisim <FaPhone className="mx-1" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header
