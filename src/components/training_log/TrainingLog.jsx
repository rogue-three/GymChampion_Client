import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Log from "./Log";
import Calendar from "./Calendar";

class TrainingLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
      login: this.props.activeUser
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/v1/trainings/active/" + this.state.login)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            trainings: result.map(training => ({
              trainingId: training.trainingId,
              trainingDateStart: training.trainingDateStart,
              trainingDateFinish: training.trainingDateFinish,
              userBodyWeight: training.userBodyWeight,
              archived: training.archived,
              user: {
                login: training.user.login,
                nickname: training.user.nickname,
                birthDate: training.user.birthDate,
                weight: training.user.weight,
                gender: {
                  genderId: training.user.gender.genderId,
                  sex: training.user.gender.sex
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

  deleteTraining(trainingId) {
    fetch("http://localhost:8080/v1/trainings/archive/" + trainingId, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    this.deleteFromState(trainingId);
  }

  deleteFromState(trainingId) {
    let currentTrainings = this.state.trainings;
    let trainingIndex;
    currentTrainings.forEach(training => {
      if (training.trainingId === trainingId - 1) {
        trainingIndex = currentTrainings.indexOf(training);
      }
    });
    currentTrainings.splice(currentTrainings.indexOf(trainingIndex), 1);
    this.setState({ trainings: currentTrainings });
  }

  render() {
    const { trainings } = this.state;
    return (
      <React.Fragment>
        <Calendar />
        <br />
        <Grid container direction="column" alignItems="center">
          <Typography color="primary" variant="h4" justify-content="center">
            TRAINING LOG
          </Typography>
        </Grid>
        <Log
          trainings={trainings}
          deleteTraining={this.deleteTraining.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default TrainingLog;
