import React, { useState, useEffect } from "react";
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

  const changeBarColor = (col) => {
    const color = [];
    for (let i = 0; i < arraySize; i++) {
      color.push(col);
    }
    setColor(color);
  };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const sort = (sortingAlgo) => {
    changeBarColor("black");
    setButtonState(true);
    const changeColor = (a, b, col) => {
      let barOne = document.getElementById(`${a}`);
      let barTwo = document.getElementById(`${b}`);
      barOne.style.backgroundColor = `${col}`;
      barTwo.style.backgroundColor = `${col}`;
    };

    const swap = (a, b) => {
      changeColor(a, b, "red");

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
          changeBarColor("green");
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
    <Body>
      <NavBar
        resetArray={resetArray}
        setSize={setArraySize}
        sort={sort}
        buttonState={buttonState}
      />

      <BarSection>
        {array.map((value, idx) => (
          <Bars
            height={value}
            arraySize={arraySize}
            color={color[idx]}
            id={idx}
            key={idx}
          />
        ))}
      </BarSection>
    </Body>
  );
}

export default SortingVisualizer;

const Body = styled.section`
  height: 100vh;
`;

const BarSection = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
`;
