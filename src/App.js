import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import AppStyle from "./AppStyle";
import { Cards } from "./components/UI/Cards/Cards";
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

  const filtGottenInputs = (credOfChange) => {
    const filtration = gottenInputs.filter((inps) => inps.id !== credOfChange);
    setGottenInputs(filtration);
  };

  return (
    <>
      <AppStyle />
      <Cards>
        <Form inputsHere={getInputs} />
      </Cards>
      {gottenInputs.length > 0 && (
        <Cards style={{ marginTop: "1rem" }}>
          <Display userCred={gottenInputs} filtFunc={filtGottenInputs} />
        </Cards>
      )}
    </>
  );
};

export default App;
