import Cards from "../Card";
import React from "react";
import {Button, CenterWrapper} from "../Utils";
import {choose} from "../../backend/choose";

export function Restaurants() {
  const data = require("../../data/test-restaurants.json");

  return (
    <CenterWrapper>
      <Cards data={data}/>
      <Button
        key="choose"
        onClick={() => choose(data.locations)}
      >
        choose
      </Button>
    </CenterWrapper>
  );
}
