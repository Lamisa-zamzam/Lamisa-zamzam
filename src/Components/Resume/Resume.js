import {
    faArrowRight,
    faDownload,
    faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectsShort from "../ProjectsShort/ProjectsShort";
import "./Resume.css";
import { skillsFakeData } from "./SkillsFakeData";
import { ToolsFakeData } from "./ToolsFakeData";

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
                    <Col md={6} lg={4} xs={12} key={skill.id}>
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
                    <Col md={6} lg={4} xs={12} key={tool.key}>
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
            <ProjectsShort />
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
            <p className="text-center mt-5">
                <small>
                    Copyright © Lamisa Zamzam {new Date().getFullYear()}, all
                    rights reserved.{" "}
                </small>
            </p>
        </div>
    );
};

export default Resume;
