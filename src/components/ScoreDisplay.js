import { Context } from '../context';
import React, { useContext } from 'react';
import styled from 'styled-components';

const ScoreMessage = styled.p`
  text-align: center;
  font-size: 55px;
  color: #800000;
  margin-top: 8rem;
`;

const ScoreDisplay = () => {
  const { displayQuestions, score } = useContext(Context);
  return (
    <div>
      <p>Finished!</p>
      <ScoreMessage>
        You scored {score} out of {displayQuestions.length}
      </ScoreMessage>
    </div>
  );
};

export default ScoreDisplay;
