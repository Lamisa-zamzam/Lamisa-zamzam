import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectsShort from "../ProjectsShort/ProjectsShort";
import "./Resume.css";
import { skillsFakeData } from "./SkillsFakeData";
import { ToolsFakeData } from "./ToolsFakeData";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import Shake from "react-reveal/Shake";

const Resume = () => {
    return (
        <div className="resumeContainer">
            <Row>
                <Col md={9}>
                    {" "}
                    <h1 className="heading">My Resume</h1>
                </Col>
                <Col md={3} className="mt-2">
                    {" "}
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
            <br />
            <div className="listDiv">
                {" "}
                <h3 className="subHeading">My skills</h3>
                <br />
                <Row>
                    {skillsFakeData.map((skill) => (
                        <Col md={2} lg={1} xs={3} key={skill.id}>
                            <img src={skill.img} alt="" className="skillLogo" />
                        </Col>
                    ))}
                </Row>
            </div>
            <br />
            <br />
            <br />
            <div className="listDiv">
                <h3 className="subHeading">My Tools</h3>
                <br />
                <Row>
                    {ToolsFakeData.map((tool) => (
                        <Col md={2} lg={1} xs={3} key={tool.key}>
                            <img src={tool.img} alt="" className="skillLogo" />
                        </Col>
                    ))}
                </Row>
            </div>
            <br />
            <br />
            <br />
            <ProjectsShort />
            <div>
                <br />
                <br />
                <br />
                <h3 className="heading">Extra Curricular Activities</h3>
                <br />
                <Row>
                    <Col md={6} className="ecaCol">
                        {" "}
                        <Slide right>
                            <ul className="ecaList">
                                <li>Learning New Languages</li>
                                <li>Swimming</li>
                                <li>Cooking</li>
                                <li>Helping in household</li>
                                <li>Exercising</li>
                                <li>Football Training</li>
                            </ul>
                        </Slide>
                    </Col>
                    <Col md={6} className="ecaCol">
                        {" "}
                        <Slide left>
                            <ul className="ecaList">
                                <li>Daycare Services</li>
                                <li>Helping Sister With her Study</li>
                                <li>YouTube Content Creating</li>
                                <li>Video and Photo Editing</li>
                                <li>Drawing</li>
                                <li>Creative Writing</li>
                            </ul>
                        </Slide>
                    </Col>
                </Row>
            </div>
            <br />
            <br />
            <br />
            <Row>
                <Col md={6} className="ecaCol">
                    {" "}
                    <Roll left>
                        {" "}
                        <div>
                            <h3 className="subHeading">Leaderships</h3>
                            <ul>
                                <li>School Level Football Team Captain</li>
                                <li>Class Captain for Several years</li>
                            </ul>
                        </div>
                    </Roll>
                </Col>
                <Col md={6} className="ecaCol">
                    {" "}
                    <Roll right>
                        <div>
                            <h3 className="subHeading">Languages</h3>
                            <ul>
                                <li>Bengali, English, Spanish, French</li>
                                <li>Portuguese, Hindi, Chinese, Arabic</li>
                            </ul>
                        </div>
                    </Roll>
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
