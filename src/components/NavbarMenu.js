import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavbarMenu() {
    // Initialize countdown time in seconds (10 hours)
    const initialTime = 10 * 60 * 60; // 10 hours in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    // Format timeLeft into days, hh:mm:ss
    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hrs = Math.floor((seconds % (24 * 3600)) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const pad = (num) => num.toString().padStart(2, '0');

        return `${days} day${days !== 1 ? 's' : ''} ${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    };

    return (
        <>
            {/* Top countdown bar */}
            <div
                style={{
                    backgroundColor: '#0d4a88ff',
                    color: 'white',
                    textAlign: 'center',
                    padding: '6px 0',
                    fontWeight: '600',
                    position: "sticky",
                    top: 0,
                    fontSize: '0.9rem',
                    userSelect: 'none',
                }}
            >
                Apply Now - Scholarship ends within {formatTime(timeLeft)}
            </div>

            {/* Main Navbar */}
            <Navbar
                expand="lg"
                fixed="top"
                className="shadow-sm"
                style={{
                    backgroundColor: 'var(--secondary-background)',
                    color: 'var(--navy-blue)',
                    fontWeight: 'bold',
                    top: '40px', // position below the Apply Now bar
                    zIndex: 1040, // less than Apply Now bar
                }}
                variant="light"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand style={{ fontWeight: 'bold', color: 'var(--navy-blue)' }}>Training Hub</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="ms-auto">
                            <LinkContainer to="/">
                                <Nav.Link style={{ color: 'var(--navy-blue)', fontWeight: 'bold' }}>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link style={{ color: 'var(--navy-blue)', fontWeight: 'bold' }}>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/courses">
                                <Nav.Link style={{ color: 'var(--navy-blue)', fontWeight: 'bold' }}>Courses</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/blogs">
                                <Nav.Link style={{ color: 'var(--navy-blue)', fontWeight: 'bold' }}>Blogs</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to="/contact">
                                <Nav.Link style={{ color: 'var(--navy-blue)', fontWeight: 'bold' }}>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}