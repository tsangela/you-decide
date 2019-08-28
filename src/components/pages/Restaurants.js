import Cards from "../Card";
import React from "react";
import {Button, CenterWrapper} from "../Utils";
import {decide} from "../../backend/decide";

export function Restaurants() {
  const data = require("../../data/test-restaurants.json");

  return (
    <CenterWrapper>
      <Button
        key="decide"
        onClick={() => decide(data.locations)}
      >
        decide
      </Button>
      <Cards data={data}/>
    </CenterWrapper>
  );
}
