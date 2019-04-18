import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class ExerciseHandler extends Component {
  render() {
    const { exercises } = this.props;
    return (
      <List>
        {exercises.map(exercise => (
          <ListItem key={exercise.exerciseId}>{exercise.exerciseId}</ListItem>
        ))}
      </List>
    );
  }
}

export default ExerciseHandler;
