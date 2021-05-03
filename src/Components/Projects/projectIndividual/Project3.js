import React from "react";
import { Col, Row } from "react-bootstrap";
import globetrotterScreen1 from "../../../images/2021-05-01 (27).png";
import globetrotterScreen2 from "../../../images/2021-05-01 (25).png";
import globetrotterScreen3 from "../../../images/2021-05-01 (26).png";
import globetrotterScreen4 from "../../../images/2021-05-01 (23).png";

const Project3 = () => {
    return (
        <Row style={{ marginBottom: "10%" }}>
            <Col md={5} style={{ padding: "2%", position: "relative" }}>
                <img
                    src={globetrotterScreen1}
                    alt=""
                    style={{ width: "80%" }}
                    className="image1"
                />
                <img
                    src={globetrotterScreen2}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage1"
                />
                <img
                    src={globetrotterScreen3}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage2"
                />
                <img
                    src={globetrotterScreen4}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage3"
                />
            </Col>
            <Col md={7}>
                <h1 className="projectTitle">Globetrotter</h1>
                <p className="projectSummary">Ride Booking Website</p>
                <small>
                    <i>March, 2021</i>
                </small>
                <br />
                <br />
                <p>
                    This responsive project provides users with several ways to
                    travel around the city. Authenticated Users can specify
                    where they want to go from a place and the date on which
                    they want to travel and then see the rides available for
                    that date and place.
                </p>
                <p>
                    <b className="heading">Tools: </b>
                </p>
                <p>
                    React JS, React Router, React-Bootstrap, React Hook Form,
                    Firebase, Firebase Authentication System.
                </p>
                <a
                    href="https://react-auth-3.web.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit my live site
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/globetrotter"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github Code{" "}
                </a>
                <hr />
            </Col>
        </Row>
    );
};

export default Project3;
