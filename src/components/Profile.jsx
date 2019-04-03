import React, { Component } from "react";
import avatar from "./../img/avatar.svg";

class Profile extends Component {
  state = {
    genders: [],
    user: null
  };

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
    fetch("http://localhost:8080/v1/users/Mihu")
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
  render() {
    const { genders, user } = this.state;
    return (
      <div>
        <img src={avatar} width="10%" color="white" alt="avatar" />
        <form>
          <label>
            <span className="white-text">BODY WEIGHT</span>
            <input
              className="input-field white"
              type="text"
              name="name"
              placeholder={user}
            />
          </label>
          <label>
            <span className="white-text">AGE</span>
            <input
              className="input-field white"
              type="text"
              name="name"
              placeholder={user}
            />
          </label>
          <label>
            <span className="white-text">GENDER</span>
            <br />
            <br />
            {genders.map(gender => (
              // <li key={gender.sex}>{gender.sex}</li>
              <label key={gender.sex}>
                <input name="gender" type="radio" checked />
                <span className="white-text">{gender.sex}</span>
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
          className="btn waves-effect waves-light black"
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
