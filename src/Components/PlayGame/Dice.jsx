import { useEffect, useState } from "react";
import { DiceContainer } from "./Main";

const Dice = ({DiceRoll,handlechangeImage,handleReset,setisShowrule, isShowRule}) => {
   
    
    return (
        <DiceContainer>
        <div className="DiceImage">
          <img src={DiceRoll===0 ?  `/Dices/dice_1.png`   :  `/Dices/dice_${DiceRoll}.png`} alt="dice1" onClick={()=>handlechangeImage(1)} />
           <p>Click on Dice to roll</p>
        </div>

        <div className="ResetButtons">
            <button className="button1" onClick={()=>handleReset()}>Reset Score</button>
            <button className="button2" value={isShowRule} onClick={()=>setisShowrule(isShowRule===false ? true :false)}>Show Rules</button>
        </div>

    </DiceContainer>
    );
};

export default Dice;