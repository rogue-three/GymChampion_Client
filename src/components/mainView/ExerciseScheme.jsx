import React, { Component } from "react";

class ExerciseScheme extends Component {

    state = {
        exerciseSchemes: [],
        getAllSchemesURL: "http://localhost:8080/v1/exercise_parameters/exercise_scheme"
    }

    componentDidMount() {

      fetch(this.state.getAllSchemesURL)
      .then(response=>response.json())
      .then(result => {
        console.log(result);
        this.setState({exerciseSchemes: result});
      });
    
    }

    render() {

    return (
      <div>
        <ul>
            {this.state.exerciseSchemes.map(scheme => <li key={scheme.exerciseSchemeName}>{scheme.exerciseSchemeName}</li>)}
        </ul>
      </div>
       
    
    );
    }
}
// http://localhost:8080/v1/exercise_parameters/exercise_scheme  route to get all scheme
export default ExerciseScheme;