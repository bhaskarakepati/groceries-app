import React, { Component, Fragment } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./navigationBar.scss";
import logo from "../../assets/logo.png";
export class navigationBar extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="m-0 p-0">
          <Navbar expand="lg" className="border-top border-bottom font">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/orderNow">Vegies</Nav.Link>
                <NavDropdown title="Grains" id="basic-nav-dropdown">
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/orderNow">Spices</Nav.Link>
                <Nav.Link href="/">Healthy Options</Nav.Link>
                <NavDropdown title="Sweets & Snacks" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Fragment>
    );
  }
}

export default navigationBar;
