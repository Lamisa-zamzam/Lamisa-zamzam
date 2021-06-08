import React from "react";
import Header from "../Header/Header";
import ProjectsShort from "../../ProjectsShort/ProjectsShort";
import { Button, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Zoom from "react-reveal/Zoom";

const Home = () => {
    return (
        <>
            <div className="home">
                <Header></Header>
                <div className="home-section">
                    <ProjectsShort home={true} />
                </div>
                <section className="home-section">
                    <h3 className="heading">My blogs: </h3>
                    <p>Coming Soon!! 😀</p>
                        <Button
                            as={Link}
                            to="/blogs"
                            className="rightAlignedButton"
                        >
                            Show All
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2"
                            />{" "}
                        </Button>
                </section>
                <section className="home-section resume-section">
                    <h3 className="heading">My resume</h3>
                    <br />
                    <Row>
                        <Col md={6}>
                            <Zoom left>
                                <h5 className="subHeading">Top Skills</h5>
                                <div>
                                    <img
                                        src="https://tse4.mm.bing.net/th?id=OIP.qTXL2R06KCKuw09n4AvtygHaIU&pid=Api&P=0&w=300&h=300"
                                        alt=""
                                        className="skillsHomeImg"
                                    />
                                    <img
                                        src="https://tse1.mm.bing.net/th?id=OIP.cF_sQs-H82tlTDM4TNJjJgAAAA&pid=Api&P=0&w=215&h=209"
                                        alt=""
                                        className="skillsHomeImg"
                                    />
                                    <img
                                        src="https://tse1.mm.bing.net/th?id=OIP.Tf4BFI6846neirVSebC0vAHaEi&pid=Api&P=0&w=254&h=156"
                                        alt=""
                                        className="skillsHomeImg"
                                    />
                                </div>
                            </Zoom>
                            <br />
                                <Button
                                    as={Link}
                                    to="/resume"
                                    className="home-resume"
                                >
                                    Show All
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2"
                                    />{" "}
                                </Button>
                        </Col>

                        <Col md={6}>
                            <Zoom right>
                                <h5 className="subHeading">Extra Curricular Activities</h5>
                                <ul>
                                    <li>Leaderships</li>
                                    <li>Learning Languages</li>
                                    <li>Playing Football</li>
                                </ul>
                            </Zoom>
                            <br />
                                <Button as={Link} to="/resume">
                                    Show All
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2"
                                    />{" "}
                                </Button>
                        </Col>
                    </Row>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
