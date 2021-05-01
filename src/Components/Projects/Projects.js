import React from "react";
import { Container } from "react-bootstrap";
import "./Project.css";
import Project1 from "./projectIndividual/Project1";
import Project2 from "./projectIndividual/Project2";
import Project3 from "./projectIndividual/Project3";
import Project4 from "./projectIndividual/Project4";
import Project5 from "./projectIndividual/Project5";

const Projects = () => {
    return (
        <Container style={{ marginTop: "8%" }}>
           <Project1/>
           <Project2/>
           <Project3/>
           <Project4/>
           <Project5/>
           
        </Container>
    );
};

export default Projects;
