import React from "react";
import {CenterWrapper, Emoji} from "../StyledComponents";
import styled from "styled-components";

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
    </CenterWrapper>;
  }
}

const Content = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  background: white;
  min-width: 210px;
  width: 40%;
  height: 60%;
  padding: 1rem; 

  overflow-y: scroll;
  opacity: 0.9;
`;

const Header = styled.span`
  font-size: 14px;
  font-weight: 900;
  text-align: center;

  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  
  @media only screen and (min-width: 1000px) {
    font-size: 24px;
  }
  
  @media only screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 10px;

  @media only screen and (min-width: 600px) {
    font-size: 12px;
  }
  
  @media only screen and (min-width: 1000px) {
    font-size: 16px;
  }
  
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  min-width: 200px;
  width: 30%;
  border-radius: 10px;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  position: relative;
`;