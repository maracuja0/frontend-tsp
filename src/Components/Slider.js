import { useState } from 'react'; 
import {Carousel} from 'react-bootstrap';
import xBCZZhFLVaY from '../xBCZZhFLVaY.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  className ='mt-600' style ={{'height': '600px'}}>
        <img 
            className="d-block w-100"
            src={xBCZZhFLVaY}
            alt="First slide"
        />
    
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style ={{'height': '600px'}}>
        <img 
            className="d-block w-100"
            src={xBCZZhFLVaY}
            alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style ={{'height': '600px'}}>
        <img 
            className="d-block w-100"
            src={xBCZZhFLVaY}
            alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;