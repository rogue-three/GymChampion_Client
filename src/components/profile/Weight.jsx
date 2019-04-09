import React, { Component } from "react";

class Weight extends Component {
  render() {
    return (
      <label className="row">
        <span className="col s2" />
        <span className="col s8 white-text teal lighten-1">BODY WEIGHT</span>
        <br />
        <span className="col s5" />
        <input
          className="col s2 input-field white center-align"
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
