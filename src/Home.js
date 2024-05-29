import React, {useEffect, useState} from "react";
import  Slider from './Components/Slider';
import  Cart from './Components/Cart';
import  Footer from './Components/Footer';
import {Container} from "react-bootstrap";
import axios from "axios";

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


// import React, { useEffect, useState } from "react";
// import Slider from './Components/Slider';
// import Cart from './Components/Cart';
// import Footer from './Components/Footer';
// import { Container } from "react-bootstrap";
// import axios from "axios";

// Custom hook to fetch positions
// function usePositions() {
//     const [data, setData] = useState([]);
//
//     useEffect(() => {
//         axios
//             .get("http://localhost:8080/api/positions")
//             .then((response) => {
//                 setData(response.data);
//                 // console.log(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);
//
//     return data;
// }
//
// export const Home = () => {
//     const positions = usePositions();
//
//     return (
//         <div>
//             <Slider />
//             <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
//                 {positions.map((position, index) => (
//                     // <Cart key={index} position={position} />
//                     // console.log(position.name)
//                 ))}
//             </Container>
//             <Footer />
//         </div>
//     );
// }
//
// export default Home;
