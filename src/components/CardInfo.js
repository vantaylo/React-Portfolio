import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <br></br>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      Check it out!
      </a>
    </animated.div>
  );
}

export default CardInfo;
