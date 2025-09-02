import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const quineBlue = '#007BFF';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Learn to build modern web applications with React and Node.js.',
    image: 'https://source.unsplash.com/400x300/?web,development',
  },
  {
    id: 2,
    title: 'Data Science & AI',
    description: 'Master data analysis, machine learning, and AI techniques.',
    image: 'https://source.unsplash.com/400x300/?data,science',
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    description: 'Protect systems and networks from cyber threats.',
    image: 'https://source.unsplash.com/400x300/?cybersecurity',
  },
];

export default function Courses() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue, fontWeight: 'bold' }}>
          Our Courses
        </h2>
        <Row className="g-4">
          {courses.map(({ id, title, description, image }) => (
            <Col md={4} key={id}>
              <Card className="h-100 shadow-sm" data-aos="zoom-in">
                <Card.Img variant="top" src={image} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button variant="primary" style={{ backgroundColor: quineBlue, border: 'none' }}>
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