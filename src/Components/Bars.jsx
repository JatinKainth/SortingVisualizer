import React from "react";
import "./Bars.css";

function Bars({ height }) {
  const Bars_height = {
    height: height * 0.75,
  };

  return (
    <div className="Bars" style={Bars_height}>
      {" "}
    </div>
  );
}

export default Bars;
