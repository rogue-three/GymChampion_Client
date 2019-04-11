import React, { Component } from "react";

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
      </React.Fragment>
    );
  }
}

////Now this component render only passed data from link because
// Training must know which ExerciseScheme will be handling

export default Training;
