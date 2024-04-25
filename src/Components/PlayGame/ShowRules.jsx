import { ShowRule } from "./Main";


const ShowRules = () => {
    return (
        <ShowRule>
        <h1>How to play dice game</h1>

        <div className="Rules">
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      </ShowRule>
    );
};

export default ShowRules;