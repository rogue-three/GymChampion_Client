import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";

class Gender extends Component {
  render() {
    const { genders, userSex, checkGenderChange } = this.props;
    return (
      <FormLabel>
        <span>GENDER</span>
        <br />
        {genders.map(gender => (
          <div key={gender.sex}>
            <Radio
              value={gender.sex}
              name="gender"
              defaultChecked={userSex === gender.sex}
              onClick={checkGenderChange}
            />
            <span>{gender.sex}&emsp;</span>
          </div>
        ))}
        <br />
      </FormLabel>
    );
  }
}

export default Gender;
