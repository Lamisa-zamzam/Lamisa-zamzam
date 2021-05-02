import React from "react";
import { Col, Row } from "react-bootstrap";
import equipoScreen1 from "../../../images/2021-05-01 (22).png";
import equipoScreen2 from "../../../images/2021-05-01 (21).png";
import equipoScreen3 from "../../../images/2021-05-01 (24).png";
import equipoScreen4 from "../../../images/2021-05-01 (20).png";

const Project5 = () => {
    return (
        <Row style={{ marginBottom: "10%" }}>
            <Col md={5} style={{ padding: "2%", position: "relative" }}>
                <img
                    src={equipoScreen1}
                    alt=""
                    style={{ width: "80%" }}
                    className="image1"
                />
                <img
                    src={equipoScreen2}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage1"
                />
                <img
                    src={equipoScreen3}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage2"
                />
                <img
                    src={equipoScreen4}
                    alt=""
                    style={{ width: "80%" }}
                    className="popUpImage3"
                />
            </Col>
            <Col md={7}>
                <h1 className="projectTitle">El Equipo de Suenio</h1>
                <p className="projectSummary">
                    React Interactive Website for Building Football Team
                </p>
                <small>
                    <i>February, 2021</i>
                </small>
                <br />
                <br />
                <p>
                    This React website provides users a way to create a football
                    team. Users can add any player to their team and also remove
                    a player they have added to their team. There are 20 player
                    including forwards, midfielders, defenders and goalkeepers
                    available to join a team.
                </p>
                <p>
                    <b>Tools: </b>
                </p>
                <p> React.js, React-Bootstrap, Bootstrap</p>
                <a
                    href="https://dazzling-kirch-72de32.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit my live site
                </a>
                <br />
                <a
                    href="https://github.com/Lamisa-zamzam/el-equipo-de-sueno"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github Code{" "}
                </a>
                <br />
                <hr />
            </Col>
        </Row>
    );
};

export default Project5;
