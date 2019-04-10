import React, { Component } from "react";
import Nickname from "./Nickname";
import Weight from "./Weight";
import BirthDate from "./BirthDate";
import Gender from "./Gender";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitDisabled: true,
      warning: ""
    };
  }

  handleSubmit = event => {
    const userNickname = event.target.nickname.value;
    const userWeight = event.target.weight.value;
    const userBirthDate = new Date(event.target.date.value);
    let isWeightProper;
    let isBirthDayYearProper;

    isWeightProper = this.checkParam(userWeight, 30, 200, "Wrong user weight!");
    isBirthDayYearProper = this.checkParam(
      userBirthDate.getFullYear(),
      1900,
      new Date().getFullYear(),
      "Wrong user birth day year!"
    );

    if (!(isWeightProper && isBirthDayYearProper)) {
      event.preventDefault();
      return;
    }
    const userGender = event.target.gender.value;
    const userUpdatedParams = {
      userNickname,
      userWeight,
      userBirthDate,
      userGender
    };
    this.submitNewData(userUpdatedParams);
  };

  checkParam = (param, min, max, errorMessage) => {
    if (param.length > 0 && (param < min || param > max)) {
      this.setState({ warning: errorMessage });
      return false;
    }
    return true;
  };

  submitNewData = userUpdatedParams => {
    const {
      userNickname,
      userWeight,
      userBirthDate,
      userGender
    } = userUpdatedParams;
    const user = this.props.user;
    const originalUserBirthDate = new Date(this.props.user.birthDate);
    const data = JSON.parse(JSON.stringify(user));

    if (
      userNickname.length > 0 &&
      user.nickname.localeCompare(userNickname) !== 0
    ) {
      data.nickname = userNickname;
    }
    if (user.weight !== userWeight && userWeight > 0) {
      data.weight = userWeight;
    }
    if (this.compareBirthDates(originalUserBirthDate, userBirthDate)) {
      data.birthDate = userBirthDate;
    }
    if (this.props.user.gender.sex !== userGender) {
      let currentGender = null;
      this.props.genders.forEach(gender => {
        if (gender.sex === userGender) {
          currentGender = gender;
        }
      });
      if (currentGender !== null) {
        data.gender = currentGender;
      }
    }
    this.props.makeUpdate(data);
  };

  compareBirthDates = (userBirthDate, updatedBirthDate) => {
    if (updatedBirthDate === null) {
      return;
    }
    const previousBirthDate =
      userBirthDate.getFullYear().toString() +
      userBirthDate.getMonth().toString() +
      userBirthDate.getDate().toString();
    const currentBirthDate =
      updatedBirthDate.getFullYear().toString() +
      updatedBirthDate.getMonth().toString() +
      updatedBirthDate.getDate().toString();
    return previousBirthDate.localeCompare(currentBirthDate) !== 0;
  };

  checkNumber = event => {
    !isNaN(event.target.value) && event.target.value.length > 0
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
    event.preventDefault();
  };

  checkGenderChange = event => {
    this.props.user.gender.sex !== event.target.gender
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
  };

  checkIfEmpty = event => {
    event.target.value.length > 0
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
    event.preventDefault();
  };

  enableSave = event => {
    this.setState({ submitDisabled: false });
  };

  render() {
    const { genders, user } = this.props;
    const { submitDisabled, warning } = this.state;
    const date = new Date(user.birthDate);
    const dateCopy = new Date(date.getTime());
    const weight = "" + user.weight;

    return (
      <form onSubmit={this.handleSubmit} key={user.login}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={9}>
            <Nickname
              nickname={user.nickname}
              checkIfEmpty={this.checkIfEmpty}
            />
          </Grid>
          <br />
          <Grid item xs={9}>
            <Weight weight={weight} checkNumber={this.checkNumber} />
          </Grid>
          <br />
          <Grid item xs={12}>
            <BirthDate dateCopy={dateCopy} enableSave={this.enableSave} />
          </Grid>
          <br />
          <Grid item xs={12}>
            <Gender
              genders={genders}
              userSex={user.gender.sex}
              checkGenderChange={this.checkGenderChange}
            />
          </Grid>
          <Grid item xs={12}>
            <span>{warning}</span>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              name="submit"
              disabled={submitDisabled}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default ProfileForm;
