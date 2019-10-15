import {CenterWrapper} from "../Utils";
import Cards from "../Card";
import React from "react";
import {DecideButton} from "../DecideButton";

export function Beverages() {
  const data = require("../../data/test-beverages.json");

  return (
    <CenterWrapper>
      <DecideButton locations={data.locations}/>
      <Cards data={data}/>
    </CenterWrapper>
  );
}