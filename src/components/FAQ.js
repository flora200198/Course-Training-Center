import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { faq } from '../Data/faq';

const quineBlue = '#007BFF';

export default function FAQ() {
  return (
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue }}>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          {faq.map(({ question, answer }, idx) => (
            <Accordion.Item eventKey={idx.toString()} key={idx}>
              <Accordion.Header>{question}</Accordion.Header>
              <Accordion.Body>{answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}