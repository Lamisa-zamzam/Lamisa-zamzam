import React from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import "./EmailForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function EmailForm() {
    function sendEmail(e) {
        e.preventDefault();

        console.log(e.target.value);

        emailjs
            .sendForm(
                "service_d4xcx8l",
                "template_rw8jmdd",
                e.target,
                "user_laNC1pPxtQsfizYD8Eg8k"
            )
            .then(
                (result) => {
                    if(result.text === "OK"){
                        alert("Your email has been sent successfully!! Thank you for connecting with me.")
                    };
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <br />
                        <label>Enter Your Name</label>
                        <br />
                        <input type="text" name="name" className="input" />
                        <br />
                        <br />
                        <label>Enter Your Email</label>
                        <br />
                        <input type="email" name="email" className="input" />
                        <br />
                        <br />
                        <label>Enter Your Subject</label>
                        <br />
                        <input type="text" name="subject" className="input" />
                        <br />
                        <br />
                        <label>Enter Your Message</label>
                        <br />
                        <textarea name="message" />
                        <br />
                        <br />
                        <input
                            type="submit"
                            value="SEND MAIL"
                            className="submitButton"
                        />
                    </form>
                </Col>
                <Col md={6}>
                    <br />
                    <div className="infoDiv">
                        <Row>
                            <Col md={2}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    size="3x"
                                    className="icon"
                                />
                            </Col>
                            <Col md={10}>
                                <h4>Phone</h4>
                                <p>01714762741</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="infoDiv">
                        <Row>
                            <Col md={2}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    size="3x"
                                    className="icon"
                                />
                            </Col>
                            <Col md={10}>
                                <h4>Email</h4>
                                <p>lamisazamzam@gmail.com</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="infoDiv">
                        <Row>
                            <Col md={2}>
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    size="3x"
                                    className="icon"
                                />
                            </Col>
                            <Col md={10}>
                                <h4>Address</h4>
                                <p>Dhap, Engineer Para, Rangpur, Bangladesh</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
