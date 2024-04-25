import React from 'react';
import { Container ,NavbarContainer} from './Main';
const Navbar = ({buttonArr,isselected,setselected,score}) => {
    return (
        <NavbarContainer>
        <div className="total">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="buttons">
          <div className="button">
            {buttonArr?.map((num) =>
              isselected === num ? (
                <button
                  onClick={() => setselected(num)}
                  style={{ background: "black", color: "white" }}
                  key={num}
                >
                  {num}
                </button>
              ) : (
                <button onClick={() => setselected(num)} key={num}>
                  {num}
                </button>
              )
            )}
          </div>
          <div className="buttons-p">
            <p>select Number</p>
          </div>
        </div>
      </NavbarContainer>
    );
};

export default Navbar;