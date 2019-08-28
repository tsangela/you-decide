import React from "react";
import styled from "styled-components";
import { theme } from "./theme";
import {CenterWrapper} from "./Utils";

export default class Footer extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavLink
          href="https://tsangela.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-user-astronaut fa-3x nav-btn" />
        </NavLink>
        <NavLink
          href="https://github.com/tsangela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-3x nav-btn" />
        </NavLink>
        <NavLink
          href="https://github.com/tsangela/you-decide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-code-branch fa-3x nav-btn" />
        </NavLink>
        <NavLink href="mailto:?subject=Play%20Connect%20Four%21&body=Check%20out%20this%20cool%20way%20to%20decide%20where%20to%20eat%3A%20https%3A//tsangela.github.io/you-decide/">
          <i className="fas fa-share-alt fa-3x nav-btn" />
        </NavLink>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled(CenterWrapper)`
  margin-top: 1rem;
`;

const NavLink = styled.a`
  margin: 0.5rem;
  color: ${theme.ashGrey};
  transition: 0.3s ease;

  &:hover {
    color: ${theme.lavenderGray};
  }
`;
