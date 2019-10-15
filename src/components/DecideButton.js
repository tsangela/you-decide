import {Button} from "./Utils";
import React from "react";
import {decide} from "../backend/decide";

export const DecideButton = ({ locations }) => {
  return <Button
    key="decide"
    onClick={() => decide(locations)}
  >
    decide
  </Button>
};
