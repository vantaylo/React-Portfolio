import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          I am a talented and proactive operations and facilities management
          professional turned Full Stack Software Engineer. With extensive
          experience within the technology industry managing operations,
          building facilities, supply chain management and workplace services.
        </p>
        <p>
          My experience has provided me with exceptional analytical and
          problem-solving skills necessary to prioritize work and resources to
          plan and execute projects, drive initiatives and implement strategy.
        </p>

        <p>
          As a soon to-be graduate of the University of Texas at Austin,
          Professional Education in Full Stack Web Development. I'm looking to
          leverage my skills, including Python, JavaScript, HTML, and CSS to
          design and develop experiences and tools that make people's lives
          simple.
        </p>
        <p>
          While offering a high degree of efficiency and a roll up your sleeves
          attitude to thrive in a fast paced environment.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
