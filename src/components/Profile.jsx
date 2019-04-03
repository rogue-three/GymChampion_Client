import React, { Component } from "react";
import avatar from "./../img/avatar.svg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      user: { gender: {} },
      login: "Mihu",
      submitDisabled: true
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
            user: result
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

  getBirthDate(date) {
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  }

  handleSubmit(event) {
    if (isNaN(event.target.weight.value)) {
      console.log("nie wysle!");
    }
    event.preventDefault();
  }

  checkForm() {
    return this.state.submitDisabled;
  }

  checkWeight = event => {
    !isNaN(event.target.value) && event.target.value.length > 0
      ? this.setState({ submitDisabled: false })
      : this.setState({ submitDisabled: true });
    event.preventDefault();
  };

  render() {
    const { genders, user, login } = this.state;
    const date = new Date(user.birthDate);
    // const birthDate = this.getBirthDate(date);

    return (
      <div>
        <img src={avatar} width="10%" color="white" alt="avatar" />
        <h4 className="white-text">{login}</h4>
        <form onSubmit={this.handleSubmit}>
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
              onKeyUp={this.checkWeight}
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
              placeholder={date.getDate()}
            />
            <span className="col s1" />
            <input
              className="col s2 input-field white center-align"
              type="text"
              name="month"
              placeholder={date.getMonth()}
            />
            <span className="col s1" />
            <input
              className="col s2 input-field white center-align"
              type="text"
              name="year"
              placeholder={date.getFullYear()}
            />
          </label>
          <label className="row">
            <span className="col s2" />
            <span className="col s8 white-text teal lighten-1">GENDER</span>
            <br />
            {genders.map(gender => (
              <label key={gender.sex}>
                <input
                  name="gender"
                  type="radio"
                  checked={user.gender.sex === gender.sex ? true : false}
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

          <br />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="submit"
            disabled={this.checkForm()}
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
