import React from "react";
import styled, { keyframes } from "styled-components";
import { theme1, theme2, theme3 } from "./theme";

export const Modal = ({ handleClose, show, description }) => {
  return (
    <Container show={show}>
      <p>{description}</p>
      <CloseButton onClick={handleClose}>👌</CloseButton>
    </Container>
  );
};

const zoomFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  position: fixed;
  display: ${props => (props.show ? "block" : "none")};
  text-align: center;
  background: white;
  width: 18rem;
  height: 10rem;
  padding: 1.5rem;
  box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.15);
  border-top: 1.2rem solid ${theme3.lavenderGray}
  
  animation: 0.25s ${zoomFadeIn};
`;

const CloseButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.5rem;
  transition: transform 0.2s;
  margin: 0.5rem;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
