import React from "react";
import Card from "../components/Card";
import project0 from "../assets/images/WeddingPlanner.jpg";
import project1 from "../assets/images/Trailme.jpg";
import comingSoon from "../assets/images/ComingSoon.jpg";
import project3 from "../assets/images/EmployeeDirectory.jpg";
import project4 from "../assets/images/EmployeeMgmt.jpg";
import project5 from "../assets/images/Portfolio.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Wedding Planner",
          subTitle: "A full stack application using Node, Express, React & MySQL to help plan and organize all the details surrounding the big day.",
          imgSrc: project0,
          link: "https://wedding-planner-platform.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "TRAILme App",
          subTitle: "A full stack application using Node, Express, React & MongoDB to help find hiking trails anywhere.",
          imgSrc: project1,
          link: "https://vt-trailme.herokuapp.com/",
          selected: false,
        },
        {
          id: 2,
          title: "In Progress",
          subTitle: "A full stack application that brings all your news together.",
          imgSrc: comingSoon,
          link: "https://github.com/vantaylo/News-App",
          selected: false,
        },
        {
          id: 3,
          title: "Employee Directory",
          subTitle: "An employee directory web application with React.",
          imgSrc: project3,
          link: "https://employee-directory-app1.herokuapp.com/",
          selected: false,
        },
        {
          id: 4,
          title: "Employee Mgmt System",
          subTitle: "Command-Line-Interface for managing a company's employees using Node, Inquirer & MySQL.",
          imgSrc: project4,
          link: "https://github.com/vantaylo/Employee-Management-System-App",
          selected: false,
        },
        {
          id: 5,
          title: "Portfolio",
          subTitle: "How I created my portfolio using Node & React",
          imgSrc: project5,
          link: "https://github.com/vantaylo/React-Portfolio",
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
      <Container>
        <Row>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
