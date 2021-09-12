import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import AppStyle from "./AppStyle";
import Cards from "./components/UI/Cards/Cards";
import Display from "./components/Display/Display";
// import ModalComponent from "./components/Modal/Modal";

// import Button from "./components/UI/Button/Button";
// import ModalStyle from "./components/Modal/ModalStyle";
// import Modal from "react-modal";

const App = () => {
  const [gottenInputs, setGottenInputs] = useState([]);

  const getInputs = (formInputs) => {
    setGottenInputs((prevGottenInputs) => {
      return [formInputs, ...prevGottenInputs];
    });
  };

  //---------------------------Functions for Modal-------------------------------------------
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModalHandler = () => {
  //   setModalOpen(true);
  // };

  // const closeModalHandler = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <AppStyle />
      <Cards>
        <Form inputsHere={getInputs} />
      </Cards>
      {gottenInputs.length > 0 &&
        <Cards>
          <Display userCred={gottenInputs} />
        </Cards>
      }



      {/* <ModalStyle>
        {modalOpen ? (
          <div className="modal">
            <Cards>
              <div>asdasdf</div>
              <div>asdasdf</div>
              <div>asdasdf</div>
              <div>asdasdf</div>
              <Button onClick={closeModalHandler}>Close</Button>
            </Cards>
          </div>
        ) : null}
      </ModalStyle> */}
    </>
  );
};

export default App;
