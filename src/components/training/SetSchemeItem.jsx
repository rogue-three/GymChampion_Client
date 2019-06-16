import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

class SetSchemeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  setButtonState = value => {
    value !== "" && this.state.weight > 0 && this.state.reps > 0
      ? this.props.changeSchemeItemsFilled(true)
      : this.props.changeSchemeItemsFilled(false);
  };

  checkInput = event => {
    this.setParameter(event).then(value => this.setButtonState(value));
  };

  render() {
    const { exercise, setSchemeItemNumber } = this.props;
    return (
      <Paper square style={{ padding: "0 0 0 10%" }}>
        <Grid container direction="row" justify="space-between">
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
            <Typography>X</Typography>
          </Grid>
          <span />
        </Grid>
      </Paper>
    );
  }
}

export default SetSchemeItem;
