import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

export default function RangeSlider({ setSize }) {
  const updateSize = (value) => {
    setSize(value);
  };

  return (
    <SliderStyles>
      <Typography id="discrete-slider">Size Of Array</Typography>
      <Slider
        defaultValue={100}
        getAriaValueText={updateSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        min={10}
        max={200}
      />
    </SliderStyles>
  );
}

const SliderStyles = styled.div`
  width: 100%;
  color: white;
  font-size: 16px;
  text-align: center;
`;
