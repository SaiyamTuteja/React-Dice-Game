import styled from "styled-components";

const Rolldice = ({ roll, rolldice }) => {
  const handleClick = () => {
    rolldice();
  };

  return (
    <Container>
      <div className="rolldice" onClick={handleClick}>
        <img
          src={`src/assets/images/dices/dice_${roll}.png`}
          alt="Dice Image"
        />
        <p>Click on Dice to Roll</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .rolldice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 48px;
    align-items: center;
    cursor: pointer;
  }
  p {
    font-size: 22px;
  }
`;

export default Rolldice;
