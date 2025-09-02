import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const quineBlue = '#007BFF';

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div style={{ color: quineBlue, fontWeight: 'bold' }}>© 2024 Training Hub</div>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="me-3" style={{ color: quineBlue }}>
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="me-3" style={{ color: quineBlue }}>
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="me-3" style={{ color: quineBlue }}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: quineBlue }}>
            <FaInstagram size={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
}