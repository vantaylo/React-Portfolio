import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vanessa Taylor",
      headerLinks: [
        { title: "Home", path: "/React-Portfolio" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Let's Build Something",
        subTitle:
          "Develop experiences and tools that make people's lives simple.",
        text: "",
      },
      about: {
        title: "About Me",
        subTitle: "Hi, I'm Vanessa Taylor",
        text: "Operations guru turned Software Engineer",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container class="container-fluid" fluid={true}>
          <Navbar className="navbar" expand="lg" >
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="navbar-toggle" />
            <Navbar.Collapse>
              <Nav className="navigation">
                <Link className="nav-link" to="/React-Portfolio">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/React-Portfolio"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <AboutPage
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
