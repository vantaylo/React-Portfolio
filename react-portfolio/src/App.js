import React from "react";
import "./App.css";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vanessa Taylor",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Software Engineer",
        subTitle: "Operations guru turned Software Engineer",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return <div>Hello React!</div>;
  }
}

export default App;
