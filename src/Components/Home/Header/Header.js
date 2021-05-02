import React from "react";
import "./Header.css";
import myPicture from "../../../images/pixlr-bg-result.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <section className="header">
            <Container>
                <Row>
                    <Col md={7} className="header-column">
                        <h1>
                            Hello, I am <br />
                            <span style={{ color: "dodgerblue" }}>
                                {" "}
                                Lamisa Zamzam
                            </span>
                        </h1>
                        <h5>Junior Full Stack Developer</h5>
                        <br />
                        <p>
                            Coding is my passion, websites are my home. Always
                            running after exciting experiences and new
                            adventures. Big fan of brand new technologies.
                        </p>
                        <Button
                            as={Link}
                            to="Lamisa- Zamzam-resume-updated.pdf"
                            target="_blank"
                            download
                        >
                            <FontAwesomeIcon icon={faDownload} className="icon"/> Download
                            Resume
                        </Button>
                    </Col>
                    <Col md={5}>
                        <img src={myPicture} alt="" className="myPicture"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
