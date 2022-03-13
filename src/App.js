import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [disableBtn, setDisableBtn] = React.useState("DISABLE");
  const [isDisable, setIsDisable] = React.useState(false);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function clear() {
    setCount(0);
  }
  function triggerDisable() {
    setIsDisable((prevIsDisable) => !prevIsDisable);
    setDisableBtn("ABLE");
  }
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outlined" disabled={isDisable} onClick={add}>
        CLICK:{count}
      </Button>
      <Button variant="outlined" onClick={clear}>
        CLEAR
      </Button>
      <Button variant="outlined" onClick={triggerDisable}>
        {disableBtn}
      </Button>
    </ButtonGroup>
  );
}
