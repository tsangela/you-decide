import React from "react";
import styled, {keyframes} from "styled-components";
import {theme} from "./theme";
import {Emoji} from "./StyledComponents";
import {calculateDistance, getMapUrl, isNonEmptyObject, roundToOneDecimal} from "../backend/utils";

export class Modal extends React.Component {
  render() {
    const { place, show, handleClose, coords } = this.props;
    const distance = calculateDistance(place.geometry.location, coords);

    return isNonEmptyObject(place)
      ? <Container show={show}>
        <h3>{place.name}</h3>
        <p>{place.vicinity}</p>
        <p>{distance ?
          <span>
            <Emoji input={'📍'}/>
            <a href={getMapUrl(place.vicinity)} target='_blank'
               rel="noopener noreferrer">{distance} km</a>
          </span> :
          <i className="fa fa-spinner fa-spin"/>}
        </p>
        <div><span><b>Rating:</b> {getSymbols(place.rating, '⭐')} {roundToOneDecimal(place.rating)}</span></div>
        <div><span><b>Price:</b> {getSymbols(place.price_level, '💰')}</span></div>
        <CloseButton onClick={handleClose}><Emoji input={'👌'}/></CloseButton>
      </Container> : <></>;
  }
}

function getSymbols(rating, symbol) {
  if (!rating) {
    return 'N/A';
  }
  let symbols = '';
  for (let i = 1; i <= rating; i++) {
    symbols += symbol;
  }
  return symbols;
}

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
  height: 12rem;
  padding: 1.5rem;
  box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.15);
  border-top: 1.2rem solid ${props => props.borderColor || theme.lavenderGray};
  overflow-y: scroll;
  
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

