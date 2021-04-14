import React, { useContext } from 'react';
import { Context } from '../context';
import ScoreDisplay from './ScoreDisplay';
import QuestionAnswerContainer from './QuestionAnswerContainer';

const QuestionContainer = () => {
  const { showScore } = useContext(Context);

  return <div>{showScore ? <ScoreDisplay /> : <QuestionAnswerContainer />}</div>;
};

export default QuestionContainer;
