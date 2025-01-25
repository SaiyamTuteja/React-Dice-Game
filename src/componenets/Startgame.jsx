import styled from "styled-components";
import { Button } from "../Styled/Button";

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  position: fixed;
  .para {
    font-size: 24px;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    text-align: center;
    display: flex;
    margin-top: 150px;
  }
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Startgame = ({ toggleGamePlay }) => {
  return (
    <div>
      <Container>
        <div>
          <img src="\src\assets\images\dices.png" alt="dices image" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggleGamePlay}>Start Game</Button>
          <p className="para">Made by saiyam with ❤️</p>
        </div>
      </Container>
    </div>
  );
};

export default Startgame;
