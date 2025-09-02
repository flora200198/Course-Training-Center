import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const quineBlue = '#007BFF';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can add validation or send data to backend
    setSubmitted(true);
  };

  return (
    <section className="py-5">
      <Container style={{ maxWidth: '600px' }}>
        <h2 className="mb-4" style={{ color: quineBlue, fontWeight: 'bold' }}>
          Contact Us
        </h2>
        {submitted && <Alert variant="success">Thank you for contacting us!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" style={{ backgroundColor: quineBlue, border: 'none' }}>
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
}