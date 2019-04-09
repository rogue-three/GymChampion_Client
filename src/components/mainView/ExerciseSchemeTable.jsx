import React, { Component } from "react";
import SingleExerciseScheme from "./SingleExerciseScheme";

class ExerciseSchemeTable extends Component {

    state = {
        exerciseSchemes: [],
        getAllSchemesURL: "http://localhost:8080/v1/exercise_parameters/exercise_scheme"
    }

    componentDidMount() {
      fetch(this.state.getAllSchemesURL)
      .then(response=>response.json())
      .then(result => {
        this.setState({exerciseSchemes: result});
      });
    }

    render() {
    return (
      <React.Fragment>
        <ul>
            {this.state.exerciseSchemes.map(scheme => <li key={scheme.exerciseSchemeName}>
            <SingleExerciseScheme schemeName={scheme.exerciseSchemeName}/></li>)}
        </ul>
        </React.Fragment>
    );
    }
}

export default ExerciseSchemeTable;