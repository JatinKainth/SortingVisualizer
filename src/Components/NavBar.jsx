import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import RangeSlider from "./Slider";

const theme = {
  navBackground: "#2b2b2b",
};

function NavBar({ resetArray, setSize, sort, buttonState }) {
  const [sortingAlgo, setSortingAlgo] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <NavBarStyled>
        <ResetBtn onClick={() => resetArray()} disabled={buttonState}>
          Generate New Array
        </ResetBtn>
        <RangeSlider setSize={setSize} sliderState={buttonState} />
        <Button
          onClick={() => setSortingAlgo("mergeSort")}
          disabled={buttonState}
        >
          Merge Sort
        </Button>
        <Button
          onClick={() => setSortingAlgo("bubbleSort")}
          disabled={buttonState}
        >
          Bubble Sort
        </Button>
        <Button
          onClick={() => setSortingAlgo("insertionSort")}
          disabled={buttonState}
        >
          Insertion Sort
        </Button>
        <Button
          onClick={() => setSortingAlgo("selectionSort")}
          disabled={buttonState}
        >
          Select Sort
        </Button>
        <Button
          onClick={() => sort(sortingAlgo)}
          disabled={sortingAlgo === "" ? true : false || buttonState}
        >
          Sort
        </Button>
      </NavBarStyled>
    </ThemeProvider>
  );
}

export default NavBar;

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  background-color: ${(props) => props.theme.navBackground};
  justify-content: space-around;
`;

const ResetBtn = styled.button`
  background-color: ${(props) => props.theme.navBackground};
  color: white;
  font-size: 18px;
  padding: 6px 15px;
  margin: 6px 15px;
  cursor: pointer;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    color: grey;
    cursor: initial;
  }
`;

const Button = styled(ResetBtn)`
  &:focus {
    color: orange;
  }
`;
