import React from "react";
import "./Header.css";
import myPicture from "../../../images/pixlr-bg-result.png";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
import Shake from "react-reveal/Shake";
import Jump from "react-reveal/Jump";

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col md={12} lg={7} className="header-column">
                        <h1>
                            Hello, I am <br />{" "}
                        </h1>
                        <Jump>
                            <h1 style={{ color: "dodgerblue" }}>
                                {" "}
                                Lamisa Zamzam
                            </h1>
                        </Jump>

                        <h3>
                            {" "}
                            <Typewriter
                                options={{
                                    strings: [
                                        "Full Stack Developer",
                                        "MERN Stack Developer",
                                        "React Developer",
                                        "Web Developer",
                                        "Content Creator",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <br />
                        <p>
                            Coding is my passion, websites are my home. Always
                            running after exciting experiences and new
                            adventures. Big fan of brand new technologies.
                        </p>
                        <Shake>
                            <Button
                                as={Link}
                                to="Lamisa- Zamzam-resume-updated.pdf"
                                target="_blank"
                                download
                            >
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    className="icon"
                                />{" "}
                                Download Resume
                            </Button>
                        </Shake>
                        <Particles
                            params={{
                                particles: {
                                    number: {
                                        value: 200,
                                        density: {
                                            enable: true,
                                            value_area: 1000,
                                        },
                                    },
                                },
                            }}
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                            }}
                        />
                    </Col>
                    <Col md={12} lg={5}>
                        <img src={myPicture} alt="" className="myPicture" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
