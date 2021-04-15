import React, { useContext } from 'react';
import { Context } from '../context';
import ScoreDisplay from './ScoreDisplay';
import QuestionAnswerContainer from './QuestionAnswerContainer';

const QuestionContainer = () => {
  const { finished } = useContext(Context);

  return <div>{finished ? <ScoreDisplay /> : <QuestionAnswerContainer />}</div>;
};

export default QuestionContainer;
