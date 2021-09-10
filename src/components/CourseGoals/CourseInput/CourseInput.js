import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [classChange, setClassChange] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    event.target.value.trim().length > 0 && setClassChange(true);
  };

  // let noValue = '';
  const formSubmitHandler = (event) => {
    event.preventDefault();
    enteredValue.trim().length === 0 && setClassChange(false);
    enteredValue.trim().length > 0 && props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          className={classChange ? "" : "noInput"}
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
