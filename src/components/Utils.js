import styled from "styled-components";
import { Link } from "react-router-dom";

export const CenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${props => props.padding && "padding: 1rem 5rem 0rem 5rem;"}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:active {
    opacity: 1;
    color: red;
  }
`;
