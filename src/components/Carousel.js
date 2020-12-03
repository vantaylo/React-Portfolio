import React from "react";

import Card from "../components/Card";
import project3 from "../assets/images/project3.jpg";
import comingSoon from "../assets/images/ComingSoon.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Trailme V2.0",
          subTitle: "Helps hikers find hiking trails anywhere!",
          imgSrc: project3,
          link: "https://github.com/vantaylo/Employee-Management-System-App",
          selected: false,
        },
        {
          id: 1,
          title: "TRAILme V1.0",
          subTitle: "Helps hikers find hiking trails anywhere!",
          imgSrc: project3,
          link: "https://github.com/TRAILme-APP/TRAILme",
          selected: false,
        },
        {
          id: 2,
          title: "Wedding Planner",
          subTitle: "To help make wedding planning easier!",
          imgSrc: project2,
          link: "https://github.com/vantaylo/wedding-planner",
          selected: false,
        },
        {
          id: 3,
          title: "Weather Dashboard",
          subTitle: "A weather dashboard using the OpenWeather API.",
          imgSrc: comingSoon,
          link: "https://github.com/vantaylo/Weather-Dashboard",
          selected: false,
        },
        {
          id: 4,
          title: "Workout Tracker",
          subTitle: "A workout tracker using React and Mongo database with a Mongoose schema.",
          imgSrc: comingSoon,
          link: "https://github.com/vantaylo/Workout-Tracker-App",
          selected: false,
        },
        {
          id: 5,
          title: "Employee Mgmt System",
          subTitle: "CLI for managing a company's employees.",
          imgSrc: comingSoon,
          link: "https://github.com/vantaylo/Employee-Management-System-App",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
