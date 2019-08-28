import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";
import { CenterWrapper } from "./Utils";

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
    const data = this.props.data;
    const cards =
      data &&
      data.locations &&
      data.locations.map(location => {
        return (
          <Card
            key={location.name}
            onClick={() => this.showModal(location.name)}
          >
            <p>{location.name}</p>
            <p>{location.price}</p>
          </Card>
        );
      });

    const modals =
      data &&
      data.locations &&
      data.locations.map(location => {
        return (
          <Modal
            key={`modal.${location.name}`}
            show={this.state.show === location.name}
            handleClose={() => this.hideModal()}
            description={location.description}
          />
        );
      });

    return (
      <CenterWrapper margin>
        {cards}
        {modals}
      </CenterWrapper>
    );
  }
}

export const Card = styled.div`
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
