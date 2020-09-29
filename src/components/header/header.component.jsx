import React, { Fragment } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="m-auto head-search">
            <FormControl
              type="text"
              placeholder="Search"
              className="head-search__input"
            />
          </Form>
          <Nav className="mr">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
