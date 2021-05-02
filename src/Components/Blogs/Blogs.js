import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPicture from "../../images/pixlr-bg-result.png";

const Blogs = () => {
    return (
        <Container style={{marginTop: "5%"}}>
            <Row>
                <Col md={3}><img src={myPicture} alt="" style={{width: "80%", border: "5px solid black", borderRadius:"1000px", boxShadow:"5px 5px 10px gray"}}/></Col>
                <Col md={9}>
                    <h3 className="text-center"><a href="https://medium.com/@lamisazamzam" target="_blank" rel="noreferrer">Visit my Medium profile</a></h3>
                    <h4 className="mt-5 text-center">My blogs are coming soon!!! Please wait 😀 !</h4>
                </Col>
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