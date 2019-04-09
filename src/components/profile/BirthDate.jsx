import React, { Component } from "react";

class BirthDate extends Component {
  render() {
    const { dateCopy, checkNumber } = this.props;
    return (
      <label className="row">
        <span className="col s2" />
        <span className="col s8 white-text teal lighten-1">BIRTH DATE</span>
        <br />
        <span className="col s2" />
        <input
          className="col s2 input-field white center-align"
          type="text"
          name="day"
          placeholder={dateCopy.getDate().toString()}
          onKeyUp={checkNumber}
        />
        <span className="col s1" />
        <input
          className="col s2 input-field white center-align"
          type="text"
          name="month"
          placeholder={(dateCopy.getMonth() + 1).toString()}
          onKeyUp={checkNumber}
        />
        <span className="col s1" />
        <input
          className="col s2 input-field white center-align"
          type="text"
          name="year"
          placeholder={dateCopy.getFullYear().toString()}
          onKeyUp={checkNumber}
        />
      </label>
    );
  }
}

export default BirthDate;
