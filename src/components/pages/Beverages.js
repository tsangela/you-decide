import {Button, CenterWrapper} from "../Utils";
import Cards from "../Card";
import React from "react";
import {decide} from "../../backend/decide";

export function Beverages() {
  const data = require("../../data/test-beverages.json");

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