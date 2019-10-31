import React from "react";
import styled from "styled-components";
import { theme } from "./theme";
import {CenterWrapper} from "./StyledComponents";

export default class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterLink
          href="https://tsangela.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="website"
        >
          <i className="fas fa-user-astronaut fa-3x" />
        </FooterLink>
        <FooterLink
          href="https://github.com/tsangela/"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <i className="fab fa-github fa-3x" />
        </FooterLink>
        <FooterLink
          href="https://github.com/tsangela/you-decide/"
          target="_blank"
          rel="noopener noreferrer"
          title="repository"
        >
          <i className="fas fa-code-branch fa-3x" />
        </FooterLink>
        <FooterLink
          href="mailto:?subject=Decide%20where%20to%20eat%20now%21&body=Check%20out%20this%20cool%20way%20to%20decide%20where%20to%20eat%3A%20https%3A//tsangela.github.io/you-decide/"
          title="share"
        >
          <i className="fas fa-share-alt fa-3x" />
        </FooterLink>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: -170px;
  padding: 0.5rem 1rem;
  
  opacity: 0.5;
  background: ${theme.ashGrey};
  border-radius: 0 50px 50px 0;

  transition: 0.5s ease;
  
  &:hover {
    opacity: 1;
    left: 0;
  }
`;

const FooterLink = styled.a`
  padding: 0.5rem;
  color: white;
`;