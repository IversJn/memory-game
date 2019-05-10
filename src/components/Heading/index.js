import React from "react";
import "./style.css";

function Heading(props){
    return (
      <div className="heading">
      <div className="title">Marvel Infinity Memory Game</div>
      <div className="score">
      Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
    );
}

export default Heading;