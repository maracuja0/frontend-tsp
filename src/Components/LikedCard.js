import {Card, Button, Container} from 'react-bootstrap';
import _header from '../_header.png'

function LikedCard() {
    return (
        //   <Container style={{ paddingTop:'2rem' , paddingBottom:'2rem', paddingRight: '0' }}>
        //
        // </Container>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={_header} />
            <Card.Body>
                <Card.Title style={{ fontSize: '14px' }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: '12px' }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default LikedCard;