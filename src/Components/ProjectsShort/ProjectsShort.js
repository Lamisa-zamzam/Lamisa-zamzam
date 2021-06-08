import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import Shake from "react-reveal/Shake";

import screenshot1 from "../../images/2021-05-01 (9).png";
import screenshot2 from "../../images/2021-05-01 (11).png";
import screenshot3 from "../../images/2021-05-01 (23).png";
import screenshot4 from "../../images/2021-05-01 (15).png";
import screenshot5 from "../../images/2021-05-01 (24).png";
import screenshotSweet from "../../images/sweet-home-910.web.app_.png";

const ProjectsShort = (props) => {
    return (
        <div>
            <Row>
                <Col md={9}>
                    {" "}
                    <h1 className="heading">My Projects</h1>
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
                <Slide left>
                    <Row>
                        <Col md={3}>
                            <img
                                src={screenshot1}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <h5 className="shortProjectTitle subHeading">
                                Zamzam International
                            </h5>
                            <p>
                                This is a Visa Agency Website. Registered visa
                                appliers can pay with their credit cards for
                                booking a visa and give a review to the company
                                that is added to the website.
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
                </Slide>
            </div>
            <div className="infoDiv">
                <Slide right>
                    <Row>
                        <Col md={3}>
                            <img
                                src={screenshot2}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <h5 className="shortProjectTitle subHeading">
                                Zamzam's Collection
                            </h5>
                            <p>
                                This is a full-stack website where authenticated
                                users can buy a product and see their orders.
                                Admins can add, edit and delete products.
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
                </Slide>
            </div>

            <div className="infoDiv">
                <Slide right>
                    <Row>
                        <Col md={3}>
                            <img
                                src={screenshotSweet}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h5
                                className="shortProjectTitle subHeading"
                            >
                                Sweet Home
                            </h5>
                            <p>
                                This is a full-stack website house renting
                                website where authenticated users can buy a
                                product and see their orders. Admins can add,
                                edit and delete products.
                            </p>
                            <a
                                href="https://sweet-home-910.web.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit my live site
                            </a>
                        </Col>
                    </Row>
                </Slide>
            </div>

            <div className="infoDiv">
                <Slide top>
                    <Row>
                        <Col md={3}>
                            <img
                                src={screenshot3}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <h5 className="shortProjectTitle subHeading">
                                Globetrotter
                            </h5>
                            <p>
                                This responsive project provides users with
                                several ways to travel around the city.
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
                </Slide>
            </div>
            {!props.home && (
                <>
                    <div className="infoDiv">
                        <Slide bottom>
                            <Row>
                                <Col md={3}>
                                    <img
                                        src={screenshot4}
                                        className="projectImg"
                                        alt=""
                                    />
                                </Col>
                                <Col md={9}>
                                    <h5 className="shortProjectTitle subHeading">
                                        Juegoes del Universo
                                    </h5>
                                    <p>
                                        This responsive project relates to
                                        games, sports and the tournaments
                                        available. I used a third party API to
                                        load data about the leagues of different
                                        games.
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
                        </Slide>
                    </div>
                    <div className="infoDiv">
                        <Roll left>
                            <Row>
                                <Col md={3}>
                                    <img
                                        src={screenshot5}
                                        className="projectImg"
                                        alt=""
                                    />
                                </Col>
                                <Col md={9}>
                                    <h5 className="shortProjectTitle subHeading">
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
                        </Roll>
                    </div>
                </>
            )}
            {props.home && (
                <Shake>
                    <Button
                        as={Link}
                        to="/projects"
                        className="rightAlignedButton"
                    >
                        Show All
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2"
                        />{" "}
                    </Button>
                </Shake>
            )}
        </div>
    );
};

export default ProjectsShort;
