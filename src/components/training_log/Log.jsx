import React, { Component } from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import LogEntry from "./LogEntry";

class Log extends Component {
  render() {
    const { trainings, deleteTraining } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <List>
          {trainings.map(training => (
            <LogEntry
              key={training.trainingId}
              training={training}
              deleteTraining={deleteTraining}
            />
          ))}
        </List>
      </Grid>
    );
  }
}

export default Log;
