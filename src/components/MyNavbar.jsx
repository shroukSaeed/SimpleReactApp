import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-dark ">
            <Container className=''>
                <Navbar.Brand className='text-danger fw-bold'>My..Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link text-light' to='/'>Home</NavLink>
                        <NavLink className='nav-link text-light' to='/movies'>Movies</NavLink>
                        <NavLink className='nav-link text-light' to="/movies/0/edit">Add Movie</NavLink>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
