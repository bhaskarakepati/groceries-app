
import React, { Component, Fragment } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import './navigationBar.scss';
import logo from '../../assets/logo.png'
export class navigationBar extends Component {
  render() {
    return (
      <Fragment>
        <Container >
          <Row md={4} lg={4} className="header_items m-2">
            <Col>
              <a href="/" class="header__logo"></a>
              <Image src={logo} rounded width className="img-fluid" />
            </Col>
            <Col>
              <span><b>Call us 01274 317178</b> <br />Mon - Sun 9:00 - 18:00</span>

            </Col>
            <Col className="profile">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sign In <br /> Your Account
              </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Sign In</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sign Up</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <Container >
          <Navbar expand="lg" className="border-top border-bottom font">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/orderNow">Vegies</Nav.Link>
                <NavDropdown title="Grains" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/orderNow">Spices</Nav.Link>
                <Nav.Link href="/">Healthy Options</Nav.Link>
                <NavDropdown title="Sweets & Snacks" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/orderNow">Spices</Nav.Link>
                <Nav.Link href="/">Healthy Options</Nav.Link>
                
                <Nav.Link href="/signin">Froozen Foods</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container >
      </Fragment>
    )
  }
}

export default navigationBar
