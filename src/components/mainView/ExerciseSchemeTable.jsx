import React, { Component } from "react";
import List from "@material-ui/core/List";
import SingleExerciseScheme from "./SingleExerciseScheme";

class ExerciseSchemeTable extends Component {
  state = {
    exerciseSchemes: [],
    getAllSchemesURL:
      "http://localhost:8080/v1/exercise_parameters/exercise_scheme"
  };

  componentDidMount() {
    fetch(this.state.getAllSchemesURL)
      .then(response => response.json())
      .then(result => {
        this.setState({ exerciseSchemes: result });
      });
  }

  render() {
    return (
      <React.Fragment>
        <List>
          {this.state.exerciseSchemes.map(scheme => (
            <li key={scheme.exerciseSchemeName}>
              <SingleExerciseScheme schemeName={scheme.exerciseSchemeName} />
            </li>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default ExerciseSchemeTable;
