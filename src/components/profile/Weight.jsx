import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";

class Weight extends Component {
  render() {
    const { weight, checkNumber } = this.props;
    return (
      <FormLabel>
        <span />
        <span>BODY WEIGHT</span>
        <br />
        <span />
        <Input
          type="text"
          name="weight"
          placeholder={weight}
          onKeyUp={checkNumber}
        />
      </FormLabel>
    );
  }
}

export default Weight;
