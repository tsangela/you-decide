import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {theme} from "./theme";

export const CenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${props => props.margin && "margin: 1rem 5rem 0rem 5rem;"}

  @media only screen and (min-width: 1000px) {
    ${props => props.margin && "margin: 1rem 10rem 0rem 10rem;"}
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 0.5rem;
`;

export const Button = styled.div`
  font-size: 18px;
  padding: 5px 15px;
  margin-top: 15px;
  
  width: fit-content;
  
  background: ${props => props.backgroundColor || theme.saffron};
  color: whitesmoke;
  
  border-radius: 50px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  
  transition: 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
