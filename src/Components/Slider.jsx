import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

export default function RangeSlider({ setSize, sliderState }) {
  const updateSize = (value) => {
    setSize(value);
  };

  return (
    <SliderStyles>
      <Div id="discrete-slider" disabled={sliderState}>
        Size Of Array
      </Div>
      <Slider
        defaultValue={50}
        getAriaValueText={updateSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        min={10}
        max={200}
        disabled={sliderState}
      />
    </SliderStyles>
  );
}

const SliderStyles = styled.div`
  width: 100%;
  color: white;
  font-size: 20px;
  text-align: center;
`;

const Div = styled.button`
  font-size: 18px;
  color: white;
  margin-bottom: 5px;
  cursor: initial;
  background-color: #2b2b2b;

  &:disabled {
    color: gray;
  }
`;
