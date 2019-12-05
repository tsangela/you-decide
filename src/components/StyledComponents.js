import styled from "styled-components";
import {theme} from "./theme";
import {Link} from "react-router-dom";
import React from "react";

export const CenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${props => props.margin && "margin: 1rem 2rem 0rem 2rem;"}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 0.5rem;
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