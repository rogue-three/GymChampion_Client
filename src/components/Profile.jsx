import React, { Component } from "react";
import avatar from "./../img/avatar.svg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      user: { gender: {} },
      login: "Mihu",
      submitDisabled: true,
      warning: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/v1/users/gender")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            genders: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    fetch("http://localhost:8080/v1/users/" + this.state.login)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            user: result,
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
  handleSubmit = event => {
    const userNickname = event.target.nickname.value;
    const userWeight = event.target.weight.value;
    const userBirthDateDay = event.target.day.value;
    const userBirthDateMonth = event.target.month.value - 1;
    const userBirthDateYear = event.target.year.value;
    let isWeightProper;
    let isBirthDayDayProper;
    let isBirthDayMonthProper;
    let isBirthDayYearProper;

    isWeightProper = this.checkParam(userWeight, 30, 200, "Wrong user weight!");
    isBirthDayDayProper = this.checkParam(userBirthDateDay, 1, 31, "Wrong user birthday day!");
    isBirthDayMonthProper = this.checkParam(userBirthDateMonth, 0, 11, "Wrong user birth day month!");
    isBirthDayYearProper = this.checkParam(userBirthDateYear, 1900, new Date().getFullYear(), "Wrong user birth day year!");

    if (!(isWeightProper && isBirthDayDayProper && isBirthDayMonthProper && isBirthDayYearProper)) {
      event.preventDefault();
      return;
    }
    const userGender = event.target.gender.value;
    const userUpdatedParams = {userNickname, userWeight, userBirthDateDay, userBirthDateMonth, userBirthDateYear, userGender};
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
    const {userNickname, userWeight, userBirthDateDay, userBirthDateMonth, userBirthDateYear, userGender} = userUpdatedParams;
    const user = this.state.user;
    const userBirthDate = new Date(user.birthDate);
    const updatedBirthDate = this.updateBirthDate(userBirthDate, userBirthDateYear, userBirthDateMonth, userBirthDateDay);
    const data = JSON.parse(JSON.stringify(user));

    if (userNickname.length > 0 && user.nickname.localeCompare(userNickname) !== 0) {
      data.nickname = userNickname;
    }
    if (user.weight !== userWeight && userWeight > 0) {
      data.weight = userWeight;
    }
    if (this.compareBirthDates(userBirthDate, updatedBirthDate)) {
      data.birthDate = updatedBirthDate;
    }
    if (user.gender.sex !== userGender) {
      let currentGender = null;
      this.state.genders.forEach(gender => {
        if (gender.sex === userGender) {
          currentGender = gender;
        }
      });
      if (currentGender !== null) {
        data.gender = currentGender;
      }
    }
    this.makeUpdate(data).then(response => console.log(response))
        .catch(error => console.error(error));
  };

  makeUpdate = (data) => {
    return fetch('http://localhost:8080/v1/users/' + this.state.login, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      return res;
    }).catch(err => err);
  };

  updateBirthDate = (userBirthDate, updatedBirthDateYear, updatedBirthDateMonth, updatedBirthDateDay) => {
    let userBirthDateDay;
    let userBirthDateMonth;
    let userBirthDateYear;

    if (updatedBirthDateDay > 0) {
      userBirthDateDay = updatedBirthDateDay;
    } else {
      userBirthDateDay = userBirthDate.getDate();
    }

    if (updatedBirthDateMonth > 0) {
      userBirthDateMonth = updatedBirthDateMonth;
    } else {
      userBirthDateMonth = userBirthDate.getMonth();
    }

    if (updatedBirthDateYear > 0) {
      userBirthDateYear = updatedBirthDateYear;
    } else {
      userBirthDateYear = userBirthDate.getFullYear();
    }
    return new Date(userBirthDateYear, userBirthDateMonth, userBirthDateDay);
  };

  compareBirthDates = (userBirthDate, updatedBirthDate) => {
    if (updatedBirthDate === null) { return }
    const previousBirthDate = userBirthDate.getFullYear().toString() +
        userBirthDate.getMonth().toString() + userBirthDate.getDate().toString();
    const currentBirthDate = updatedBirthDate.getFullYear().toString() +
        updatedBirthDate.getMonth().toString() + updatedBirthDate.getDate().toString();
    return previousBirthDate.localeCompare(currentBirthDate) !== 0;
  };

  checkNumber = event => {
    !isNaN(event.target.value) && event.target.value.length > 0
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
    event.preventDefault();
  };

  checkIfEmpty = event => {
    event.target.value.length > 0
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
    event.preventDefault();
  };

  checkGenderChange = event => {
    this.state.user.gender.sex !== event.target.gender
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
  };

  render() {
    const { genders, user, login, submitDisabled, warning } = this.state;
    const date = new Date(user.birthDate);
    const dateCopy = new Date(date.getTime());

    return (
      <div>
        <img src={avatar} width="10%" color="white" alt="avatar" />
        <h4 className="white-text">{login}</h4>
        <form onSubmit={this.handleSubmit}>
          <label className="row">
            <span className="col s2" />
            <span className="col s8 white-text teal lighten-1">
              NICKNAME
            </span>
            <br />
            <span className="col s3" />
            <input
              className="col s6 input-field white center-align"
              type="text"
              name="nickname"
              placeholder={user.nickname}
              onKeyUp={this.checkIfEmpty}
            />
          </label>
          <label className="row">
            <span className="col s2" />
            <span className="col s8 white-text teal lighten-1">
              BODY WEIGHT
            </span>
            <br />
            <span className="col s5" />
            <input
                className="col s2 input-field white center-align"
                type="text"
                name="weight"
                placeholder={user.weight}
                onKeyUp={this.checkNumber}
            />
          </label>
          <label className="row">
            <span className="col s2" />
            <span className="col s8 white-text teal lighten-1">BIRTH DATE</span>
            <br />
            <span className="col s2" />
            <input
              className="col s2 input-field white center-align"
              type="text"
              name="day"
              placeholder={dateCopy.getDate().toString()}
              onKeyUp={this.checkNumber}
            />
            <span className="col s1" />
            <input
              className="col s2 input-field white center-align"
              type="text"
              name="month"
              placeholder={(dateCopy.getMonth() +1).toString()}
              onKeyUp={this.checkNumber}
            />
            <span className="col s1" />
            <input
              className="col s2 input-field white center-align"
              type="text"
              name="year"
              placeholder={dateCopy.getFullYear().toString()}
              onKeyUp={this.checkNumber}
            />
          </label>
          <label className="row">
            <span className="col s2" />
            <span className="col s8 white-text teal lighten-1">GENDER</span>
            <br />
            {genders.map(gender => (
              <label key={gender.sex}>
                <input
                  value={gender.sex}
                  name="gender"
                  type="radio"
                  defaultChecked={user.gender.sex === gender.sex}
                  onClick={this.checkGenderChange}
                />
                <span className="white-text">{gender.sex}&emsp;</span>
              </label>
            ))}
            <br />
          </label>
          <label className="row">
            <span className="col s2" />
            <span className="col s8 white-text teal lighten-1">&emsp;</span>
          </label>
          <span className="red-text">{ warning }</span>
          <br />
          <br />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="submit"
            disabled={submitDisabled}
          >
            SAVE
          </button>
        </form>
        <br />
        <button
          className="btn waves-effect waves-light grey"
          type="submit"
          name="logout"
        >
          LOGOUT
        </button>
      </div>
    );
  }
}

export default Profile;
