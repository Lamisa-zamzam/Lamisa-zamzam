import React from "react";
import { Col, Row } from "react-bootstrap";
import juegosScreen1 from "../../../images/2021-05-01 (15).png";
import juegosScreen2 from "../../../images/2021-05-01 (16).png";
import juegosScreen3 from "../../../images/2021-05-01 (17).png";
import juegosScreen4 from "../../../images/2021-05-01 (18).png";

const Project4 = () => {
    return (
        <Row style={{ marginBottom: "10%" }}>
            <Col md={5} style={{ padding: "2%", position: "relative" }}>
                <img
                    src={juegosScreen1}
                    alt=""
                    style={{ width: "80%" }}
                    className="image1"
                />
                <img
                    src={juegosScreen2}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage1"
                />
                <img
                    src={juegosScreen3}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage2"
                />
                <img
                    src={juegosScreen4}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage3"
                />
            </Col>
            <Col md={7}>
                <h1 className="projectTitle">Juegoes del Universo</h1>
                <p className="projectSummary">Football leagues' Website</p>
                <small>
                    <i>March, 2021</i>
                </small>
                <br />
                <br />
                <p>
                    This responsive project relates to games, sports and the
                    tournaments available. I used a third party API to load data
                    about the leagues of different games. There are cards for
                    each league and clicking on them, you can get vast
                    information about that specific league. Moreover, my website
                    is always up-to-date. So, never miss an update. Be of a
                    sporting mentality.
                </p>
                <p>
                    <b>Tools: </b>
                </p>
                <p>
                    {" "}
                    React, React Router, React-Bootstrap, Bootstrap , Font
                    Awesome, Netlify and Third Party API.
                </p>
                <a
                    href="https://nostalgic-shannon-f859b3.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit my live site
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/juegos-del-universo"
                    target="_blank"
                    rel="noreferrer"
                >
                   Github Code{" "}
                </a>
                <br />
                <hr/>
            </Col>
        </Row>
    );
};

export default Project4;
