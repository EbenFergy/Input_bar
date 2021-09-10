import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  * {
    outline: none;
  }

  .form-control {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color:${props=>props.noInputLabel ? '':'red'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & .noInput {
    background-color: #f8aaaa;
  }
`;

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
      <FormControl noInputLabel = {classChange}>
        <label>Course Goal</label>
        <input
          className={classChange ? "" : "noInput"}
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
