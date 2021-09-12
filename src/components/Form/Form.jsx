import React, { useState } from "react";
import FormStyle from "./FormStyle";
import Button from "../UI/Button/Button";

import ModalStyle from "../Modal/ModalStyle";
import Cards from "../UI/Cards/Cards";
// import Modal from "react-modal";

const Form = ({ inputsHere }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const usernameHandler = (e) => {
    setUsernameInput(e.target.value.trim());
    // console.log(typeof e.target.value)
  };

  const ageHandler = (e) => {
    setAgeInput(e.target.value.trim());
    // console.log(typeof e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      username: usernameInput,
      age: ageInput,
      id: Math.random(),
    };
    userDetails.username.length > 0 && userDetails.age.length > 0
      ? inputsHere(userDetails)
      : setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div className="input">
        <label>Username</label>
        <input type="text" onChange={usernameHandler} />
      </div>
      <div className="input">
        <label>Age/Years</label>
        <input type="number" onChange={ageHandler} />
      </div>
      <Button>Add User</Button>

      <ModalStyle>
        {modalOpen ? (
          <div className="modal">
            <Cards>
              <h5>Please put in a valid username or Age</h5>
              <Button onClick={closeModalHandler}>Close</Button>
            </Cards>
          </div>
        ) : null}
      </ModalStyle>
    </FormStyle>
  );
};

export default Form;
