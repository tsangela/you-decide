import styled from "styled-components";
import {theme} from "./theme";
import {NavLink} from "react-router-dom";
import React from "react";

export const CenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${props => props.margin && "margin: 1rem 2rem;"}
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  ${props => props.margin && "margin: 0 0.5rem;"}
`;

export const Button = styled.div`
  font-size: 20px;
  padding: 0.5rem 1.5rem;
  margin-top: 0.5rem;
  
  width: fit-content;
  
  background: ${props => props.backgroundColor || theme.lavenderGray};
  color: ${props => props.color || "whitesmoke"};
  
  border-radius: 50px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  
  transition: 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;


export const Highlight = styled.span`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 2px 100%;
  transition: background-size 0.25s ease;
  
  &:hover {
    background-size: 100% 100%;
  }
`;

export const Emoji = (props) => (
  <span role='img' aria-label='icon'>{ props.input }</span>
);

const FontSpinner = styled.span`
  color: ${theme.ashGrey};
`;

export const PlainSpinner = () => {
  return <CenterWrapper margin>
    <FontSpinner>
      <i className="fa fa-spinner fa-spin fa-3x" />
    </FontSpinner>
  </CenterWrapper>
};