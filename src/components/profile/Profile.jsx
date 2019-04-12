import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      user: { gender: {} },
      login: this.props.activeUser
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
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <br />
        <br />
        <Typography color="primary" variant="h4">
          {login}
        </Typography>
        <br />
        <ProfileForm
          user={user}
          genders={genders}
          makeUpdate={this.makeUpdate}
        />
        <br />
        <Button
          onClick={this.logout}
          variant="contained"
          type="submit"
          name="logout"
        >
          LOGOUT
        </Button>
        <br />
      </Grid>
    );
  }
}

export default Profile;
