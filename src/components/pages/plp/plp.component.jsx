import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
// import Accordion from 'react-bootstrap/Accordion'
import Product from "../product/product";
import "./plp.styles.scss";
import "../../../scss/_mixins.scss";
export default class plp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
      this.setState({ persons });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col lg={2} md={2} className="side_menu">
              <Row>
                <ul className="menu_Filter">
                  <li>
                    Vegies <span>+</span>
                  </li>
                  <li>Grains</li>
                  <li>Spices</li>
                  <li>Healthy Options</li>
                  <li>Vegies</li>
                  <li>Grains</li>
                  <li>Spices</li>
                  <li>Healthy Options</li>
                </ul>
              </Row>
            </Col>
            <Col md={10} lg={10} className="">
              <Container fluid className="products_list border-bg">
                <div className="category-det">
                  <span className="category-heading">DRY FRUITS & NUTS</span>
                  <div className="clearfix">
                    <span className="category-des">
                      A variety of Dry Fruits & Nuts products are available now
                      here. Look inside for great offers and free delivery
                    </span>
                  </div>
                </div>
                <Row className="m-2 justify-content-end plp-filters">
                  <Col xs={6} md={4} lg={2} className="sort_label">
                    <span>Sort By:</span>
                  </Col>
                  <Col xs={6} md={4} lg={2} className="p-0">
                    <Dropdown className="sort_dropdown">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Title (A - Z)
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
                <Row className="plp_list">
                  {this.state.persons.map((person) => (
                    <Product product={person} key={person.id} />
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
