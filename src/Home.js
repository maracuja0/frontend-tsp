import React from "react";
import  Slider from './Components/Slider';
import  Cart from './Components/Cart';
//import  Footer from './Components/Footer';
import {Container} from "react-bootstrap";
import axios from 'axios'
import { useState, useEffect } from 'react';
import CardComponent from "./Components/Cart";
import _header from './_header.png'


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/positions")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
         <Slider/>
         <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
            {data.map((position) => (
               <CardComponent 
                  title={position.name} 
                  text={position.description} 
                  imgUrl={_header} 
                  id={position.id}
               />
            ))}
         </Container>
      </div>
         
    </div>
  );
}

export default Home;
