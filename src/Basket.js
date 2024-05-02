import React from "react";
import  Cart from './Components/Cart';
import Footer from "./Components/Footer";
import {Container} from "react-bootstrap";

export const Basket=() => (
    <div>
        <h1 className="ms-4 mt-4">Корзина</h1>
        <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
        </Container>
    </div>


        )
