import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { courses } from '../Data/courses';// import full courses array from courses.js

const quineBlue = '#007BFF';

export default function Courses() {
  return (
    <section className="py-5 mt-5">
      <Container>
        <h2 className="mb-4 text-center" style={{ color: quineBlue, fontWeight: 'bold' }}>
          Our Courses
        </h2>
        <Row className="g-4">
          {courses.map(({ id, name, description, icon, duration }) => (
            <Col md={4} sm={6} xs={12} key={id}>
              <Card className="h-100 shadow-sm border-0 rounded-3" data-aos="zoom-in">
                <Card.Body className="text-center d-flex flex-column justify-content-between">
                  <div style={{ fontSize: '3rem', color: quineBlue, marginBottom: '15px' }}>
                    {icon}
                  </div>
                  <Card.Title style={{ fontWeight: '600' }}>{name}</Card.Title>
                  <Card.Text style={{ fontSize: '0.95rem', color: '#555' }}>
                    {description}
                  </Card.Text>
                  <p style={{ fontWeight: '500', color: quineBlue }}>
                    Duration: {duration}
                  </p>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: quineBlue, border: 'none' }}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
