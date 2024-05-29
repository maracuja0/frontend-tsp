import React from 'react';
import { Image, Button, Card } from 'react-bootstrap';

import axios from 'axios'
import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import _header from './_header.png'
import NotFound from './Components/NotFound';



function CardPage(){
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/positions/${id}`)
        .then((response) => {
            
            setData(response.data);
            console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
    if (id)

    if (data !== undefined && data !== null && data.length !== 0){
        return(
           
            <div>
            {/* KARTOCHKA {id} */}
            <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <Card.Img src='../hack.png' className="" style={{ width: '700px', height: '450px'}}/>
            </Card>
            
            <h1 className="display-3 text-primary " style={{fontFamily: 'Oslo, sans-serif'}}> Дата проведения хакатона: {data.date}</h1>
            <h2 className='ms-2' style={{ textAlign: 'left', fontFamily: 'Oslo, sans-serif' }}>Название: "{data.name}"</h2>
            
            <h3 className='ms-2' style={{ textAlign: 'left' , fontFamily: 'Oslo, sans-serif'}}>Описание: {data.description}</h3>
            <h4 className='ms-2' style={{ textAlign: 'left' , fontFamily: 'Oslo, sans-serif'}}>Организатор:  {data.creatorId.firstName} {data.creatorId.lastName}</h4>
    
            <Button variant="outline-primary " className='mb-2'>Сохранить</Button>
                    
            <Button variant="outline-primary" className=" ms-2 mb-2"> Записаться</Button>
            <Button variant="outline-primary" className="ms-2 mb-2" href="/"> Вернуться на главную</Button>
        </div>
            
        )      
    }else{
        // return setRedirect('*'); // Redirect to error page
        return <NotFound/>;
    }   
}

export default CardPage