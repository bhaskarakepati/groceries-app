import React from "react";
import ReactDOM from "react-dom";
import productImage from '../../../assets/fruit.jpg';
import badamImage from '../../../assets/badam.jpg';
import { Card, Button, Figure } from "react-bootstrap";
import "../plp/plp.styles.scss";


const Product = (props) => {
    return (
        <div className="text-center product_card m-2">
            <Figure className="">
                <Figure.Image
                    width={200}
                    height={210}
                    alt="171x180"
                    src={badamImage}
                />
                <Figure.Caption>
                    {props.product.title}
                </Figure.Caption>
            </Figure>
            <span className="price">$ {props.product.price} </span>
            <div className="clearfix mt-2">
                {/* <div className="item-quantity">
                    <span class="number-toggle">
                        <span class="toggle-down"><i class="fa fa-minus"></i></span>
                        <input name="quantity" value="1" type="number" min="1" />
                        <span class="toggle-up"><i class="fa fa-plus"></i></span>
                    </span>
                </div> */}
                <button type="button" className="btn btn-primary cart_btn">Add to Cart</button>
            </div>
        </div>

        // <Card className="m-2" style={{ width: '12rem' }}>
        //     <Card.Img variant="top" src={productImage} />
        //     <Card.Body>
        //         <Card.Title>{props.product.title}</Card.Title>
        //         <Card.Text>
        //             {props.product.price}$
        //       </Card.Text>
        //         <Button variant="primary">Add to cart</Button>
        //     </Card.Body>
        // </Card>

    )
}

export default Product;


