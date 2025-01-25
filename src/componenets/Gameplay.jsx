import React from "react";
import styled from "styled-components";
import Totalscore from "./Totalscore";
import Selectnumber from "./Selectnumber";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./rules";

const Gameplay = () => {
  const [Error, setError] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [roll, setRoll] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const GenrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const rolldice = () => {
    if (!selectedNumber) {
      setError("You Have Not Selected A Number");
      return;
    }
    setError("");
    const randomNumber = GenrateRandomNumber(1, 7);
    setRoll((prev) => randomNumber);
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const reset = () => {
    setScore(0);
  };

  return (
    <MainSelection>
      <div className="top_section">
        <Totalscore score={score} />
        <Selectnumber
          Error={Error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolldice roll={roll} rolldice={rolldice} />
      <div className="btns">
        <OutlineButton onClick={reset}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainSelection>
  );
};

const MainSelection = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
export default Gameplay;
