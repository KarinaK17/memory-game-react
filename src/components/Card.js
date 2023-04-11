import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        alt={props.name}
        src={props.src}
        className="card-image"
        onClick={() => {
          props.click(props.name);
        }}
      ></img>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
