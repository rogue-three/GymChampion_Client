import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class SetSchemeHandler extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status) {
      this.setState({
        status: nextProps.status
      });
    }
  }

  render() {
    let { setsField } = this.props;
    return (
      <List>
        {setsField.map(exercise => (
          <ListItem item key={new Date().toISOString()}>
            {exercise.exerciseId}
          </ListItem>
        ))}
      </List>
    );
  }
}

export default SetSchemeHandler;
