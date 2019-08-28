import {CenterWrapper, StyledLink} from "./Utils";
import React from "react";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <CenterWrapper>
      <ButtonWrapper>
        <StyledLink exact to="/">
          <NavButton key="/" title="home">🏠</NavButton>
        </StyledLink>

        <StyledLink to="/restaurants">
          <NavButton key="/restaurants" title="restaurants">🍚</NavButton>
        </StyledLink>

        <StyledLink to="/beverages">
          <NavButton key="/beverages" title="beverages">🍵</NavButton>
        </StyledLink>
      </ButtonWrapper>
    </CenterWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
`;

const NavButton = styled.div`
  font-size: 24px;
  padding: 2px 4px 0 6px;
  text-align: middle;
  
  background: white;
  color: black;
  
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  
  transition: 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;