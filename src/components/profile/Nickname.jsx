import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";

class Nickname extends Component {
  render() {
    const { nickname, checkIfEmpty } = this.props;
    return (
      <FormLabel>
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
      </FormLabel>
    );
  }
}

export default Nickname;
