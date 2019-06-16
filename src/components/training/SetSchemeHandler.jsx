import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SetSchemeItem from "./SetSchemeItem";
import Divider from "@material-ui/core/Divider";
import SetSchemeHandlerHeader from "./SetSchemeHandlerHeader";

class SetSchemeHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setSchemesProperFilled: []
    };
  }

  getSetScheme(schemeparams) {
    return new Promise((resolve, reject) => {
      const [indexOfScheme, setSchemeItemNumber, areFilled] = schemeparams;
      const setSchemesProperFilled = this.state.setSchemesProperFilled;
      if (indexOfScheme > -1) {
        setSchemesProperFilled[indexOfScheme] = {
          setNumber: setSchemeItemNumber,
          isProper: areFilled
        };
      } else {
        setSchemesProperFilled.push({
          setNumber: setSchemeItemNumber,
          isProper: areFilled
        });
      }
      resolve(setSchemesProperFilled);
    });
  }

  checkIfAllSchemesProperFilled() {
    const setSchemesProperFilled = this.state.setSchemesProperFilled;

    for (let i = 0; i < setSchemesProperFilled.length; i++) {
      if (!setSchemesProperFilled[i].isProper) {
        return false;
      }
    }
    return true;
  }

  handleSchemeItemsFilled = (areFilled, setSchemeItemNumber) => {
    const setSchemesProperFilled = this.state.setSchemesProperFilled;
    const indexOfScheme = setSchemesProperFilled.findIndex(
      setScheme => setScheme.setNumber === setSchemeItemNumber
    );

    const schemeparams = [indexOfScheme, setSchemeItemNumber, areFilled];
    this.getSetScheme(schemeparams).then(setSchemesProperFilled =>
      this.setState({ setSchemesProperFilled: setSchemesProperFilled })
    );
    const areAllSchemesProperFilled = this.checkIfAllSchemesProperFilled();
    const filledSchemesLength = this.state.setSchemesProperFilled.length;
    this.props.changeSchemeItemsFilled(
      areAllSchemesProperFilled,
      filledSchemesLength
    );
  };

  deleteSetScheme = setSchemeItemNumber => {
    this.props.deleteSetField(setSchemeItemNumber - 1);
  };

  render() {
    const { setsField } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <SetSchemeHandlerHeader />
        </Grid>

        {setsField.length !== 0 ? (
          setsField.map(exercise => (
            <Grid item key={exercise.setNumber}>
              <Divider />
              <SetSchemeItem
                setSchemeItemNumber={exercise.setNumber}
                exercise={exercise.exercise.exerciseName}
                maxWeight={exercise.exercise.maxWeight}
                maxReps={exercise.exercise.maxReps}
                changeSchemeItemsFilled={this.handleSchemeItemsFilled}
                deleteSetScheme={this.deleteSetScheme}
              />
            </Grid>
          ))
        ) : (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography color="secondary">ADD SET SCHEME HERE</Typography>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default SetSchemeHandler;
