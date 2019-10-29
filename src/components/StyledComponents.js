import styled, {keyframes} from "styled-components";
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
  font-size: 24px;
  padding: 5px 15px;
  margin-top: 15px;
  
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

export const Emoji = (props) => {
  return <span role='img' aria-label='icon'>{ props.input }</span>
};


const fadeRotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  
  50% {
    opacity: 0.5;
  }

  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

export const Spinner = styled.div`
  font-size: 30px;
  margin: 0.5em;
  animation: ${fadeRotate} 1.5s linear infinite;
`;

export const LoadingSpinner = () =>
  <CenterWrapper>
    <Spinner>🍓</Spinner>
    <Spinner>🍋</Spinner>
    <Spinner>🥝</Spinner>
  </CenterWrapper>
;


const expand1 = keyframes`
  0%   { transform: scale(3); }
  25%  { transform: scale(2); }
  50%  { transform: scale(1); } 
  75%  { transform: scale(2); }
  100% { transform: scale(3); }
`;

const expand2 = keyframes`
  0%   { transform: scale(2); }
  25%  { transform: scale(3); } 
  50%  { transform: scale(2); }
  75%  { transform: scale(1); }
  100% { transform: scale(2); }
`;

const expand3 = keyframes`
  0%   { transform: scale(1); }
  25%  { transform: scale(2); }
  50%  { transform: scale(3); }
  75%  { transform: scale(2); }
  100% { transform: scale(1); }
`;

const fadeExpand = keyframes`
  from {
    transform: scale(1);
    opacity 1;
  }
  
  to {
    transform: scale(3);
    opacity 0;
  }
`;

export const LoadingDot = styled.div`
  width: 1em;
  height: 1em;
  margin: 1.5em;
  background-color: ${props => props.color || theme.melon};
  border-radius: 50%;
  animation: ${props => props.expand1 ? expand1 : props.expand2 ? expand2 : expand3} 1s linear infinite;
`;