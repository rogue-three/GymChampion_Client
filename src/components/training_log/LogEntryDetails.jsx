import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";

class LogEntryDetails extends Component {
  getNiceExerciseName(exerciseName) {
    let niceExerciseName =
      exerciseName.charAt(0).toUpperCase() +
      exerciseName.slice(1).replace(/_/g, " ");
    return niceExerciseName;
  }
  render() {
    const { setSchemes, isExpanded } = this.props;
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Paper>
          <List>
            {setSchemes.map(setScheme => (
              <ListItem key={setScheme.setSchemeId} divider="true">
                <div>
                  {this.getNiceExerciseName(setScheme.exercise.exerciseName)}
                  <Typography color="secondary">
                    Reps:&nbsp;{setScheme.reps}&nbsp;Weight:&nbsp;
                    {setScheme.weight}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Collapse>
    );
  }
}

export default LogEntryDetails;
