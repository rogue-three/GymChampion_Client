import React, { Component } from "react";
import avatar from "./../img/avatar.svg";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={avatar} width="10%" color="white" alt="avatar" />
        <form>
          <label>
            <span className="white-text">Body weight:</span>
            <input className="input-field white" type="text" name="name" />
          </label>
          <label>
            <span className="white-text">Age:</span>
            <input className="input-field white" type="text" name="name" />
          </label>
          <label>
            <span className="white-text">Gender:</span>
            <br />
            <br />
            <label>
              <input name="gender" type="radio" checked />
              <span className="white-text">female</span>
            </label>
            <br />
            <label>
              <input name="gender" type="radio" />
              <span className="white-text">male</span>
            </label>
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
