import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>  
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Content>
        <p>
        I am a talented and proactive business professional turned Software Engineer. 
        With extensive experience within the technology industry managing operations, supply chain management, facilities, and workplace services.
        </p>
        <p>
        I'm skilled in multiple languages including Javascript and Python.
        As a full-stack engineer, I especially enjoy creating well-designed,
        intuitive interfaces with React and have worked at mastering other UI technologies including,
        jQuery, CSS3, HTML5 and other front-end frameworks. As a back-end engineer,
        I have focused on building clean, structured, scalable back-ends and have experience setting up servers, 
        databases, and the overall infrastructure of an application from the ground up.
        </p>

        <p>
        CliftonStrengths:
        1. Relator
        2. Individualization
        3. Competition
        4. Focus
        5. Achiever
        6. Analytical
        7. Significance
        8. Responsibility
        9. Discipline
        10. Activator 
        </p>
        
        <br></br>
       

        <div  className="quote">
          <h3>
          <img className="profilepic" src="https://avatars3.githubusercontent.com/u/57538298?s=400&u=74ea5e9588260d301cf67e74e1eb2f18e2d70dcc&v=4" alt="Vanessa" />"Programming is an opportunity to create something" 
          </h3>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;
