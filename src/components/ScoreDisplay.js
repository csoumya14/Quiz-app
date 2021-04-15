import styled from 'styled-components';

const ScoreMessage = styled.p`
  text-align: center;
  font-size: 55px;
  color: #800000;
  margin-top: 8rem;
`;
const FinishMessage = styled(ScoreMessage)``;

const ScoreDisplay = () => {
  return (
    <div>
      <FinishMessage>Finished!</FinishMessage>
    </div>
  );
};

export default ScoreDisplay;
