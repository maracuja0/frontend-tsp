// import logo from './logo.svg';
 import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
 import axios from 'axios'
import  NaviBar  from './Components/Navibar';
import  NotFound  from './Components/NotFound';
import  PlusHack  from './PlusHack';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import  Home  from './Home';
import  {Account}  from './Account';
import  Liked  from './Liked';

import Footer from "./Components/Footer";
import {GlobalProvider} from "./GlobalInfo";
import CardPage from './CardPage';









function App() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8080/api/user")
    //         .then((response) => {
    //             setData(response.data);
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edited by Paul1ns & Maracuja0
    //     </p>
    //     <h1>
    //        meow
    //     </h1>

    //     <InputGroup> 
    //       <InputGroup.Text>
    //         @
    //       </InputGroup.Text>
    //       <Form.Control aria-label='Username' placeholder='Username'>
          
    //       </Form.Control>
    //     </InputGroup>

    //       <Button>мяу</Button>
    //   </header>
    // </div>
    <div className="App">

      <Router>
        <NaviBar/>
          <Routes>
            <Route  exact path="/"  element={<Home/>} />
            <Route path="/account"  element={<Account/>} />
            <Route path="/liked"  element={<Liked/>} />
            {/* <Route path="/basket"  element={<Basket/>} /> */}
            <Route path="*"  element={<NotFound/>} />
            {/* <Route path="/add_a_hackathon"  element={<PlusHack/>} /> */}
            <Route path="/position_page/:id"  element={<CardPage/>} />
          </Routes>
      </Router>
      <Footer/>



    {/* <h1>Список пользователей:</h1>
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul> */}
    </div>

  );
}

export default App;

