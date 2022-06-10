import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <Navbar className='navbar' expand="lg" sticky='top' >
            <Container>
                <Navbar.Brand as={Link} to="/" className='nav-link fw-bold'>My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='nav-link mx-2 px-3 rounded-3' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='nav-link mx-2 px-3 rounded-3' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='nav-link mx-2 px-3 rounded-3' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default HeaderNav;