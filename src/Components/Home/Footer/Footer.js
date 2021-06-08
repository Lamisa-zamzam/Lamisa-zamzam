import React from "react";
import { Button } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="contact-div">
                <div className="contactDivCol ml-5">
                    <h3 className="heading">
                        Do you want to <strong> hire me</strong>? Contact me
                        here:{" "}
                    </h3>
                    <h6>
                        Call me: 01714762741 or email: lamisazamzam@gmail.com
                    </h6>
                </div>
                <div>
                    <Button
                        className="contactBtn brandBtn"
                        as={Link}
                        to="/about"
                    >
                        Contact Me
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ marginLeft: "10px" }}
                        />
                    </Button>
                </div>
            </div>
            <p className="text-center mt-5">
                <small>
                    Copyright © Lamisa Zamzam {new Date().getFullYear()}, all
                    rights reserved.{" "}
                </small>
            </p>
        </footer>
    );
};

export default Footer;
