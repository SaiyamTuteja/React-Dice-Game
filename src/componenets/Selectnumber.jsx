import styled from "styled-components";
import { useState } from "react";

const SelectNumber = ({
  setError,
  Error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numberSelectHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{Error}</p>
      <div className="flex">
        {numbers.map((value, index) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => numberSelectHandler(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="selected-number">Selected Number: {selectedNumber}</p>
    </NumberSelectorContainer>
  );
};

const Box = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  font-size: 30px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color: ${(props) => (props.isSelected ? "black" : "#E6E8E6")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
  }
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error {
    color: red;
    font-size: 24px;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  .selected-number {
    font-weight: 700;
    font-size: 24px;
    margin-top: 14px;
  }
`;

export default SelectNumber;
