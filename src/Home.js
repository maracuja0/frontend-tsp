import React from "react";
import  Slider from './Components/Slider';
import  Cart from './Components/Cart';
import  Footer from './Components/Footer';
import {Container} from "react-bootstrap";

export const Home=() => (
    <div>
      <Slider/>
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
