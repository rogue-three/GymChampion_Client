import React, { Component } from "react";

class TrainingLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
      login: "Mihu"
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/v1/trainings/login/" + this.state.login)
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
      <ul>
        {trainings.map(training => (
          <li key={training.trainingId}>{training.trainingId}</li>
        ))}
      </ul>
    );
  }
}

export default TrainingLog;
