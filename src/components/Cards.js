import React, {Component} from "react";
import styled from "styled-components";
import {Modal} from "./Modal";
import {CenterWrapper} from "./StyledComponents";
import {isValidArray} from "../backend/utils";

class Cards extends Component {
  constructor(props, context) {
    super(props, context);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      prev: null,
      show: null,
      place: null
    };
  }

  showModal(place) {
    this.setState({
      prev: this.state.show,
      show: place.place_id,
      place: place
    });
  }

  hideModal() {
    this.setState({
      prev: this.state.show,
      show: null
    });
  }

  render() {
    const { results, coords } = this.props;

    if (results.length === 0) {
      return (
        <CardsWrapper>
          <Card key={`card.no_results`}>
            <p>No results found!</p>
          </Card>
        </CardsWrapper>
      );
    }

    const cards =
      isValidArray(results) &&
      results.map(place =>
        <Card
          key={`card.${place.place_id}`}
          onClick={() => this.showModal(place)}
        >
          <p>{place.name}</p>
        </Card>
      );

    const modals =
      isValidArray(results) &&
      results.map(place =>
        <Modal
          key={`modal.${place.place_id}`}
          place={place}
          show={this.state.show === place.place_id}
          handleClose={() => this.hideModal()}
          coords={coords}
        />
      );

    return (
      <CardsWrapper>
        {cards}
        {modals}
      </CardsWrapper>
    );
  }
}

const CardsWrapper = styled(CenterWrapper)`
  flex-wrap: wrap;

  margin: 1rem 2rem;
  width: 400px
`;

const Card = styled.div`
  text-align: center;
  background: ghostwhite;
  width: 10rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  -webkit-transition: transform 0.3s;
  -moz-transition: transform 0.3s;
  -ms-transition: transform 0.3s;
  -o-transition: transform 0.3s;
  transition: transform 0.3s;
  box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default Cards;
