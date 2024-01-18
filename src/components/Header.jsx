import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhone } from "react-icons/fa";
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="container">
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="fixed-top  shadow">
      <Container>
        <Navbar.Brand>
          <Link to="/" className=" navbar-brand fw-semibold text-uppercase">
            esin ayla mimarlik
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav.Link
              href="/"
              className="active text-uppercase d-flex align-items-center "
            >
              {" "}
              Anasayfa <FaHome className="mx-1" />
            </Nav.Link>

            <NavDropdown
              title="URUNLER"
              id="basic-nav-dropdown"
              className="text-uppercase text-light"
            >
              <NavDropdown.Item href="seramik">Seramik</NavDropdown.Item>
              <NavDropdown.Item href="duvarkagidi">
                duvar kagidi
              </NavDropdown.Item>
              <NavDropdown.Item href="/vitrifiye">vitrifiye</NavDropdown.Item>
              <NavDropdown.Item href="/duskabini">
                dus kabini
              </NavDropdown.Item>
              <NavDropdown.Item href="/ankastre">
                Ankastre&&Evye
              </NavDropdown.Item>
              <NavDropdown.Item href="/banyomobilyalari">
                Banyo Mobilyalari
              </NavDropdown.Item>
              <NavDropdown.Item href="/yapikimyasallari">
                Yapi Kimyasallari
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="/about"
              className="text-uppercase d-flex align-items-center "
            >
              Hakkimizda{" "}
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
