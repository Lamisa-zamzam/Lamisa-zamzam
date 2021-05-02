import {
    faArrowRight,
    faDownload,
    faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Resume.css";
import { skillsFakeData } from "./SkillsFakeData";
import { ToolsFakeData } from "./ToolsFakeData";
import screenshot1 from "../../images/2021-05-01 (9).png";
import screenshot2 from "../../images/2021-05-01 (11).png";
import screenshot3 from "../../images/2021-05-01 (23).png";
import screenshot4 from "../../images/2021-05-01 (15).png";
import screenshot5 from "../../images/2021-05-01 (24).png";

const Resume = () => {
    return (
        <div className="resumeContainer">
            <Row>
                <Col md={9}>
                    {" "}
                    <h1>My Resume</h1>
                </Col>
                <Col md={3} className="mt-2">
                    {" "}
                    <Button
                        as={Link}
                        to="Lamisa- Zamzam-resume-updated.pdf"
                        target="_blank"
                        download
                    >
                        <FontAwesomeIcon icon={faDownload} className="icon" />{" "}
                        Download Resume
                    </Button>
                </Col>
            </Row>
            <br />•{" "}
            <a
                href="https://github.com/Lamisa-zamzam"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                Visit my Github Profile
            </a>
            <br />•{" "}
            <a
                href="https://www.linkedin.com/in/lamisa-zamzam-723074211/"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                Visit my LinkedIn Profile
            </a>
            <br />
            <br />
            <h3>My skills</h3>
            <Row>
                {skillsFakeData.map((skill) => (
                    <Col md={3}>
                        {" "}
                        <div className="infoDiv skillsInfo">
                            <Row>
                                <Col md={6}>
                                    <img
                                        src={skill.img}
                                        alt=""
                                        className="skillLogo"
                                    />
                                </Col>
                                <Col md={6}>
                                    <h4 style={{ marginTop: "30%" }}>
                                        {skill.name}
                                    </h4>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>
            <br />
            <br />
            <br />
            <h3>My Tools</h3>
            <Row>
                {ToolsFakeData.map((tool) => (
                    <Col md={3}>
                        {" "}
                        <div className="infoDiv skillsInfo">
                            <Row>
                                <Col md={6}>
                                    <img
                                        src={tool.img}
                                        alt=""
                                        className="skillLogo"
                                    />
                                </Col>
                                <Col md={6}>
                                    <h4 style={{ marginTop: "30%" }}>
                                        {tool.name}
                                    </h4>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>
            <br />
            <br />
            <br />
            <div>
                <Row>
                    <Col md={9}>
                        {" "}
                        <h1>My Projects</h1>
                    </Col>
                    <Col md={3} className="mt-2">
                        {" "}
                        <Button
                            as={Link}
                            to="/projects"
                            target="_blank"
                            download
                        >
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
                            <img
                                src={screenshot1}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <h5>Zamzam International</h5>
                            <p>
                                This is a Visa Agency Website. Registered visa
                                appliers can pay with their credit cards for
                                booking a visa and give a review to the company
                                that is added to the website.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="infoDiv">
                    <Row>
                        <Col md={3}>
                            <img
                                src={screenshot2}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <h5>Zamzam's Collection</h5>
                            <p>
                                This is a full-stack website where authenticated
                                users can buy a product and see their orders.
                                Admins can add, edit and delete products.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="infoDiv">
                    <Row>
                        <Col md={3}>
                            <img
                                src={screenshot3}
                                className="projectImg"
                                alt=""
                            />
                        </Col>
                        <Col md={9}>
                            <h5>Globetrotter</h5>
                            <p>
                                This responsive project provides users with
                                several ways to travel around the city.
                            </p>
                        </Col>
                    </Row>
                </div>
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
                            <h5>Juegoes del Universo</h5>
                            <p>
                                This responsive project relates to games, sports
                                and the tournaments available. I used a third
                                party API to load data about the leagues of
                                different games.
                            </p>
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
                            <h5>El Equipo de Suenio</h5>
                            <p>
                                React Interactive Website for Building Football
                                Team
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <br />
                <br />
                <br />
                <h3>Extra Curricular Activities</h3>
                <br />
                <Row>
                    <Col md={6} className="ecaCol">
                        {" "}
                        <ul className="ecaList">
                            <li>Learning New Languages</li>
                            <li>Swimming</li>
                            <li>Cooking</li>
                            <li>Helping in household</li>
                            <li>Exercising</li>
                            <li>Football Training</li>
                        </ul>
                    </Col>
                    <Col md={6} className="ecaCol">
                        {" "}
                        <ul className="ecaList">
                            <li>Daycare Services</li>
                            <li>Helping Sister With her Study</li>
                            <li>YouTube Content Creating</li>
                            <li>Video and Photo Editing</li>
                            <li>Drawing</li>
                            <li>Creative Writing</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <br />
            <br />
            <br />
            <Row>
                <Col md={6} className="ecaCol">
                    {" "}
                    <div>
                        <h3>Leaderships</h3>
                        <ul>
                            <li>School Level Football Team Captain</li>
                            <li>Class Captain for Several years</li>
                        </ul>
                    </div>
                </Col>
                <Col md={6} className="ecaCol">
                    {" "}
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            <li>Bengali, English, Spanish, French</li>
                            <li>Portuguese, Hindi, Chinese, Arabic</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Resume;
