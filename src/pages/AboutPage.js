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
        I'm a product-minded, customer-focused, Full-Stack Software Engineer with a passion for helping take world-changing ideas from prototype to launch. I love focusing on improving and experimenting beyond traditional products. With vast experience in operations, supply chain management, finance, facilities, and workplace services across many industries, including small business, government, tech, and non-profit. I understand the importance of revolutionizing the tools we use and have a passion and proven history for problem solving with strong analytical capabilities.        </p>
        <p>
        I'm skilled in multiple languages including Javascript, Python and C++. As a front-end engineer, I enjoy creating well-designed, intuitive interfaces with React and Redux and have worked at mastering other UI technologies including, jQuery, CSS3, HTML5 and other front-end frameworks. As a back-end engineer, I have focused on building clean, structured, scalable back-ends and have experience setting up servers, databases, deployment and the overall infrastructure of an application from the ground up.        </p>
         
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
            <h2>VIA Strengths</h2>
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
