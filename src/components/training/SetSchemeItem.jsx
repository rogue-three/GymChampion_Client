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
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Input
              margin="dense"
              type="number"
              name="reps"
              style={{ width: 50 }}
            />
          </Grid>
          <span />
        </Grid>
      </Paper>
    );
  }
}

export default SetSchemeItem;
