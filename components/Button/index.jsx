import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "40")}px;
  width: ${(props) => (props.width ? props.width : "240")}px;
  border: 2px solid 10px;
  border-color: #0065b3;
  border-radius: 20px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  color: ${(props) => (props.color ? props.color : "#0065B3")};
  z-index: inherit;
  &:hover {
    background-color: #0065b3;
    color: #fff;
  }
  ${(props) =>
    props.round &&
    css`
      background-color: #0065b3;
      border-radius: 24px;
      color: #0065b3;
    `}
`;

export default Button;
