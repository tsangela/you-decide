import {CenterWrapper, Emoji, StyledLink} from "./StyledComponents";
import React from "react";
import styled from "styled-components";

export const NavBar = () =>
  <CenterWrapper>
    <ButtonWrapper>
      <StyledLink to="/">
        <NavButton key="/" title="home"><Emoji input={'🏠'}/></NavButton>
      </StyledLink>

      <StyledLink to="/restaurants">
        <NavButton key="/restaurants" title="restaurants"><Emoji input={'🍚'}/></NavButton>
      </StyledLink>

      <StyledLink to="/cafes">
        <NavButton key="/cafes" title="cafes"><Emoji input={'🍵'}/></NavButton>
      </StyledLink>

      <StyledLink to="/bakeries">
        <NavButton key="/bakeries" title="bakeries"><Emoji input={'🍞'}/></NavButton>
      </StyledLink>

      <StyledLink to="/bars">
        <NavButton key="/bars" title="bars"><Emoji input={'🍻'}/></NavButton>
      </StyledLink>
    </ButtonWrapper>
  </CenterWrapper>
;

const ButtonWrapper = styled.div`
  display: flex;
`;

const NavButton = styled.div`
  font-size: 30px;
  padding: 4px 6px 0 8px;
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
  
  @media only screen and (min-width: 1000px) {
    font-size: 36px;
    padding: 4px 8px 0 8px;
  }
`;