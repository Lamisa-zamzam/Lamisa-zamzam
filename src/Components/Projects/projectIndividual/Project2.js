import React from "react";
import { Col, Row } from "react-bootstrap";
import jerseyScreen1 from "../../../images/2021-05-01 (10).png";
import jerseyScreen2 from "../../../images/2021-05-01 (11).png";
import jerseyScreen3 from "../../../images/2021-05-01 (12).png";
import jerseyScreen4 from "../../../images/2021-05-01 (13).png";

const Project2 = () => {
    return (
        <Row style={{ marginBottom: "10%" }}>
            <Col md={5} style={{ padding: "2%", position: "relative" }}>
                <img
                    src={jerseyScreen1}
                    alt=""
                    style={{ width: "80%" }}
                    className="image1"
                />
                <img
                    src={jerseyScreen2}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage1"
                />
                <img
                    src={jerseyScreen3}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage2"
                />
                <img
                    src={jerseyScreen4}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage3"
                />
            </Col>
            <Col md={7}>
                <h1 className="projectTitle">Zamzam’s Collection</h1>
                <p className="projectSummary">
                    Full-stack jersey selling website
                </p>
                <small>
                    <i>April, 2021</i>
                </small>
                <br />
                <br />
                <p>
                    This is a full-stack website where authenticated users can
                    buy a product and see their orders. Admins can add, edit and
                    delete products. It contains a special search feature to
                    easily find the jersey wanted. Responsive on mobiles and
                    tablets alongside laptops.
                </p>
                <p>
                    <b className="heading">Tools: </b>
                </p>
                <p>
                    <b className="heading">Front-end: </b> : React JS, React Router,
                    React-Bootstrap, React Hook Form, Bootstrap, Stripe Payment
                    Method, Firebase, Firebase authentication system, Material
                    UI.
                </p>
                <p>
                    <b className="heading">Back-end: </b>: Node.js, Express.js, MongoDB, Heroku.
                </p>
                <a
                    href=" https://full-stack-sport-grocery.web.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit my live site
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/zamzams-collection"
                    target="_blank"
                    rel="noreferrer"
                >
                    Client Side Code{" "}
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/zamzams-collection-server"
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

export default Project2;
