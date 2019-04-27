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
      training: this.props.training,
      setSchemes: [],
      isExpanded: false
    };

    this.expandDetails = this.expandDetails.bind(this);
  }

  componentDidMount() {
    fetch(
      "http://localhost:8080/v1/trainings/set_schemes/training/" +
        this.state.training.trainingId
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            setSchemes: result.map(setScheme => ({
              setSchemeId: setScheme.setSchemeId,
              reps: setScheme.reps,
              weight: setScheme.weight,
              training: this.state.training,
              exercise: {
                exerciseId: setScheme.exercise.exerciseId,
                exerciseName: setScheme.exercise.exerciseName,
                maxReps: setScheme.exercise.maxReps,
                maxWeight: setScheme.exercise.maxWeight,
                bodyPart: {
                  bodyPartId: setScheme.exercise.bodyPart.bodyPartId,
                  bodyPartName: setScheme.exercise.bodyPart.bodyPartName
                },
                equipment: {
                  equipmentId: setScheme.exercise.equipment.equipmentId,
                  equipmentName: setScheme.exercise.equipment.equipmentName
                },
                exerciseScheme: {
                  exerciseSchemeId:
                    setScheme.exercise.exerciseScheme.exerciseSchemeId,
                  exerciseSchemeName:
                    setScheme.exercise.exerciseScheme.exerciseSchemeName
                }
              }
            }))
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  getNicePrintedDate = date => {
    let day =
      date.getDate().toString().length === 1
        ? "0" + date.getDate()
        : date.getDate();
    let month = date.getMonth() + 1;
    month = month.toString().length === 1 ? "0" + month : month;
    return day + "." + month + "." + date.getFullYear();
  };

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

  deleteTraining() {
    this.props.deleteTraining(this.state.training.trainingId);
  }

  render() {
    const { training, setSchemes } = this.state;
    return (
      <React.Fragment>
        <ListItem>
          <Typography color="secondary">Date:</Typography>&nbsp;&nbsp;
          <Typography>
            {this.getNicePrintedDate(new Date(training.trainingDateStart))}
            ,&nbsp;&nbsp;
          </Typography>
          <Typography color="secondary">Duration:</Typography>&nbsp;&nbsp;
          <Typography>
            {this.milisecondsToTime(
              training.trainingDateFinish - training.trainingDateStart
            )}
          </Typography>
          <ListItemSecondaryAction>
            <ListItemIcon>
              <Subject onClick={this.expandDetails} />
            </ListItemIcon>
          </ListItemSecondaryAction>
        </ListItem>
        <LogEntryDetails
          setSchemes={setSchemes}
          isExpanded={this.state.isExpanded}
          deleteTraining={this.deleteTraining.bind(this)}
        />
        <Divider />
      </React.Fragment>
    );
  }
}

export default LogEntry;
