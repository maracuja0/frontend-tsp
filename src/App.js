// import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
// import axios from 'axios'
import  NaviBar  from './Components/Navibar';
import  NotFound  from './Components/NotFound';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import  {Home}  from './Home';
import  {Account}  from './Account';
import  {Liked}  from './Liked';
import  {Basket}  from './Basket';
import Footer from "./Components/Footer";
import {GlobalProvider} from "./GlobalInfo";

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
    <div className="App">
        <GlobalProvider>
          <Router>
            <NaviBar/>
              <Routes>
                <Route  exact path="/"  element={<Home/>} />
                <Route path="/account"  element={<Account/>} />
                <Route path="/liked"  element={<Liked/>} />
                <Route path="/basket"  element={<Basket/>} />
                 <Route path="*"  element={<NotFound/>} />
              </Routes>
          </Router>
          <Footer/>
        </GlobalProvider>
    </div>
  );
}

export default App;
