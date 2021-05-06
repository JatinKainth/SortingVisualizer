import React, { useState, useEffect } from "react";
import Bars from "./Bars";
import "./SortingVisualizer.css";
import NavBar from "./NavBar";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(randomNumber(5, 1000));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <>
      <NavBar resetArray={resetArray}></NavBar>
      <div className="Bars_flex">
        {array.map((value, idx) => (
          <Bars height={value} key={idx}></Bars>
        ))}
      </div>
    </>
  );
}

export default SortingVisualizer;
