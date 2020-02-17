import Select from "react-select";
import {options} from "../data/data";
import React from "react";
import styled from "styled-components";
import {Redirect} from "react-router";

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: null
    };
  }

  handleChange(event) {
    const value = event.value;
    this.setState({value});
  }

  render() {
    const { value } = this.state;

    return <SelectContainer>
      {value && <Redirect to={process.env.PUBLIC_URL + `/${value}`} />}
      <form>
        <Select
          name={"type"}
          onChange={this.handleChange}
          options={options}
        />
        <noscript><input type="submit" value="go!"/></noscript>
      </form>
    </SelectContainer>
  }
};

const SelectContainer = styled.div`
  position: relative;
  z-index: 999 !important;
  width: 50%;
  transform: translate(50%, 0%);
  
  @media only screen and (min-width: 800px) {
    width: 40%;
    transform: translate(75%, 0%);
  }
`;
