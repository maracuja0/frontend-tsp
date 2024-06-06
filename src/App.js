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
import {GlobalProvider, useGlobalContext} from "./GlobalInfo";
import CardPage from './CardPage';








function App() {


  return (
    <div className="App">
        <GlobalProvider>
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
        </GlobalProvider>



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

