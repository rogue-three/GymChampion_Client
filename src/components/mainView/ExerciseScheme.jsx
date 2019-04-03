import React, { Component } from "react";

class ExerciseScheme extends Component {

    state = {
        exerciseSchemes: []
    }

    componentDidMount() {
    fetch("http://localhost:8080/v1/exercise_parameters/exercise_scheme")
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          isLoaded: true,
          exerciseSchemes: result
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
    }

    render() {
    //   const {exerciseSchemes} = this.state;
    //   return (     
    //     <ul>
    //         {exerciseSchemes.map(exScheme => (
    //       <li key={exScheme.id}>
    //         {exScheme.exercise_scheme_name}
    //       </li>
    //     ))}
    //   </ul>
    // );
    // }
    return (
      <div>
        <h1>Exercise scheme 1</h1>
        <h1>Exercise scheme 2</h1>
        <h1>Exercise scheme 3</h1>
      </div>
    );
    }
}
// http://localhost:8080/v1/exercise_parameters/exercise_scheme  route to get all scheme
export default ExerciseScheme;