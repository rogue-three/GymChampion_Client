import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import SetSchemeItem from "./SetSchemeItem";

class SetSchemeHandler extends Component {
  state = {
    setSchemesCounter: 0
  };
  render() {
    const { setsField } = this.props;
    let { setSchemesCounter } = this.state;
    return (
      <List>
        {setsField.length !== 0 ? (
          setsField.map(exercise => (
            <ListItem item key={(setSchemesCounter++).toString()}>
              <SetSchemeItem exercise={exercise.exerciseName} />
            </ListItem>
          ))
        ) : (
          <Typography color="secondary">ADD SET SCHEME HERE</Typography>
        )}
      </List>
    );
  }
}

export default SetSchemeHandler;
