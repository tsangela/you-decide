import React from "react";
import styled, {keyframes} from "styled-components";
import {theme} from "./theme";
import {Emoji} from "./StyledComponents";
import {
  calculateDistance,
  getDirectionsUrl, getMapUrl,
  getSymbols,
  isNonEmptyObject,
  roundToOneDecimal
} from "../backend/utils";

export class Modal extends React.Component {
  render() {
    const { place, show, handleClose, coords } = this.props;

    return isNonEmptyObject(place)
      ? <Container show={show}>
        <h3>{place.name}</h3>
        <p>{place.vicinity}</p>
        <Distance place={place} coords={coords}/>
        <Rating place={place}/>
        <Price place={place}/>
        <Availability place={place}/>
        <CloseButton onClick={handleClose}><Emoji input={'👌'}/></CloseButton>
      </Container> : <></>;
  }
}

const Distance = ({place, coords}) => {
  const distance = calculateDistance(place.geometry.location, coords);

  return <p>{distance ?
    <span>
      <Emoji input={'📍'}/>
      <a href={getDirectionsUrl(coords, place.name, place.vicinity)} target='_blank'
         rel="noopener noreferrer">{distance} km</a>
    </span> :
    <i className="fa fa-spinner fa-spin"/>}
  </p>
};

const Rating = ({place}) => {
  const rating = place.rating;
  const totalRatings = place.user_ratings_total;
  return <div>
    <span><b>Rating:</b> {getSymbols(rating, '⭐')} {roundToOneDecimal(rating)} {totalRatings && `(${totalRatings})`}</span>
  </div>
};

const Price = ({place}) => {
  return <div>
    <span><b>Price:</b> {getSymbols(place.price_level, '💰')}</span>
  </div>
};

const Availability = ({place}) => {
  const isOpen = place.opening_hours && place.opening_hours.open_now;
  const status = isOpen ? "Open" : "Closed";

  return (
  <a href={getMapUrl(place.name, place.vicinity)} target='_blank'
     rel="noopener noreferrer">
    <Label isOpen={isOpen}>{status}</Label>
  </a>)
};

const Label = styled.span`
  display: inline-block;
  background: ${props => (props.isOpen ? "mediumseagreen" : "indianred")};
  color: white;
  
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  border-radius: 50px;
  
  transition: 0.2s ease;
  
  &:hover {
    transform: scale(1.1); 
  }
`;

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
  padding: 1.5rem;
  box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.15);
  border-top: 1.2rem solid ${props => props.borderColor || theme.lavenderGray};
  overflow: auto;
  
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

