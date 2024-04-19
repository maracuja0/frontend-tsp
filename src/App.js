import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios'

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/user")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited by Maracuja0
        </p>

          <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
