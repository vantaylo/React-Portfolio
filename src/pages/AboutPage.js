import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} profilePic={props.profilePic} />

      <Content>
        <p>
        I am a trusted and proactive business professional turned Software Engineer. With extensive experience within the technology industry managing operations, supply chain management, facilities, and workplace services. I have a passion and proven history for problem solving with strong analytical capabilities.
        </p>
        <p>
        I'm skilled in multiple languages including Javascript and Python. As a full-stack engineer, I especially enjoy creating well-designed, intuitive interfaces with React and Redux and have worked at mastering other UI technologies including, jQuery, CSS3, HTML5 and other front-end frameworks. As a back-end engineer, I have focused on building clean, structured, scalable back-ends and have experience setting up servers, databases, and the overall infrastructure of an application from the ground up.
        </p>
         
        <div  className="strengths">
        <Row>
          <Col>
            <h2>CliftonStrengths</h2>
            <p>1. Relator </p>
            <p>2. Individualization </p>
            <p>3. Competition </p>
            <p>4. Focus </p>
            <p>5. Achiever </p>
            <p>6. Analytical </p>
            <p>7. Significance </p>
            <p>8. Responsibility </p>
            <p>9. Discipline </p>
            <p>10. Activator </p>
          </Col>
          
          <Col>
            <h2>VIA Survey Strengths</h2>
            <p>1. Honesty | Courage </p>
            <p>2. Fairness | Justice </p>
            <p>3. Judgement | Wisdom </p>
            <p>4. Bravery | Courage </p>
            <p>5. Humor | Transcendence </p>
          </Col>
        </Row>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;
