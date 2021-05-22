import React, { useState, useEffect, useRef } from "react";
import Bars from "./Bars";
import NavBar from "./NavBar";
import styled from "styled-components";
import bubbleSort from "./SortingAlgorithms/BubbleSort";
import mergeSort from "./SortingAlgorithms/MergeSort";
import insertionSort from "./SortingAlgorithms/InsertionSort";
import selectionSort from "./SortingAlgorithms/SelectionSort";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [color, setColor] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  const [buttonState, setButtonState] = useState(false);
  // const [sortingState, setSortingState] = useState(false);
  // const isInitiialMount = useRef(true);

  const resetArray = () => {
    const array = [];
    const color = [];
    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    for (let i = 0; i < arraySize; i++) {
      array.push(randomNumber(5, 1000));
      color.push("black");
    }
    setArray(array);
    setColor(color);
  };

  // const sortArray = () => {
  //   let arr = [...array];
  //   arr.sort();
  //   setArray(arr);
  // };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const sort = (sortingAlgo) => {
    setButtonState(true);
    const changeColor = (a, b, col) => {
      let barOne = document.getElementById(`${a}`);
      let barTwo = document.getElementById(`${b}`);
      barOne.style.backgroundColor = `${col}`;
      barTwo.style.backgroundColor = `${col}`;
    };

    const swap = (a, b) => {
      changeColor(a, b, "yellow");

      const barOne = document.getElementById(`${a}`);
      const barTwo = document.getElementById(`${b}`);
      const temp = barOne.style.height;
      barOne.style.height = barTwo.style.height;
      barTwo.style.height = temp;
    };

    let animations, arr;
    switch (sortingAlgo) {
      case "mergeSort":
        [animations, arr] = mergeSort(array, arraySize);
        break;

      case "bubbleSort":
        [animations, arr] = bubbleSort(array, arraySize);
        break;

      case "insertionSort":
        [animations, arr] = insertionSort(array, arraySize);
        break;

      case "selectionSort":
        [animations, arr] = selectionSort(array, arraySize);
        break;
    }
    const animationSize = animations.length;
    const animationSpeed = 1000 / arraySize;

    let i = 0;
    function animationLoop() {
      setTimeout(function () {
        if (animations[i] === "changeColor") {
          let a = animations[i + 1];
          let b = animations[i + 2];
          let col = animations[i + 3];
          changeColor(a, b, col);
          i += 4;
        } else {
          const a = animations[i + 1];
          const b = animations[i + 2];
          swap(a, b);
          i += 3;
        }
        if (i < animationSize) animationLoop();
        else {
          setButtonState(false);
          setArray(arr);
        }
      }, animationSpeed);
    }
    animationLoop();
  };

  // useEffect(() => {
  //   if (isInitiialMount.current) isInitiialMount.current = false;
  //   else sortArray();
  // }, [sortingState]);

  return (
    <>
      <NavBar
        resetArray={resetArray}
        setSize={setArraySize}
        sort={sort}
        buttonState={buttonState}
      />
      <FlexBars>
        {array.map((value, idx) => (
          <Bars
            height={value}
            arraySize={arraySize}
            color={color[idx]}
            id={idx}
            key={idx}
          />
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
