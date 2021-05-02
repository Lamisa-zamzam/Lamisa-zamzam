import React from "react";
import Header from "../Header/Header";
import ProjectsShort from "../../ProjectsShort/ProjectsShort";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="home">
                <Header></Header>
                <div className="home-section">
                    <ProjectsShort home={true} />
                </div>
                <section className="home-section">
                    <h3>My blogs: </h3>
                    <p>Coming Soon!! 😀</p>
                    <Button as={Link} to="/blogs" className="rightAlignedButton">
                        Show All
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2"
                        />{" "}
                    </Button>
                </section>
                <section className="home-section resume-section">
                    <h3>My resume</h3>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h5>Skills</h5>
                            <ul>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                            </ul>
                            <br />
                            <Button as={Link} to="/resume" className="home-resume">
                                Show All
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="ml-2"
                                />{" "}
                            </Button>
                        </Col>
                        <Col md={6}>
                            <h5>Extra Curricular Activities</h5>
                            <ul>
                                <li>Leaderships</li>
                                <li>Learning Languages</li>
                                <li>Playing Football</li>
                            </ul>
                            <br />
                            <Button as={Link} to="/resume">
                                Show All
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="ml-2"
                                />{" "}
                            </Button>
                        </Col>
                    </Row>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
