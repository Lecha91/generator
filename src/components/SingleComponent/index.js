import React, { useState, useEffect } from "react";
import "./SingleComponent.css";

const SingleComponent = ({ id, title }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const color = "rgb(" + x + "," + y + "," + z + ")";
    return setBgColor(color);
  }, []);

  return (
    <div
      className="SingleComponent"
      id={id}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default SingleComponent;
