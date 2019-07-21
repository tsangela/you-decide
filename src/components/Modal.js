import React from "react";
import styled from "styled-components";

export const Modal = ({ handleClose, show, children }) => {
  // console.log("show -> " + show);
  return (
    <ModalWrapper show={show}>
      {children}
      <button onClick={handleClose}>close</button>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  display: ${props => (props.show ? "block" : "none")};
  text-align: center;
  background: white;
  width: 20rem;
  height: 15rem;
  padding: 0.5rem;
  // box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.15);
`;
