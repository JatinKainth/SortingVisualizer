import React, { useState, useEffect } from "react";
import Bars from "./Bars";
import NavBar from "./NavBar";
import styled from "styled-components";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const setSize = (value) => setArraySize(value);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(randomNumber(5, 1000));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const bubbleSort = () => {
    let arr = array;
    arr[0] = 1000;
    setArray(arr);
  };

  return (
    <>
      <NavBar
        resetArray={resetArray}
        setSize={setSize}
        bubbleSort={bubbleSort}
      />
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
