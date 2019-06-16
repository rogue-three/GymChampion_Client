import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

class SetSchemeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setSchemeItemNumber: this.props.setSchemeItemNumber,
      maxWeight: this.props.maxWeight,
      maxReps: this.props.maxReps,
      weight: 0,
      reps: 0
    };
  }

  setParameter = event => {
    return new Promise((resolve, reject) => {
      event.target.name === "weight"
        ? this.setState({ weight: event.target.value })
        : this.setState({ reps: event.target.value });
      resolve(event.target.value);
    });
  };

  checkIfLimitsAreExceeded(currentValue, maxValue) {
    let areExceeded;
    currentValue > 0 && currentValue < maxValue
      ? (areExceeded = false)
      : (areExceeded = true);
    return areExceeded;
  }

  setButtonState = value => {
    const { weight, reps, maxWeight, maxReps } = this.state;
    value !== "" &&
    !this.checkIfLimitsAreExceeded(weight, maxWeight) &&
    !this.checkIfLimitsAreExceeded(reps, maxReps)
      ? this.props.changeSchemeItemsFilled(true)
      : this.props.changeSchemeItemsFilled(false);
  };

  checkInput = event => {
    this.setParameter(event).then(value => this.setButtonState(value));
  };

  render() {
    const { exercise } = this.props;
    let { setSchemeItemNumber } = this.props;
    setSchemeItemNumber++;

    return (
      <Paper square style={{ padding: "0 0 0 8%" }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Typography>{setSchemeItemNumber}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography noWrap variant="caption">
              {exercise.replace(/_/g, " ")}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Input
              margin="dense"
              type="number"
              name="weight"
              style={{ width: 50 }}
              onChange={this.checkInput}
            />
          </Grid>
          <Grid item xs={1}>
            <Input
              margin="dense"
              type="number"
              name="reps"
              style={{ width: 50 }}
              onChange={this.checkInput}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={() => this.props.deleteSetScheme(setSchemeItemNumber)}
            >
              <DeleteForeverOutlinedIcon color={"secondary"} />
            </Button>
          </Grid>
          <span />
        </Grid>
      </Paper>
    );
  }
}

export default SetSchemeItem;
