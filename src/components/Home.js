import React, { useEffect } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const quineBlue = '#007BFF';

// Light grey-white with opacity for form background
const formBackground = 'rgba(245, 245, 245, 0.85)';

const sectionStyle = {
  padding: '60px 0',
  color: '#fff',
};

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section with white background */}
      <div
        style={{
          backgroundColor: 'white',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: '#333',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={7} data-aos="fade-right">
              <h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '0.5rem' }}>
                Welcome to Training Hub
              </h1>
              <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '1.5rem' }}>
                Empower your career with our expert-led courses and hands-on projects.
              </p>

              {/* Trained Students Count */}
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: quineBlue,
                  marginBottom: '2rem',
                }}
              >
                <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>200+</span> Students Trained
              </div>

              <Link to="/courses">
                <Button
                  variant="primary"
                  size="lg"
                  style={{ backgroundColor: quineBlue, border: 'none' }}
                >
                  Explore Courses
                </Button>
              </Link>
            </Col>

            {/* Book Your Trial with half-transparent grey-white background and background video */}
            <Col
              md={5}
              data-aos="fade-left"
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}
            >
              {/* Background video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                  opacity: 0.15,
                  borderRadius: '15px',
                }}
                src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190705_01_City_4k_001_preview.webm"
                type="video/webm"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>

              {/* Form container */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: formBackground,
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  zIndex: 1,
                }}
              >
                <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Book Your Trial</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ backgroundColor: quineBlue, border: 'none' }}
                  >
                    Book Trial
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Certification Section */}
      <div style={{ ...sectionStyle, backgroundColor: '#2a5298' }} data-aos="fade-up">
        <Container className="text-center">
          <h2>Certified by NSDC</h2>
          <p style={{ maxWidth: '700px', margin: 'auto', fontSize: '1.2rem' }}>
            We are proud to be certified by the National Skill Development Corporation (NSDC),
            ensuring quality training and recognized certification.
          </p>
          <img
            src="https://nsdcindia.org/sites/default/files/nsdc-logo.png"
            alt="NSDC Logo"
            style={{ maxWidth: '150px', marginTop: '20px' }}
          />
        </Container>
      </div>

      {/* Why Choose Us Section */}
      <div style={{ ...sectionStyle, backgroundColor: '#1e3c72' }} data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <Row>
            <Col md={4} className="mb-4">
              <h4>Fresher Friendly Training</h4>
              <p>
                We specialize in training freshers, with a proven track record of successfully
                training over 200 students in Web Development and AI.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Collaborations</h4>
              <p>
                Proud collaborators with the Tamil Nadu Skill Development Program, ensuring
                industry-relevant skills and opportunities.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>What Sets Us Apart</h4>
              <p>
                Unlike others, we focus on hands-on projects, personalized mentorship, and
                real-world applications to make you job-ready.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}