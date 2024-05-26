import {Card, Button, Container} from 'react-bootstrap';
import _header from '../_header.png'
import heartIcon from './HeartIcon'
import styled from "styled-components";

function BasicExample() {
    return (
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

    <Card className={"m-2"} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={_header} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">
                Сохранить
            </Button>
            <Button variant="outline-primary" className="ms-2" > Записаться</Button>
        </Card.Body>
    </Card>
    );
  }
  
  export default BasicExample;