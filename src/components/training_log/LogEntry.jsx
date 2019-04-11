import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Subject from "@material-ui/icons/Subject";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import LogEntryDetails from "./LogEntryDetails";

class LogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };

    this.expandDetails = this.expandDetails.bind(this);
  }
  getNicePrintedDate(date) {
    let day =
      date.getDate().toString().length === 1
        ? "0" + date.getDate()
        : date.getDate();
    let month = date.getMonth() + 1;
    month = month.toString().length === 1 ? "0" + month : month;
    return day + "." + month + "." + date.getFullYear();
  }

  milisecondsToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  expandDetails() {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  }

  render() {
    const { training } = this.props;
    return (
      <React.Fragment>
        <ListItem>
          <Typography color="secondary">Date:</Typography>&nbsp;&nbsp;
          {this.getNicePrintedDate(new Date(training.trainingDateStart))}
          ,&nbsp;&nbsp;
          <Typography color="secondary">Duration:</Typography>&nbsp;&nbsp;
          {this.milisecondsToTime(
            training.trainingDateFinish - training.trainingDateStart
          )}
          <ListItemSecondaryAction>
            <ListItemIcon>
              <Subject onClick={this.expandDetails} />
            </ListItemIcon>
          </ListItemSecondaryAction>
        </ListItem>
        <LogEntryDetails isExpanded={this.state.isExpanded} />
        <Divider />
      </React.Fragment>
    );
  }
}

export default LogEntry;
