import React from 'react';
import {  Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="bg-dark mt-auto text-light py-4">
      {/*<Container>*/}
        <Row>
          <Col>
            <p>Контактная информация</p>
            <ul className={"list-unstyled"}>
                <li>Email: paul1ns@yandex.ru; sd@yandex.ru; sidvert@yandex.ru</li>
                <li>Телефон: +1234567890</li>
            </ul>
          </Col>
        </Row>
      {/*</Container>*/}
    </footer>
  );
}

export default Footer;