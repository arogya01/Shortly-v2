import React, { useContext } from "react";
import styled from "@emotion/styled";
import { SpinnerContext } from "../../context/globalSpinnerContext";

export default function Spinner() {
  const { globalSpinner, setGlobalSpinner } = useContext(SpinnerContext);

  return(
  <>
    {globalSpinner ? (
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </StyledSpinner>
    ) : null}
  </>

  )
}

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -10px 0 0 -10px;
  width: 18px;
  height: 18px;

  & .path {
    stroke: #3c5555;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
