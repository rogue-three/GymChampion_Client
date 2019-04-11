import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";

class LogEntryDetails extends Component {
  render() {
    return (
      <Collapse in={this.props.isExpanded} timeout="auto" unmountOnExit>
        <Paper>
          <Typography>DETAILS</Typography>
        </Paper>
      </Collapse>
    );
  }
}

export default LogEntryDetails;
