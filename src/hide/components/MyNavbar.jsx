import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CounterContext } from '../context/counterContext';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-bootstrap';

export default function MyNavbar() {
    const {count} = useContext(CounterContext)
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/products'>Products({count})</NavLink>
                        <NavLink className='nav-link' to="/products/0/edit">Add Product</NavLink>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
