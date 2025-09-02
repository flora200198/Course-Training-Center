import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { testimonials } from '../Data/testimonials';

const quineBlue = '#007BFF';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue }}>What Our Students Say</h2>
        <Row className="g-4">
          {testimonials.map(({ id, name, role, photo, feedback }) => (
            <Col md={6} lg={4} key={id}>
              <Card className="h-100 shadow-sm p-3">
                <div className="d-flex align-items-center mb-3">
                  <Image src={photo} roundedCircle width={60} height={60} alt={name} />
                  <div className="ms-3">
                    <h5 className="mb-0">{name}</h5>
                    <small className="text-muted">{role}</small>
                  </div>
                </div>
                <Card.Text>"{feedback}"</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}