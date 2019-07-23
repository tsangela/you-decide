import "./index.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import styled from "styled-components";
import NavButtons from "./components/NavButtons";
import Cards from "./components/Card";
import { theme1, theme2, theme3 } from "./components/theme";
import { CenterWrapper, StyledLink } from "./components/Utils";

class App extends Component {
  render() {
    return (
      <Router>
        <CenterWrapper>
          <Title>you decide</Title>
        </CenterWrapper>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/beverages" component={Beverages} />
        </>
        <NavButtons />
      </Router>
    );
  }
}

const NavBar = () => {
  return (
    <CenterWrapper>
      <ButtonWrapper>
        <StyledLink to="/">
          <Button key="/">
            <span>home</span>
          </Button>
        </StyledLink>

        <ButtonDivider />

        <StyledLink to="/restaurants">
          <Button key="/restaurants">
            <span>restaurants</span>
          </Button>
        </StyledLink>

        <ButtonDivider />

        <StyledLink to="/beverages">
          <Button key="/beverages">
            <span>beverages</span>
          </Button>
        </StyledLink>
      </ButtonWrapper>
    </CenterWrapper>
  );
};

function Home() {
  return <NavBar />;
}

function Restaurants() {
  return (
    <>
      <NavBar />
      <Cards />
    </>
  );
}

function Beverages() {
  return (
    <>
      <NavBar />
      <Cards />
    </>
  );
}

const ButtonDivider = () => {
  return <span style={{ opacity: 0.3 }}> | </span>;
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.span`
  // width: fit-content;
  // padding: 5px;
  // margin: 10px;
  // background-color: white;
  color: black;
  // border: 1px solid black;
  // border-radius: 10px;
  opacity: 0.3;
  transition: ease 0.3s;

  &:hover {
    // background-color: black;
    // color: whitesmoke;
    opacity: 1;
    // font-weight: 600;
  }
`;

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
