import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";

class BirthDate extends Component {
  getStringDate(date) {
    const year = date.getFullYear().toString();
    let tempMonth = (date.getMonth() + 1).toString();
    const month = tempMonth.length === 1 ? "0" + tempMonth : tempMonth;
    let tempDay = date.getDate().toString();
    const day = tempDay.length === 1 ? "0" + tempDay : tempDay;
    return year + "-" + month + "-" + day;
  }

  render() {
    const { dateCopy, enableSave } = this.props;
    const stringDate = this.getStringDate(dateCopy);

    return (
      <FormLabel>
        <span>BIRTH DATE</span>
        <br />
        <Input
          id="date"
          type="date"
          defaultValue={stringDate}
          onChange={enableSave}
        />
      </FormLabel>
    );
  }
}

export default BirthDate;
