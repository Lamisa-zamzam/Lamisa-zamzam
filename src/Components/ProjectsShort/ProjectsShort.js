import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import screenshot1 from "../../images/2021-05-01 (9).png";
import screenshot2 from "../../images/2021-05-01 (11).png";
import screenshot3 from "../../images/2021-05-01 (23).png";
import screenshot4 from "../../images/2021-05-01 (15).png";
import screenshot5 from "../../images/2021-05-01 (24).png";

const ProjectsShort = (props) => {
    return (
        <div>
            <Row>
                <Col md={9}>
                    {" "}
                    <h1>My Projects</h1>
                </Col>
                <Col md={3} className="mt-2">
                    {" "}
                    <Button as={Link} to="/projects">
                        Show Detail
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2"
                        />{" "}
                    </Button>
                </Col>
            </Row>
            <br />
            <div className="infoDiv">
                <Row>
                    <Col md={3}>
                        <img src={screenshot1} className="projectImg" alt="" />
                    </Col>
                    <Col md={9}>
                        <h5 className="shortProjectTitle">
                            Zamzam International
                        </h5>
                        <p>
                            This is a Visa Agency Website. Registered visa
                            appliers can pay with their credit cards for booking
                            a visa and give a review to the company that is
                            added to the website.
                        </p>
                        <a
                            href="https://complete-website-3.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit my live site
                        </a>
                    </Col>
                </Row>
            </div>
            <div className="infoDiv">
                <Row>
                    <Col md={3}>
                        <img src={screenshot2} className="projectImg" alt="" />
                    </Col>
                    <Col md={9}>
                        <h5 className="shortProjectTitle">
                            Zamzam's Collection
                        </h5>
                        <p>
                            This is a full-stack website where authenticated
                            users can buy a product and see their orders. Admins
                            can add, edit and delete products.
                        </p>
                        <a
                            href=" https://full-stack-sport-grocery.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit my live site
                        </a>
                    </Col>
                </Row>
            </div>
            <div className="infoDiv">
                <Row>
                    <Col md={3}>
                        <img src={screenshot3} className="projectImg" alt="" />
                    </Col>
                    <Col md={9}>
                        <h5 className="shortProjectTitle">Globetrotter</h5>
                        <p>
                            This responsive project provides users with several
                            ways to travel around the city.
                        </p>
                        <a
                            href="https://react-auth-3.web.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit my live site
                        </a>
                    </Col>
                </Row>
            </div>
            {!props.home && (
                <>
                    <div className="infoDiv">
                        <Row>
                            <Col md={3}>
                                <img
                                    src={screenshot4}
                                    className="projectImg"
                                    alt=""
                                />
                            </Col>
                            <Col md={9}>
                                <h5 className="shortProjectTitle">
                                    Juegoes del Universo
                                </h5>
                                <p>
                                    This responsive project relates to games,
                                    sports and the tournaments available. I used
                                    a third party API to load data about the
                                    leagues of different games.
                                </p>
                                <a
                                    href="https://nostalgic-shannon-f859b3.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit my live site
                                </a>
                            </Col>
                        </Row>
                    </div>
                    <div className="infoDiv">
                        <Row>
                            <Col md={3}>
                                <img
                                    src={screenshot5}
                                    className="projectImg"
                                    alt=""
                                />
                            </Col>
                            <Col md={9}>
                                <h5 className="shortProjectTitle">
                                    El Equipo de Suenio
                                </h5>
                                <p>
                                    React Interactive Website for Building
                                    Football Team
                                </p>
                                <a
                                    href="https://dazzling-kirch-72de32.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit my live site
                                </a>
                            </Col>
                        </Row>
                    </div>
                </>
            )}
            {props.home && (
                <Button as={Link} to="/projects" className="rightAlignedButton">
                    Show All
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2"
                    />{" "}
                </Button>
            )}
        </div>
    );
};

export default ProjectsShort;
