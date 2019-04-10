import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";

class BirthDate extends Component {
  render() {
    const { dateCopy, checkNumber } = this.props;
    return (
      <FormLabel>
        <span>BIRTH DATE</span>
        <br />
        <Input
          type="text"
          name="day"
          placeholder={dateCopy.getDate().toString()}
          onKeyUp={checkNumber}
        />
        <Input
          type="text"
          name="month"
          placeholder={(dateCopy.getMonth() + 1).toString()}
          onKeyUp={checkNumber}
        />
        <Input
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
