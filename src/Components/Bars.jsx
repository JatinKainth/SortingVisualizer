import React from "react";
import styled from "styled-components";

function Bars({ height, arraySize }) {
  return <StyledBars height={height} width={arraySize} />;
}

export default Bars;

const StyledBars = styled.div.attrs((props) => ({
  style: {
    height: props.height * 0.75,
    width: 600 / props.width,
  },
}))`
  margin: 0 1px;
  background-color: black; ;
`;
