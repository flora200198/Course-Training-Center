import React from 'react';
import { Container, Button } from 'react-bootstrap';

const quineBlue = '#007BFF';

export default function Header({ onRequestDemo }) {
  return (
    <header className="bg-white text-center py-5" style={{ borderBottom: `4px solid ${quineBlue}` }}>
      <Container>
        <h1 style={{ color: quineBlue, fontWeight: 'bold' }}>Welcome to Training Hub</h1>
        <p className="lead text-secondary">
          Learn trending technologies like AI, Web Development, App Development, Big Data, Digital Marketing, DevOps, and more.
        </p>
        <p>
          <strong>We have trained 200+ students and partnered with government bodies to provide guaranteed placement guidance and assistance.</strong>
        </p>
        <Button variant="primary" size="lg" onClick={onRequestDemo}>Request a Demo Class</Button>
      </Container>
    </header>
  );
}