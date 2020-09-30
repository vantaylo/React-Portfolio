import React from "react";

import Card from "../components/Card";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Employee Mgmt System",
          subTitle: "CLI for managing a company's employees.",
          imgSrc: project1,
          link: "https://github.com/vantaylo/Employee-Management-System-App",
          selected: false,
        },
        {
          id: 1,
          title: "Wedding Planner",
          subTitle: "To help make wedding planning easier!",
          imgSrc: project2,
          link: "https://github.com/vantaylo/wedding-planner",
          selected: false,
        },
        {
          id: 2,
          title: "TRAILme",
          subTitle: "Helps hikers find hiking trails in their city!",
          imgSrc: project3,
          link: "https://github.com/TRAILme-APP/TRAILme",
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
        <Row>
          <div>
            <header>Homeworks and Other Work</header>
            <ul className="hw__list">
              <li className="hw__item">
                <a
                  href="https://github.com/vantaylo/Employee-Directory-App"
                  className="hw__link"
                >
                  Employee Directory App
                </a>
              </li>
              <li className="hw__item">
                <a
                  href="https://github.com/vantaylo/Workout-Tracker-App"
                  className="hw__link"
                >
                  Workout Tracker App
                </a>
              </li>
              <li className="hw__item">
                <a
                  href="https://github.com/vantaylo/TRAILme-App"
                  className="hw__link"
                >
                  TRAILme V.1
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Carousel;
