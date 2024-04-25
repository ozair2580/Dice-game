import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Dice from "./Dice";
import ShowRules from "./ShowRules";
const Main = () => {
  const buttonArr = [1, 2, 3, 4, 5, 6];
  const [isselected, setselected] = useState(-1);
  const [DiceRoll, setDiceRoll] = useState(0);
  const [score, setscore] = useState(0);
  const [warning, setwarning] = useState();
  const [cnt, setcnt] = useState(0);
  const [isShowRule,setisShowrule]=useState(false)
  let min = 1;
  let max = 7;

  const randomNumber = (min, max) => {
    return setDiceRoll(Math.round(Math.random() * (max - min) + min));
  };

  const handlechangeImage = (data) => {
    randomNumber(min, max);
    setcnt(data);
  };
  useEffect(() => {
    if (isselected > 0) setwarning();
  }, [isselected]);

  useEffect(() => {
    if (0 < isselected && 0 < DiceRoll) {
      if (isselected === DiceRoll) setscore(score + DiceRoll);
      else setscore(score - DiceRoll);
      setwarning();
    } else if (isselected < 0 && cnt == 1) {
      setDiceRoll(0);

      return setwarning("You have not selected any number");
    }
    if (cnt == 0) setwarning();
  }, [DiceRoll]);

  const handleReset = () => {
    setscore(0);
  };

  return (
    <Container isShowRule={isShowRule}>
      <h1 className="error">{warning}</h1>
      <Navbar
        buttonArr={buttonArr}
        isselected={isselected}
        setselected={setselected}
        score={score}
      />
      <Dice
        handleReset={handleReset}
        setisShowrule={setisShowrule}
        isShowRule={isShowRule}
        DiceRoll={DiceRoll}
        handlechangeImage={handlechangeImage}
      />

      {
       isShowRule===true && <ShowRules/>

      }
     
    </Container>
  );
};

export default Main;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  width:  1440px;
  height:${(props)=>( props.isShowRule===true ? "1100px":"776px")} ;

  .error {
    font-size: 24px;
    color: red;
    text-align: end;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  height: 151px;
  margin-top: 5px;
  .total {
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 151px;

    h1 {
      font-size: 62px;
      font-family: poppins;
    }
    p {
      font-size: 24px;
      font-family: poppins;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 552px;
    height: 138px;
    gap: 30px;

    .button {
      display: flex;
      gap: 24px;
      width: 100%;
      height: 72px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 72px;
        height: 72px;
        border: 1px solid black;
      }
    }
    .buttons-p {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;

      p {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
`;

export const DiceContainer = styled.div`
  width: 250px;
  height: 449px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  margin-top: 37px;
  gap: 36px;

  .DiceImage {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 301px;

    img {
      width: 250px;
      height: 250px;
    }

    p {
      text-align: center;
      font-family: poppins;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .ResetButtons {
    width: 220px;
    height: 112px;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 24px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 44px;
      gap: 8px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 5px;
      border: 1px solid black;
      transition: 0.3s ease-in;
    }
    .button1 {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid black;
      
    }
    .button1:hover {
      background-color: #000000;
      color: #ffffff;
      border: 1px solid black;
      transition: 0.3s ease-in;
    }
    .button2 {
      background-color: #000000;
      color: #ffffff;

    }
    .button2:hover {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid black;
      transition: 0.3s ease-in;
    }
  }
`;

export const ShowRule=styled.div`
    
    width: 794px;
    height: 208px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 60px;
    padding: 20px;
    gap: 20px;
    background-color: #FBF1F1;

    h1{
        font-family: poppins;
        font-weight: bold;
        font-size: 24px;
    }
    .Rules{
        width: 754px;
        height: 108px;
        display: flex;
        flex-direction: column;
        gap: 4px;

        p{
            font-size: 16px;
            color: black;
        }
    }
`