import React from "react";
import {Modal} from "../components/Modal";

const data = require("../data/phrases.json");

export function choose(locations) {
  if (!locations || locations.length === 0) {
    alert("🚨 No locations to choose from!");
    return;
  }

  const phrase = random(data.phrases);
  const choice = random(locations);
  alert(phrase.prefix + choice.name + phrase.suffix + " 🎉");

  return (
    <Modal
      key={`modal.choice.${choice.name}`}
      show={true}
      handleClose={() => this.hideModal()}
      description={choice.description}
    />
  );
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}
