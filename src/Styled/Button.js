import styled from "styled-components";
export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  max-width: 220px;
  border-radius: 5px;
  border: none;
  font-size: x-large;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  padding: 10px 50px;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
