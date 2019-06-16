import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TrainingNavigation from "./TrainingNavigation";
import SetSchemeHandler from "./SetSchemeHandler";
import ExerciseHandler from "./ExerciseHandler";

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schemeName: this.props.location.schemeName,
      exercises: [],
      setsField: [],
      setSchemesCounter: 0,
      setSchemeItemsFilled: false
    };
    this.addExerciseSetField = this.addExerciseSetField.bind(this);
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

  addExerciseSetField(exercise) {
    let setSchemeCounter = this.state.setSchemesCounter;
    let setsField = [
      ...this.state.setsField,
      { setNumber: setSchemeCounter, exercise: exercise }
    ];
    setSchemeCounter++;

    this.setState({
      setsField: setsField,
      setSchemesCounter: setSchemeCounter,
      setSchemeItemsFilled: false
    });
  }

  deleteSetField = setsFieldItemNumber => {
    let setsField = this.state.setsField;

    const setIndex = setsField.findIndex(
      set => set.setNumber === setsFieldItemNumber
    );
    setsField.splice(setIndex, 1);

    this.setState({
      setsField: setsField
    });
  };

  changeSchemeItemsFilled = areFilled => {
    this.setState({ setSchemeItemsFilled: areFilled });
  };

  render() {
    const { exercises, setsField } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <TrainingNavigation
            setSchemeItemsFilled={this.state.setSchemeItemsFilled}
          />
        </Grid>
        <Grid item xs={12}>
          <SetSchemeHandler
            setsField={setsField}
            changeSchemeItemsFilled={this.changeSchemeItemsFilled}
            deleteSetField={this.deleteSetField}
            setSchemeCounter={this.state.setSchemesCounter}
          />
        </Grid>
        <Grid item xs={12}>
          <ExerciseHandler
            exercises={exercises}
            addExerciseSetField={this.addExerciseSetField}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Training;
