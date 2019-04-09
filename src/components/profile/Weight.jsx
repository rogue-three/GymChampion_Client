import React, { Component } from "react";

class Weight extends Component {
  render() {
    const { weight, checkNumber } = this.props;
    return (
      <label>
        <span />
        <span>BODY WEIGHT</span>
        <br />
        <span />
        <input
          type="text"
          name="weight"
          placeholder={weight}
          onKeyUp={checkNumber}
        />
      </label>
    );
  }
}

export default Weight;
