import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const quineBlue = '#007BFF';

export default function Syllabus({ course }) {
  if (!course) return null;

  return (
    <section id="syllabus" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue }}>Syllabus - {course.name}</h2>
        <ListGroup>
          {course.syllabus.map((topic, idx) => (
            <ListGroup.Item key={idx}>{topic}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
}