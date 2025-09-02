import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const quineBlue = '#007BFF';

export default function About() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue, fontWeight: 'bold' }}>
          About Training Hub
        </h2>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <Image
              src="https://source.unsplash.com/600x400/?team,work"
              alt="About us"
              fluid
              rounded
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p>
              Training Hub is dedicated to providing high-quality training programs
              that empower individuals to excel in their careers. Our expert instructors,
              hands-on projects, and supportive community ensure you gain real-world skills.
            </p>
            <p>
              Join thousands of learners who have transformed their lives with us.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}