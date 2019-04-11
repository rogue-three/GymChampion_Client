import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TrainingNavigation from "./TrainingNavigation";
import SetSchemeHandler from "./SetSchemeHandler";
import ExerciseHandler from "./ExerciseHandler";

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schemeName: this.props.location.schemeName,
      exercises: []
    };
  }

  componentDidMount() {
    const schemeName = this.state.schemeName;
    const schemeOption =
      schemeName === undefined ? "" : "/exercise_scheme/" + schemeName;

    fetch("http://localhost:8080/v1/exercises" + schemeOption)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            exercises: result.map(exercise => ({
              exerciseId: exercise.exerciseId,
              exerciseName: exercise.exerciseName,
              maxReps: exercise.maxReps,
              maxWeight: exercise.maxWeight,
              bodyPart: {
                bodyPartId: exercise.bodyPart.bodyPartId,
                bodyPartName: exercise.bodyPart.bodyPartName
              },
              equipment: {
                equipmentId: exercise.equipment.equipmentId,
                equipmentName: exercise.equipment.equipmentName
              },
              exerciseScheme: {
                exerciseSchemeId: exercise.exerciseScheme.exerciseSchemeId,
                exerciseSchemeName: exercise.exerciseScheme.exerciseSchemeName
              }
            }))
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { schemeName, exercises } = this.state;
    return (
      <React.Fragment>
        <h1>{schemeName}</h1>
        <List>
          {exercises.map(exercise => (
            <ListItem key={exercise.exerciseId}>{exercise.exerciseId}</ListItem>
          ))}
        </List>
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
