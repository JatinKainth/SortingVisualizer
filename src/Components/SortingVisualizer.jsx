import React, { useState, useEffect } from "react";
import Bars from "./Bars";
import NavBar from "./NavBar";
import styled from "styled-components";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  let arraySize = 50;

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(randomNumber(5, 1000));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const bubbleSort = () => {
    let arr = array;
    arr[0] = 1000;
    setArray(arr);
  };

  return (
    <>
      <NavBar resetArray={resetArray} bubbleSort={bubbleSort}></NavBar>
      <FlexBars>
        {array.map((value, idx) => (
          <Bars height={value} arraySize={arraySize} key={idx}></Bars>
        ))}
      </FlexBars>
    </>
  );
}

export default SortingVisualizer;

const FlexBars = styled.div`
  display: flex;
  justify-content: center;
`;
