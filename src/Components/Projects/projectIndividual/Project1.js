import React from "react";
import { Col, Row } from "react-bootstrap";
import internationalScreen1 from "../../../images/2021-05-01 (6).png";
import internationalScreen2 from "../../../images/2021-05-01 (7).png";
import internationalScreen3 from "../../../images/2021-05-01 (8).png";
import internationalScreen4 from "../../../images/2021-05-01 (9).png";

const Project1 = () => {
    return (
        <Row style={{ marginBottom: "10%" }}>
            <Col md={5} style={{ padding: "2%", position: "relative" }}>
                <img
                    src={internationalScreen1}
                    alt=""
                    style={{ width: "80%" }}
                    className="image1"
                />
                <img
                    src={internationalScreen2}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage1"
                />
                <img
                    src={internationalScreen3}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage2"
                />
                <img
                    src={internationalScreen4}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage3"
                />
            </Col>
            <Col md={7}>
                <h1 className="projectTitle">Zamzam International</h1>
                <p className="projectSummary">
                    Full-stack Visa Service Agency website
                </p>
                <small>
                    <i>April, 2021</i>
                </small>
                <br />
                <br />
                <p>
                    This is a Visa Agency Website. Registered visa appliers can
                    pay with their credit cards for booking a visa and give a
                    review to the company that is added to the website. Admins
                    can add a new visa service or a new admin, delete an
                    existing one, and edit orders that are placed by the users.
                    Responsive on mobile and laptop.
                </p>
                <p>
                    <b>Tools: </b>
                </p>
                <p>
                    <b>Front-end: </b>: React.js, React Router, React-Bootstrap,
                    React Hook Form, Bootstrap, Stripe Payment Method, Firebase,
                    Firebase Authentication system.
                </p>
                <p>
                    <b>Back-end: </b>: Node.js, Express.js, MongoDB, Heroku.
                </p>
                <a
                    href="https://complete-website-3.web.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit my live site
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/zamzam-international"
                    target="_blank"
                    rel="noreferrer"
                >
                    Client Side Code{" "}
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/zamzam-international-server"
                    target="_blank"
                    rel="noreferrer"
                >
                    Server Side Code
                </a>
                <hr />
            </Col>
        </Row>
    );
};

export default Project1;
