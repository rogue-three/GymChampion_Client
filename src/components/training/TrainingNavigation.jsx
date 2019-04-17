import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Timer from "./Timer";

class TrainingNavigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Button>STOP</Button>
        <Timer />
        <Button>SAVE</Button>
        <Button>CHANCEL</Button>
      </React.Fragment>
    );
  }
}

export default TrainingNavigation;
