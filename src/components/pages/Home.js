import React from "react";
import styled from "styled-components";
import {CenterWrapper, Emoji} from "../StyledComponents";

import avocados from "../../media/avocados.jpg";

export default class Home extends React.Component {
  render() {
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
        </Content>
      </ContentWrapper>
    </CenterWrapper>
  }
}

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  align-items: center;
  flex-direction: column;
  
  background: rgba(255,255,255,0.8);
  width: 300px;
  padding: 3rem 1.5rem; 

  overflow-y: scroll;
  
  @media only screen and (min-width: 800px) {
    width: 40%;
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