import React from "react";
import ReactDOM from "react-dom";
import productImage from '../../../assets/fruit.jpg';
import {Card, Button} from "react-bootstrap";
const Product = (props) => {
    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text>
                    {props.product.description}
              </Card.Text>
              <Card.Text>
                  {props.product.price}$
              </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

 export default Product;


