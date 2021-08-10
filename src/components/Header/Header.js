import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import header from '../../images/header.jpg';
import logo from '../../images/icons/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${header})` }}>
            <Navbar>
                <Container>
                    <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="" /></Link>
                    <Nav className="me-auto">
                        <Link className="nav-link active menu" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link active menu" aria-current="page" to="/login">Login</Link>
                        <Link className="nav-link active menu" aria-current="page" to="/book">Book</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="title-container">
                <h1>Stargazer Hotel</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;