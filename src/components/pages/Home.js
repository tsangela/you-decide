import React from "react";
import styled from "styled-components";
import {Redirect} from "react-router";
import {CenterWrapper, Emoji} from "../StyledComponents";

import avocados from "../../media/avocados.jpg";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: null
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({value});
  }

  render() {
    const { value } = this.state;

    if (value) {
      return <Redirect to={`/${value}`} />
    }

    return <CenterWrapper margin>
      <ContentWrapper>
        <Image src={avocados} alt={"avocados"}/>
        <Content>
          <Header>
            no more saying "no u" <Emoji input='🙅'/>
          </Header>
          <Description>
            find a food place nearby instantly,<br/>
            know <i>exactly</i> where to eat.
          </Description>
          <Header><Emoji input='🥨'/></Header>
          <Divider/>
          <Form>
            <Select name={"type"} onChange={this.handleChange}>
              <option value="" defaultValue hidden>i'm looking for a...</option>
              <option value="restaurants">🍚 restaurant</option>
              <option value="cafes">🍵 cafe</option>
              <option value="bakeries">🍞 bakery</option>
              <option value="bars">🍻 bar</option>
            </Select>
            <noscript><input type="submit" value="go!"/></noscript>
          </Form>
        </Content>
      </ContentWrapper>
    </CenterWrapper>
  }
}

const Divider = styled.span`
  width: 100%;
  margin: 0.5rem 0;
  border-top: 1px solid lightgray;
`;

const Form = styled.form`
  text-align: center;
  
  & select {
    line-height: 1.3;
  }
`;

const Select = styled.select`
  display: block;
  line-height: 1.3; 
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  align-items: center;
  flex-direction: column;
  
  background: rgba(255,255,255,0.8);
  width: 40%;
  padding: 3rem 1.5rem; 

  overflow-y: scroll;
  
  @media only screen and (min-width: 800px) {
    width: 45%;
  }
`;

const Header = styled.span`
  font-size: 18px;
  font-weight: 900;
  text-align: center;

  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  
  @media only screen and (min-width: 1000px) {
    font-size: 30px;
  }
  
  @media only screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 10px;
  text-align: center;

  @media only screen and (min-width: 600px) {
    font-size: 12px;
    padding: 0 0.5rem; 
  }
  
  @media only screen and (min-width: 1000px) {
    font-size: 16px;
  }
  
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  min-width: 300px;
  width: 35%;
  border-radius: 10px;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  position: relative;
`;