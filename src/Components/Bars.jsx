import React from "react";
import styled from "styled-components";

function Bars({ height, arraySize, color, id }) {
  return (
    <StyledBars height={height} backColor={color} width={arraySize} id={id} />
  );
}

export default Bars;

const StyledBars = styled.div.attrs((props) => ({
  style: {
    height: props.height * 0.7,
    width: 600 / props.width,
    backgroundColor: props.backColor,
  },
}))`
  margin: 0 1px;
`;
