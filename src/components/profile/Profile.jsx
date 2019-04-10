import React, { Component } from "react";
import Avatar from "./Avatar";
import ProfileForm from "./ProfileForm";
import Button from "@material-ui/core/Button";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      user: { gender: {} },
      login: "Mihu"
    };
    this.makeUpdate = this.makeUpdate.bind(this);
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

  makeUpdate = data => {
    return fetch("http://localhost:8080/v1/users/" + this.state.login, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  };

  render() {
    const { genders, user, login } = this.state;

    return (
      <div>
        <Avatar />
        <h4>{login}</h4>
        <ProfileForm
          user={user}
          genders={genders}
          makeUpdate={this.makeUpdate}
        />
        <br />
        <Button variant="contained" type="submit" name="logout">
          LOGOUT
        </Button>
      </div>
    );
  }
}

export default Profile;
