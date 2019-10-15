import Cards from "../Card";
import React from "react";
import {CenterWrapper} from "../Utils";
import {DecideButton} from "../DecideButton";

export function Restaurants() {
  const data = require("../../data/test-restaurants.json");

  return (
    <CenterWrapper>
      <DecideButton locations={data.locations}/>
      <Cards data={data}/>
    </CenterWrapper>
  );
}
