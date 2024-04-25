import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark   mt-auto text-light py-4">
      <Container>
        <Row>
          <Col>
            <p>Контактная информация</p>
            <ul>
              <li>Email: example@example.com</li>
              <li>Телефон: +1234567890</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;