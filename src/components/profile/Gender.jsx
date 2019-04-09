import React, { Component } from "react";

class Gender extends Component {
  render() {
    const { genders, userSex, checkGenderChange } = this.props;
    return (
      <label>
        <span>GENDER</span>
        <br />
        {genders.map(gender => (
          <label key={gender.sex}>
            <input
              value={gender.sex}
              name="gender"
              type="radio"
              defaultChecked={userSex === gender.sex}
              onClick={checkGenderChange}
            />
            <span>{gender.sex}&emsp;</span>
          </label>
        ))}
        <br />
      </label>
    );
  }
}

export default Gender;
