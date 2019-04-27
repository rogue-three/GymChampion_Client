import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";

class SetSchemeItem extends Component {
  render() {
    const { exercise, setSchemeItemNumber } = this.props;
    return (
      <Grid item xs={12}>
        <Paper square>
          <Typography>
            {setSchemeItemNumber} {exercise.replace(/_/g, " ")}
          </Typography>
          <FormLabel>
            <Input type="number" name="weight" style={{ width: 100 }} />
            <Input type="number" name="reps" style={{ width: 100 }} />
          </FormLabel>
        </Paper>
      </Grid>
    );
  }
}

export default SetSchemeItem;
