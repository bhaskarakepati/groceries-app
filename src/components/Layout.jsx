import React from "react";
import Container from "react-bootstrap/Container";
const Layout = (props) => (
  <Container fluid className="m-0 p-0">
    {props.children}
  </Container>
);
export default Layout;
