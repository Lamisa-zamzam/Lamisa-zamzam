import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/home" className="first-nav">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume" className="nav-link">
                            Resume
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className="nav-link"
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className="nav-link">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link last-link">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MyNavbar;
