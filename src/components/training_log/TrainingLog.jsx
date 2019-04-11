import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Subject from "@material-ui/icons/Subject";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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
        <br />
        <Grid container direction="column" alignItems="center">
          <Typography color="primary" variant="h4" justify-content="center">
            TRAININGS
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <List>
            {trainings.map(training => (
              <Grid key={training.trainingId}>
                <ListItem>
                  {training.trainingId} -{" "}
                  {new Date(training.trainingDateStart).toDateString()}
                  <ListItemSecondaryAction>
                    <ListItemIcon>
                      <Subject />
                    </ListItemIcon>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Grid>
            ))}
          </List>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TrainingLog;
