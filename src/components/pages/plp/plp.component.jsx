import React, { Component } from 'react'
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";

import Product from '../product/product';
import './plp.styles.scss';
export default class plp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/products`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({ persons });
            })
    }
    render() {
        return (
            <React.Fragment>
                <Row className="mt-3">
                    <Col lg={3} >
                       <Row>
                           <ul className="menu_Filter">
                               <li>Vegies</li>
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
                    <Col md={12} lg={9} className="">
                        <div className="row products_list border-bg">
                            {this.state.persons.map(person => <Product product={person} />)}
                        </div>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}
