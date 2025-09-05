import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const quineBlue = "#007BFF";

export default function Footer() {
  return (
    <footer className="bg-light py-5 mt-5 border-top">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={3} className="mb-4">
            <h5 style={{ color: quineBlue, fontWeight: "bold" }}>Training Hub</h5>
            <p>Empowering students with skills in Instrumentation & Automotive Engineering.</p>
            <p>© 2024 Training Hub</p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold" style={{ color: quineBlue }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="/courses" className="text-decoration-none text-dark">Courses</a></li>
              <li><a href="/admissions" className="text-decoration-none text-dark">Admissions</a></li>
              <li><a href="/contact" className="text-decoration-none text-dark">Contact</a></li>
            </ul>
          </Col>

          {/* Company Address */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold" style={{ color: quineBlue }}>Contact Us</h6>
            <p>123 Tech Park Road<br />Chennai, India - 600001</p>
            <p>Email: info@traininghub.com<br />Phone: +91 98765 43210</p>
          </Col>

          {/* Feed / Latest News */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold" style={{ color: quineBlue }}>Latest Updates</h6>
            <ul className="list-unstyled">
              <li>📢 New Batch: PLC Programming - Sep 15</li>
              <li>🚗 Workshop: Electric Vehicles - Sep 20</li>
              <li>🎓 Placement Drive: Automotive Companies</li>
            </ul>
          </Col>
        </Row>

        <hr />

        {/* Social Links */}
        <Row className="text-center">
          <Col>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
