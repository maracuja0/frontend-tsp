import {Card} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function LikedCard({ title, text, imgUrl }) {
    return (
        <Card className="m-2" style={{ width: '18rem',height: '25rem'  }}>
        
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
        </Card.Body>        
    </Card>
    );
}

export default LikedCard;