import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";

class BirthDate extends Component {
  render() {
    const { dateCopy, checkNumber } = this.props;
    return (
      <FormLabel>
        <span />
        <span>BIRTH DATE</span>
        <br />
        <span />
        <input
          type="text"
          name="day"
          placeholder={dateCopy.getDate().toString()}
          onKeyUp={checkNumber}
        />
        <span />
        <input
          type="text"
          name="month"
          placeholder={(dateCopy.getMonth() + 1).toString()}
          onKeyUp={checkNumber}
        />
        <span />
        <input
          type="text"
          name="year"
          placeholder={dateCopy.getFullYear().toString()}
          onKeyUp={checkNumber}
        />
      </FormLabel>
    );
  }
}

export default BirthDate;
