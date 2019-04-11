import React, { Component } from "react";
import TrainingNavigation from "./TrainingNavigation";
import SetSchemeHandler from "./SetSchemeHandler";
import ExerciseHandler from "./ExerciseHandler";

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }
  render() {
    const schemeName = this.props.location.schemeName;
    const scheme = schemeName === undefined ? "Quick training" : schemeName;
    return (
      <React.Fragment>
        <h1>{scheme}</h1>
        <TrainingNavigation />
        <SetSchemeHandler />
        <ExerciseHandler />
      </React.Fragment>
    );
  }
}

////Now this component render only passed data from link because
// Training must know which ExerciseScheme will be handling

export default Training;
