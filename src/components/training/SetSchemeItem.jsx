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
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    event.target.name === "weight"
      ? this.setState({ weight: event.target.value })
      : this.setState({ reps: event.target.value });
  }

  render() {
    const { exercise, setSchemeItemNumber } = this.props;
    return (
      <Paper square>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={1} />
          <Grid item xs={1}>
            <Typography>{setSchemeItemNumber}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography noWrap variant="caption">
              {exercise.replace(/_/g, " ")}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Input
              margin="dense"
              type="number"
              name="weight"
              style={{ width: 50 }}
              onChange={this.updateInput}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Input
              margin="dense"
              type="number"
              name="reps"
              style={{ width: 50 }}
              onChange={this.updateInput}
            />
          </Grid>
          <span />
        </Grid>
      </Paper>
    );
  }
}

export default SetSchemeItem;
