import React from "react";
import { RiVipDiamondFill } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./Navi.css";

export default function Navi() {
  return (
    <div>
      <Navbar expand="lg" className="border-bottom">
        <Container fluid className="ps-4 ms-4 pe-4 me-4">
          <Navbar.Brand href="#" className="fw-bold">
            CoinMarketCap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="#" className="ps-3">
                Cryptocurrencies
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                Exchanges
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                NFT
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                CrypTown
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                Watchlist
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                Products
              </Nav.Link>
              <Nav.Link href="#" className="ps-4">
                Learn
              </Nav.Link>
            </Nav>
            {/* nav right */}
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="#">
                <RiVipDiamondFill className="navigation__diamond me-4" />
              </Nav.Link>
              <Nav.Link href="#" className="navigation__login me-4">
                Login
              </Nav.Link>
              <Nav.Link
                href="#"
                className="px-4 py-2 bg-primary rounded-3 navigation__signup me-4"
              >
                Sign Up
              </Nav.Link>
              <Form className="ms-2 d-flex align-items-center position-relative">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <BiSearchAlt2 className="fs-4 me-3 position-absolute end-0 navigation__searchicon" />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
