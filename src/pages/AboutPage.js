import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} profilePic={props.profilePic} />
      <Content></Content>
    </div>
  );
}

export default AboutPage;