import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import myPicture from "../../images/pixlr-bg-result.png";

const About = () => {
    return (
        <div>
            <Container
                fluid
                style={{
                    paddingTop: "5%",
                    paddingBottom: "5%",
                    backgroundColor: "black",
                    color: "white",
                }}
            >
                 <h1 style={{marginBottom: "5%"}}>About me</h1>
                <Row>
                    <Col md={3}>
                        <img
                            src={myPicture}
                            alt=""
                            style={{
                                width: "100%",
                                border: "5px solid white",
                                borderRadius: "1000px",
                                marginTop:"5px"
                            }}
                        />
                    </Col>
                    <Col md={9}>
                        <h3>
                            {" "}
                            I am{" "}
                            <span style={{ color: "dodgerblue" }}>
                                {" "}
                                Lamisa Zamzam
                            </span>
                        </h3>
                        <p style={{ marginRight: "35%" }}>
                            I am a full stack developer. I adore building
                            websites and handling errors, and even harm my sleep
                            to solve a problem. I lose myself amidst joy when I
                            can solve an issue. It's the best experience of my
                            life.
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <b>Full Name : </b> Lamisa Zamzam
                        </p>
                        <p>
                            <b>Nationality : </b> Bangladeshi
                        </p>
                        <p>
                            <b>Languages : </b> Bengali, English, Spanish, French, Portuguese, Chinese, Arabic, Hindi
                        </p>
                        <p>
                            <b>Address : </b> Dhap, Engineer Para, Rangpur, Bangladesh
                        </p>
                        <p>
                            <b>Email : </b>lamisazamzam@gmail.com
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
                </Row>
            </Container>
        </div>
    );
};

export default About;
