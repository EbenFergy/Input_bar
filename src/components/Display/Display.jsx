import React from "react";
import DisplayStyle from "./DisplayStyle";


const Display = ({ userCred }) => {
  
  return (
    <DisplayStyle>
      {userCred.map((cred) => (
        <div key={cred.id} className="output">
          {cred.username} {cred.age}
        </div>
      ))}

      
    </DisplayStyle>
  );
};

export default Display;
