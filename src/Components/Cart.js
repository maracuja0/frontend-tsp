import {Card, Button} from 'react-bootstrap';
// import {Link} from 'react'
import _header from '../_header.png'
//import heartIcon from './HeartIcon'
//import styled from "styled-components";
import { Link } from 'react-router-dom';

import axios from 'axios'
import { useState, useEffect } from 'react';

// function BasicExample() {
//     return (
        // <Container className={"p-2"}>
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={_header} />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //             </Card.Text>
        //             <Button variant="outline-primary">Сохранить</Button>
        //             <Button variant="outline-primary" className="ms-2" > Записаться</Button>
        //         </Card.Body>
        //     </Card>
        // </Container>

//     <Card className={"m-2"} style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={_header} />
//         <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text >
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//             </Card.Text>
//             <Button variant="outline-primary">
//                 Сохранить
//             </Button>
//             <Button variant="outline-primary" className="ms-2" > Записаться</Button>
//         </Card.Body>
//     </Card>
//     );
//   }

//   export default BasicExample;

function CardComponent({id, title, text, imgUrl }) {


    return (
        // <Link to={`/position_page/${id}`} className='text-decoration-none'>
            <Card className="m-2" style={{ width: '18rem',height: '25rem'  }}>
                <Link to={`/position_page/${id}`} className='text-decoration-none'>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
                </Link>
                <Card.Body>
                    <Button variant="outline-primary">
                        Сохранить
                    </Button>
                    <Button variant="outline-primary" className="ms-2"> Записаться</Button>
                </Card.Body>

            </Card>
        // </Link>
    );
}

export default CardComponent;