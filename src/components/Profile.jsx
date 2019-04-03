import React, { Component } from "react";
import avatar from "./../img/avatar.svg";

class Profile extends Component {
  state = {
    genders: []
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
  }
  render() {
    return (
      <div>
        <img src={avatar} width="10%" color="white" alt="avatar" />
        <form>
          <label>
            <span className="white-text">BODY WEIGHT</span>
            <input className="input-field white" type="text" name="name" />
          </label>
          <label>
            <span className="white-text">AGE</span>
            <input className="input-field white" type="text" name="name" />
          </label>
          <label>
            <span className="white-text">GENDER</span>
            <br />
            <br />
            {this.state.genders.map(gender => (
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
      </div>
    );
  }
}

export default Profile;
