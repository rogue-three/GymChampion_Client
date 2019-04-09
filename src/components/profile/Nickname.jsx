import React, { Component } from "react";

class Nickname extends Component {
  render() {
    return (
      <label>
        <span />
        <span>NICKNAME</span>
        <br />
        <span />
        <input
          type="text"
          name="nickname"
          placeholder={this.props.nickname}
          onKeyUp={event => this.props.checkIfEmpty(event)}
        />
      </label>
    );
  }
}

export default Nickname;
