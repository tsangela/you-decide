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
            no more saying "no u" <Emoji input='🙅🏻‍♀️'/>
          </Header>
          <Description>
            find a food place nearby instantly,<br/>
            know <i>exactly</i> where to eat.
          </Description>
        </Content>
      </ContentWrapper>
    </CenterWrapper>
  }
}

const Content = styled.div`
  background: rgba(255,255,255,0.8);
  
  width: 280px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  padding: 20px 10px; 
  overflow-y: scroll;
  
  @media only screen and (min-width: 600px) {
    width: 450px;
    height: 300px;
  }
`;

const Header = styled.span`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  
  @media only screen and (min-width: 600px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  border-radius: 10px;
  width: 300px;
  
  @media only screen and (min-width: 600px) {
    width: 470px; 
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;