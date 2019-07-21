import "./index.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { CenterWrapper } from "./components/CenterWrapper";
import NavButtons from "./components/NavButtons";
import Cards from "./components/Card";
import { theme1, theme2, theme3 } from "./components/theme";

class App extends Component {
  render() {
    return (
      <>
        <CenterWrapper>
          <Title>you decide</Title>
        </CenterWrapper>
        <Cards />
        <NavButtons />
      </>
    );
  }
}

const Title = styled.h1`
  width: fit-content;
  padding: 5px;
  border: 1px solid ${theme3.ashGrey};
  color: ${theme3.ashGrey};
  transition: ease 0.3s;
  font-size: 2rem;

  &:hover {
    padding-left: 10px;
    border-color: ${theme3.ashGrey};
    background-color: ${theme3.ashGrey};
    color: whitesmoke;
    letter-spacing: 5px;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
