import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
const StyledSlider = styled.div`
  & .MuiSlider-root {
    color: ${(props) => props.theme.tabActive};
  }
  & .MuiSlider-rail {
    color: ${(props) => props.theme.alphaBg};
  }
  & .track-slider {
    margin-bottom: 0px;
  }
  & .MuiSlider-valueLabel {
    padding: 4px 12px;
  }
  & .MuiSlider-thumb {
    width: 16px;
    height: 16px;
  }
`;
const SliderProgress = () => {
  const marks = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 40,
    },
    {
      value: 60,
    },
    {
      value: 80,
    },
    {
      value: 100,
    },
  ];
  function valuetext(value) {
    return `${value}`;
  }
  return (
    <StyledSlider>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={20}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </StyledSlider>
  );
};

export default SliderProgress;
