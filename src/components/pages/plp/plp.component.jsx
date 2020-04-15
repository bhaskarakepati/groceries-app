import React, { Component } from 'react'
import axios from 'axios';
import Product from './product';
import './plp.styles.scss';
export default class plp extends Component {
    state = {
        persons: []
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
                <div className="row products_list">
                { this.state.persons.map(person => <Product product={person} />)}
                </div>
            </React.Fragment>
        )
    }
}
