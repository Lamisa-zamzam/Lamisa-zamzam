import React from "react";
import { Col, Row } from "react-bootstrap";
import screenSweet from "../../../images/sweet-home-910.web.app_.png";

const Project6 = () => {
    return (
        <Row style={{ marginBottom: "10%" }}>
            <Col md={5} style={{ padding: "2%", position: "relative" }}>
                <img src={screenSweet} alt="" style={{ width: "80%" }} />
            </Col>
            <Col md={7}>
                <br />
                <br />
                <br />
                <br />
                <h1 className="projectTitle">Sweet Home</h1>
                <p className="projectSummary">
                    Full Stack House Renting Website
                </p>
                <small>
                    <i>February, 2021</i>
                </small>
                <br />
                <br />
                <p>
                    This is a house rental website. Registered users can pay
                    with their credit cards for renting a house. Admins can add
                    a new visa service or a new admin, delete an existing one,
                    and edit orders that are placed by the users. Responsive on
                    mobile and laptop. ** This was a team project, I
                    collaborated with a teammate to accomplish it.
                </p>
                <p>
                    <b className="heading">Tools: </b>
                </p>
                <p>
                    <b className="heading">Front-end: </b>: Redux for state
                    management, React.js, React Router, React-Bootstrap, React
                    Hook Form, Bootstrap, Stripe Payment Method, Firebase,
                    Firebase Authentication system.
                </p>
                <p>
                    <b className="heading">Back-end: </b>: Node.js, Express.js,
                    MongoDB, Heroku.
                </p>
                <a
                    href="https://sweet-home-910.web.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit my live site
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/sweet-home"
                    target="_blank"
                    rel="noreferrer"
                >
                    Client Side Code{" "}
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/sweet-home-server"
                    target="_blank"
                    rel="noreferrer"
                >
                    Server Side Code
                </a>
                <br />
                <hr />
            </Col>
        </Row>
    );
};

export default Project6;
