import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import GlobalStyle from "./AppStyle";
import Cards from "./components/UI/Cards/Cards";
import Display from "./components/Display/Display";

const App = () => {
  const [gottenInputs, setGottenInputs] = useState([]);

  const getInputs = (formInputs) => {
    setGottenInputs((prevGottenInputs) => {
      return [formInputs, ...prevGottenInputs];
    });
  };

  return (
    <>
      <GlobalStyle />
      <Cards>
        <Form inputsHere={getInputs} />
      </Cards>
      {gottenInputs.length > 0 && (
        <Cards>
          <Display userCred={gottenInputs}/>
        </Cards>
      )}
    </>
  );
};

export default App;
