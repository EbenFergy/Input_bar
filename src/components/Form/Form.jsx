import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FormStyle, FormContainer } from "./FormStyle";
import Button from "../UI/Button/Button";
import { ModalStyle, DarkOpacity } from "../Modal/ModalStyle";
import { Cards, CardsHeader } from "../UI/Cards/Cards";
// import Modal from "react-modal";

const BackDrop = ({ closeModal, modalOpen }) => {
  return modalOpen ? <DarkOpacity onClick={closeModal} /> : null;
};

const Modal = ({ closeModal, modalOpen }) => {
  return modalOpen ? (
    <ModalStyle>
      <Cards className="background">
        <h5>Please put in a valid username or Age</h5>
        <Button onClick={closeModal}>Close</Button>
      </Cards>
    </ModalStyle>
  ) : null;
};



// const BackDrop = ({ closeModal }) => {
//   <DarkOpacity onClick={closeModal} />
// };

// const Modal = ({ closeModal }) => {
//   <ModalStyle>
//     <Cards className="background">
//       <h5>Please put in a valid username or Age</h5>
//       <Button onClick={closeModal}>Close</Button>
//     </Cards>
//   </ModalStyle>
// };

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

    setUsernameInput("");
    setAgeInput("");
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <FormContainer>
      <FormStyle onSubmit={submitHandler}>
        <div className="input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={usernameInput}
            type="text"
            onChange={usernameHandler}
          />
        </div>
        <div className="input">
          <label htmlFor="age">Age/Years</label>
          <input
            id="age"
            min="1"
            step="1"
            value={ageInput}
            type="number"
            onChange={ageHandler}
          />
        </div>
        <Button>Add User</Button>
      </FormStyle>

      {ReactDOM.createPortal(
        <Modal modalOpen={modalOpen} closeModal={closeModalHandler} />,
        document.getElementById("backDrop")
      )}
      {ReactDOM.createPortal(
        <BackDrop modalOpen={modalOpen} closeModal={closeModalHandler} />,
        document.getElementById("backDrop")
      )}

      {/* {modalOpen === true ? (
        <>
          {ReactDOM.createPortal(
            <BackDrop closeModal={closeModalHandler} />,
            document.getElementById("backDrop")
          )}
          {ReactDOM.createPortal(
            <Modal closeModal={closeModalHandler} />,
            document.getElementById("modal")
          )}
        </>
      ) : null} */}
    </FormContainer>
  );
};

export default Form;
