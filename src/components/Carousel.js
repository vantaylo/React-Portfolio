import React from "react";

import Card from "../components/Card";
import project0 from "../assets/images/WeddingPlanner.jpg";
import project1 from "../assets/images/Trailme.jpg";
import project2 from "../assets/images/EmployeeMgmt.jpg";
import project3 from "../assets/images/EmployeeDirectory.jpg";
import project4 from "../assets/images/WebCrawler.jpg";
import project5 from "../assets/images/WorkoutTracker.jpeg";
// import comingSoon from "../assets/images/ComingSoon.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Wedding Planner App",
          subTitle: "Full stack web application helping plan and organize all the details surrounding the big day!",
          imgSrc: project0,
          link: "https://github.com/vantaylo/wedding-planner",
          selected: false,
        },
        {
          id: 1,
          title: "TRAILme App",
          subTitle: "MERN stack application helping find hiking trails anywhere!",
          imgSrc: project1,
          link: "https://github.com/TRAILme-APP/TRAILme",
          selected: false,
        },
        {
          id: 2,
          title: "Employee Mgmt System",
          subTitle: "CLI for managing a company's employees using using Node.js and MySQL.",
          imgSrc: project2,
          link: "https://github.com/vantaylo/Employee-Management-System-App",
          selected: false,
        },
        {
          id: 3,
          title: "Employee Directory",
          subTitle: "A employee directory web application with React.",
          imgSrc: project3,
          link: "https://github.com/vantaylo/Employee-Directory-App",
          selected: false,
        },
        {
          id: 4,
          title: "Web Crawler",
          subTitle: "Web scraping program using Python and data storing with MongoDB.",
          imgSrc: project4,
          link: "https://github.com/vantaylo/Web-Crawler",
          selected: false,
        },
        {
          id: 5,
          title: "Workout Tracker",
          subTitle: "A workout tracker web application with React and MongoDB with a Mongoose schema.",
          imgSrc: project5,
          link: "https://github.com/vantaylo/Workout-Tracker-App",
          selected: false,
        }
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
      <Container>
        <Row>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
