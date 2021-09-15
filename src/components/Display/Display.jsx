import React, {useState} from "react";
import DisplayStyle from "./DisplayStyle";

const Display = ({ userCred }) => {
    const [displaysOn, setDisplaysOn] = useState(true);

    const removeDisplayHandler =()=>{
        setDisplaysOn(false);
        }
  return (
    <DisplayStyle>
      {userCred.map((cred) => (

            displaysOn === true && 
           

        <div key={cred.id} className="output" onClick={removeDisplayHandler}>
          {cred.username} {cred.age}
        </div>

        
      ))}
    </DisplayStyle>
  );
};

export default Display;
