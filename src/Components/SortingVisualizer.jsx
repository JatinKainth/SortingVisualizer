import React, { useState, useEffect } from "react";
import Bars from "./Bars";
import NavBar from "./NavBar";
import styled from "styled-components";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [color, setColor] = useState([]);
  const [arraySize, setArraySize] = useState(100);

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

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const bubbleSort = () => {
    let arr = [...array];
    let animation = [];

    for (let i = 0; i < arraySize - 1; i++) {
      for (let j = 0; j < arraySize - i - 1; j++) {
        animation.push("changeColor", j, j + 1, "orange");
        if (arr[j] > arr[j + 1]) {
          animation.push("swap", j, j + 1);
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        animation.push("changeColor", j, j + 1, "black");
      }
    }
    return animation;
  };

  const sort = () => {
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

    const animations = bubbleSort();
    const animationSize = animations.length;
    const animationSpeed = 40000 / animationSize;
    console.log(animationSpeed, animationSize);

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
      }, animationSpeed);
    }
    animationLoop();
    // let arr = [...array];
    // arr.sort();
    // setArray(arr);
  };

  const test = () => {
    const id = 0;
    const a = document.getElementById(`${id}`);
    const b = document.getElementById("1");
    const temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
  };

  return (
    <>
      <NavBar
        resetArray={resetArray}
        setSize={setArraySize}
        sort={sort}
        test={test}
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
