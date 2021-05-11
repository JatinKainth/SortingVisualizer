import React from "react";
import styled, { ThemeProvider } from "styled-components";

function NavBar({ resetArray, bubbleSort }) {
  const theme = {
    navBackground: "#2b2b2b",
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBarStyled>
        <Button onClick={() => resetArray()}>Generate New Array</Button>
        <Button onClick={() => resetArray()}>Merge Sort</Button>
        <Button onClick={() => bubbleSort()}>Bubble Sort</Button>
        <Button onClick={() => resetArray()}>Insertion Sort</Button>
        <Button onClick={() => resetArray()}>Select Sort</Button>
        <Button onClick={() => resetArray()}>Sort</Button>
      </NavBarStyled>
    </ThemeProvider>
  );
}

export default NavBar;

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  height: 8vh;
  background-color: ${(props) => props.theme.navBackground};
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.navBackground};
  color: white;
  font-size: 16px;
  padding: 12px 30px;
  transition-duration: 0.4s;
  border-radius: 8%;
  cursor: pointer;
  width: 100%;

  &:hover {
    font-size: 20px;
  }
`;
