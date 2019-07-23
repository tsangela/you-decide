import React, { Component } from "react";
import styled from "styled-components";
// import { CenterWrapper } from "./CenterWrapper";
import { Modal } from "./Modal";
import {CenterWrapper} from "./Utils";

const data = require("../data/test-restaurants.json");

class Cards extends Component {
  constructor(props, context) {
    super(props, context);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      show: null
    };
  }

  showModal(id) {
    this.setState({ show: id });
  }

  hideModal() {
    this.setState({ show: null });
  }

  render() {
    const cards =
      data &&
      data.restaurants.map(restaurant => {
        return (
          <Card
            key={restaurant.name}
            onClick={() => this.showModal(restaurant.name)}
          >
            <p>{restaurant.name}</p>
            <p>{restaurant.price}</p>
          </Card>
        );
      });

    const modals =
      data &&
      data.restaurants.map(restaurant => {
        return (
          <Modal
            key={`modal.${restaurant.name}`}
            show={this.state.show === restaurant.name}
            handleClose={() => this.hideModal()}
            description={restaurant.description}
          >
          </Modal>
        );
      });

    return (
      <CenterWrapper padding>
        {cards}
        {modals}
      </CenterWrapper>
    );
  }
}

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
