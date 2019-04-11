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
      login: "Mihu"
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
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { trainings } = this.state;
    return (
      <React.Fragment>
        <Calendar />
        <br />
        <Grid container direction="column" alignItems="center">
          <Typography color="primary" variant="h4" justify-content="center">
            TRAININGS
          </Typography>
        </Grid>
        <Log trainings={trainings} />
      </React.Fragment>
    );
  }
}

export default TrainingLog;
