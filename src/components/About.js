import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const quineBlue = '#007BFF';

export default function About() {
  return (
    <section className="py-5 bg-light mt-5">
      <Container>
        <h2 className="mb-4 text-center" style={{ color: quineBlue, fontWeight: 'bold' }}>
          About Training Hub
        </h2>

        {/* About Intro */}
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <Image
              src="https://source.unsplash.com/600x400/?team,work"
              alt="About us"
              fluid
              rounded
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p style={{ fontSize: '1.1rem' }}>
              Training Hub is dedicated to providing high-quality training programs
              that empower individuals to excel in their careers. Our expert instructors,
              hands-on projects, and supportive community ensure you gain real-world skills.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              Join thousands of learners who have transformed their lives with us.
              Whether you are a fresher stepping into the industry or a professional
              looking to upskill, Training Hub is your trusted learning partner.
            </p>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="text-center mb-5">
          <Col md={6} data-aos="zoom-in">
            <Card className="p-4 shadow-sm border-0 h-100">
              <h4 style={{ color: quineBlue, fontWeight: '600' }}>Our Mission</h4>
              <p>
                To make quality education accessible to everyone and help individuals
                build strong, practical skills that make them industry-ready.
              </p>
            </Card>
          </Col>
          <Col md={6} data-aos="zoom-in">
            <Card className="p-4 shadow-sm border-0 h-100">
              <h4 style={{ color: quineBlue, fontWeight: '600' }}>Our Vision</h4>
              <p>
                To be a global leader in skill development and professional training,
                nurturing innovation, and driving career success for our learners.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Values / Highlights */}
        <Row className="text-center mb-5">
          <Col md={4} data-aos="fade-up">
            <Card className="p-4 border-0 shadow-sm h-100">
              <h5 style={{ color: quineBlue, fontWeight: '600' }}>💡 Innovation</h5>
              <p>
                We stay ahead with the latest tools, technologies, and teaching methods.
              </p>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="p-4 border-0 shadow-sm h-100">
              <h5 style={{ color: quineBlue, fontWeight: '600' }}>🤝 Community</h5>
              <p>
                A strong network of mentors, peers, and alumni who support each other.
              </p>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="400">
            <Card className="p-4 border-0 shadow-sm h-100">
              <h5 style={{ color: quineBlue, fontWeight: '600' }}>🎯 Excellence</h5>
              <p>
                Our programs focus on hands-on learning, ensuring you are job-ready.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="text-center mb-5">
          <Col md={3} sm={6} className="mb-4" data-aos="flip-left">
            <h2 style={{ color: quineBlue, fontWeight: 'bold' }}>200+</h2>
            <p>Students Trained</p>
          </Col>
          <Col md={3} sm={6} className="mb-4" data-aos="flip-left" data-aos-delay="200">
            <h2 style={{ color: quineBlue, fontWeight: 'bold' }}>10+</h2>
            <p>Industry Partnerships</p>
          </Col>
          <Col md={3} sm={6} className="mb-4" data-aos="flip-left" data-aos-delay="400">
            <h2 style={{ color: quineBlue, fontWeight: 'bold' }}>15+</h2>
            <p>Expert Trainers</p>
          </Col>
          <Col md={3} sm={6} className="mb-4" data-aos="flip-left" data-aos-delay="600">
            <h2 style={{ color: quineBlue, fontWeight: 'bold' }}>95%</h2>
            <p>Placement Support</p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col>
            <h4 style={{ fontWeight: '600' }}>
              Ready to take the next step in your career?
            </h4>
            <p>
              Explore our wide range of courses and start your learning journey with us today!
            </p>
            <a href="/courses" className="btn btn-primary btn-lg" style={{ backgroundColor: quineBlue, border: 'none' }}>
              View Courses
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
