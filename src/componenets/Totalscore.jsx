import styled from "styled-components";

const Totalscore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  max-width: 200px;
  align-items: center;

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-weight: 500; /* Corrected from 500px to 500 */
    font-size: 24px;
  }
`;

export default Totalscore;
