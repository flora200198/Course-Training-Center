import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { miniProjects } from '../Data/miniProjects';

const quineBlue = '#007BFF';

export default function MiniProjects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue }}>Mini Projects</h2>
        <Row className="g-4">
          {miniProjects.map(project => (
            <Col md={6} lg={4} key={project.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="outline-primary" disabled>View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}