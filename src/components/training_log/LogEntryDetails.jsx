import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";

class LogEntryDetails extends Component {
  getNiceExerciseName(exerciseName) {
    let niceExerciseName =
      exerciseName.charAt(0).toUpperCase() +
      exerciseName.slice(1).replace(/_/g, " ");
    return niceExerciseName;
  }
  render() {
    const { setSchemes, isExpanded, deleteTraining } = this.props;
    return (
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Paper square>
          <List>
            {setSchemes.map(setScheme => (
              <ListItem key={setScheme.setSchemeId} divider>
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
          <Button onClick={deleteTraining}>
            <Typography color="error">&nbsp;DELETE</Typography>
          </Button>
        </Paper>
      </Collapse>
    );
  }
}

export default LogEntryDetails;
