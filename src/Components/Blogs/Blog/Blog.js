import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = (props) => {
    const { name, subjects, shortDesc, url } = props.blog;
    const goToBlog = () => {
        window.location.href = url;
    };
    return (
        <Col md={6}>
            <div className="blogContainer">
                <h3>{name}</h3>
                <br />
                <h6>Topic: {subjects}</h6>
                <br />
                <p>{shortDesc}</p>
                <Button onClick={goToBlog}>Show Details</Button>
            </div>
        </Col>
    );
};

export default Blog;
