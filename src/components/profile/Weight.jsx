import React, { Component } from "react";

class Weight extends Component {
  render() {
    return (
      <label>
        <span />
        <span>BODY WEIGHT</span>
        <br />
        <span />
        <input
          type="text"
          name="weight"
          placeholder={this.props.weight}
          onKeyUp={this.props.checkNumber}
        />
      </label>
    );
  }
}

export default Weight;
