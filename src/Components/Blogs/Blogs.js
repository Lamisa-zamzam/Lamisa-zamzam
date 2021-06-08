import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myPicture from "../../images/pixlr-bg-result.png";
import Blog from "./Blog/Blog";
import { BlogData } from "./BlogData";

const Blogs = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <br />
                    <br />
                    <img
                        src={myPicture}
                        alt=""
                        style={{
                            width: "80%",
                            border: "5px solid black",
                            borderRadius: "1000px",
                            boxShadow: "5px 5px 10px gray",
                        }}
                    />
                </Col>
                <Col md={9}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="text-center">
                        <a
                            href="https://medium.com/@lamisazamzam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit my Medium profile
                        </a>
                    </h3>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                {BlogData.map((blog) => (
                    <Blog blog={blog} />
                ))}
            </Row>
            <p className="text-center mt-5">
                <small>
                    Copyright © Lamisa Zamzam {new Date().getFullYear()}, all
                    rights reserved.{" "}
                </small>
            </p>
        </Container>
    );
};

export default Blogs;
