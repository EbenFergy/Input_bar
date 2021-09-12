import React from "react";
import DisplayStyle from "./DisplayStyle";
import Cards from "../UI/Cards/Cards";

const Display = ({ userCred }) => {
  return (
    <DisplayStyle>
      {userCred.map((cred) => (
        <div className="output">
          {cred.username} {cred.age}
        </div>
      ))}
    </DisplayStyle>
  );
};

export default Display;
