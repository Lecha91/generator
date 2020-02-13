import React from "react";
import "./SingleComponent.css";

const SingleComponent = ({ id, title }) => {
  return (
    <div className="SingleComponent" id={id}>
      <h1>{title}</h1>
    </div>
  );
};

export default SingleComponent;
