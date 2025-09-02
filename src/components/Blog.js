import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const quineBlue = '#007BFF';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Web Development Trends in 2024',
    summary: 'Stay ahead with the latest trends shaping the web development landscape.',
    image: 'https://source.unsplash.com/400x300/?technology,web',
  },
  {
    id: 2,
    title: 'How AI is Changing Education',
    summary: 'Explore the impact of artificial intelligence on modern learning.',
    image: 'https://source.unsplash.com/400x300/?ai,education',
  },
  {
    id: 3,
    title: 'Cybersecurity Tips for Beginners',
    summary: 'Protect yourself online with these essential cybersecurity tips.',
    image: 'https://source.unsplash.com/400x300/?cybersecurity,security',
  },
];

export default function Blogs() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-4" style={{ color: quineBlue, fontWeight: 'bold' }}>
          Latest Blogs
        </h2>
        <Row className="g-4">
          {blogs.map(({ id, title, summary, image }) => (
            <Col md={4} key={id}>
              <Card className="h-100 shadow-sm" data-aos="fade-up">
                <Card.Img variant="top" src={image} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{summary}</Card.Text>
                  <Button variant="outline-primary" style={{ color: quineBlue, borderColor: quineBlue }}>
                    Read More
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