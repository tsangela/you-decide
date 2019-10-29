import {Button, Emoji} from "./StyledComponents";
import React from "react";
import {decide} from "../backend/decide";

export const DecideButton = ({ results }) =>
  <Button
    key="decide"
    onClick={() => decide(results)}
  >
    hit me up <Emoji input={'✨'}/>
  </Button>;
