import React, { useState, useEffect } from "react";
import DisplayStyle from "./DisplayStyle";

const Display = ({ userCred, filtFunc }) => {
  // const [allDisplays, setAllDisplays] = useState(true);
  const [filtUserCred, setFiltUserCred] = useState();

  // console.log(typeof userDetails);
  const removeDisplayHandler = (item) => {
    filtFunc(item);
  };

  // setFiltUserCred(filteredResults);

  // setUserDetails(filt);

  return (
    <DisplayStyle>
      {userCred.map((cred) => (
        <div
          key={cred.id}
          className="output"
          onClick={() => removeDisplayHandler(cred.id)}
        >
          {cred.username} {cred.age}
        </div>
      ))}
    </DisplayStyle>
  );
};

export default Display;
