import {Button, CenterWrapper} from "../Utils";
import Cards from "../Card";
import React from "react";
import {choose} from "../../backend/choose";

export function Beverages() {
  const data = require("../../data/test-beverages.json");

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