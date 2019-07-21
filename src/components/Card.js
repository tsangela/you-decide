import React, { Component } from "react";
import styled from "styled-components";
import { CenterWrapper } from "./CenterWrapper";
import { Modal } from "./Modal";

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
  };

  hideModal() {
    this.setState({ show: null });
  };

  render() {
    // console.log('state -> ' + this.state.show);
    const list =
      data &&
      data.restaurants.map(restaurant => {
        // console.log(JSON.stringify(restaurant));
        return (
          <Card key={restaurant.name}>
            <p>{restaurant.name}</p>
            <p>{restaurant.price}</p>
            <button onClick={() => this.showModal(restaurant.name)}>
              open
            </button>
            <Modal
              key={`modal.${restaurant.name}`}
              show={this.state.show === restaurant.name}
              handleClose={() => this.hideModal()}
            >
              <p>Some sort of description</p>
            </Modal>
          </Card>
        );
      });
    return <CenterWrapper>{list}</CenterWrapper>;
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
  }
`;

export default Cards;
