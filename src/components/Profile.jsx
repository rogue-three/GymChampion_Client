import React, { Component } from "react";
import avatar from "./../img/avatar.svg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      user: { gender: {} },
      login: "Mihu"
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
    console.log("blablabla");
    event.preventDefault();
  }

  render() {
    const { genders, user, login } = this.state;
    const date = new Date(user.birthDate);
    const birthDate = this.getBirthDate(date);

    return (
      <div>
        <img src={avatar} width="10%" color="white" alt="avatar" />
        <h4 className="white-text">{login}</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className="white-text">BODY WEIGHT</span>
            <input
              className="input-field white center-align"
              type="text"
              name="name"
              placeholder={user.weight}
            />
          </label>
          <label>
            <span className="white-text">BIRTH DATE</span>
            <input
              className="input-field white center-align"
              type="text"
              name="name"
              placeholder={birthDate}
            />
          </label>
          <label>
            <span className="white-text">GENDER</span>
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
            <br />
          </label>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            SAVE
          </button>
        </form>
        <br />
        <button
          className="btn waves-effect waves-light grey"
          type="submit"
          name="action"
        >
          LOGOUT
        </button>
      </div>
    );
  }
}

export default Profile;
