import React, { Component } from "react";

class Nickname extends Component {
  render() {
    const { nickname, checkIfEmpty } = this.props;
    return (
      <label>
        <span />
        <span>NICKNAME</span>
        <br />
        <span />
        <input
          type="text"
          name="nickname"
          placeholder={nickname}
          onKeyUp={checkIfEmpty}
        />
      </label>
    );
  }
}

export default Nickname;
