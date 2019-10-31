import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import styled from "styled-components";
import Footer from "./components/Footer";
import {theme} from "./components/theme";
import {CenterWrapper} from "./components/StyledComponents";
import {NavBar} from "./components/NavBar";
import Home from "./components/pages/Home";
import Places from "./components/pages/Places";

class App extends React.Component {
  render() {
    return (
      <Router>
        <CenterWrapper>
          <Title>you decide</Title>
        </CenterWrapper>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route path="/restaurants" render={(props) => <Places {...props} type={['restaurant', 'food']}/>}/>
        <Route path="/cafes" render={(props) => <Places {...props} type={['cafe']}/>}/>
        <Route path="/bakeries" render={(props) => <Places {...props} type={['bakery']}/>}/>
        <Route path="/bars" render={(props) => <Places {...props} type={['bar']}/>}/>
        <Footer/>
      </Router>
    );
  }
}

const Title = styled.h1`
  width: fit-content;
  padding: 5px;
  border: 1px solid ${theme.ashGrey};
  color: ${theme.ashGrey};
  transition: ease 0.3s;
  font-size: 2.5rem;

  &:hover {
    padding-left: 10px;
    border-color: ${theme.ashGrey};
    background-color: ${theme.ashGrey};
    color: whitesmoke;
    letter-spacing: 5px;
  }
`;

ReactDOM.render(<App/>, document.getElementById("root"));
