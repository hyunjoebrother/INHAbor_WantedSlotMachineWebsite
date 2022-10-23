import React from "react";
import styled, { css } from "styled-components";
import Text from "../Text";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 48px;
  top: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  z-index: 9;
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  width: 100%;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-weight: 600;
  margin: auto;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <ElementWrapper>
        <StyledText size="20" color="#000">
          Free Wi-Fine ZONE
        </StyledText>
      </ElementWrapper>
    </HeaderWrapper>
  );
}
