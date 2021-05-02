import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Projects from "./Components/Projects/Projects";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Blogs from "./Components/Blogs/Blogs";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";

function App() {
    return (
        <Router>
            <MyNavbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
