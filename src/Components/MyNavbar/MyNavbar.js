import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/home" className="nav-title">
                    <strong className="nav-text">Zamzam's Portfolio</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/home" className="first-nav">
                            <strong className="nav-text"> Home</strong>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume" className="nav-link">
                            <strong className="nav-text"> Resume</strong>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="nav-link">
                            <strong className="nav-text">Projects</strong>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className="nav-link">
                            <strong className="nav-text"> Blogs</strong>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="nav-link last-link"
                        >
                            <strong className="nav-text"> About</strong>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MyNavbar;
