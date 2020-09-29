import React from "react";
import Hero from "../components/Hero";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
    </div>
  );
}

export default AboutPage;
