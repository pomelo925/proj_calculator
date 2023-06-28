import React from "react";
import Button from "./Button";
import Screen from "./Screen";

import '../../common/PageStyle/electron.css'
import './calculator.css'

const Calculator =()=>{
  return(
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '5vh'}}> Online Calculator</h1>

      <div>
        <Screen />
        <Button />
      </div>
    </div>

  );
}

export default Calculator