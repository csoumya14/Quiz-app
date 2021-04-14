import React, { useContext } from 'react';
import { Context } from '../context';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  .question-number {
    text-align: center;
    font-size: 18px;
    color: #c70039;
  }
  .question {
    margin-top: 0rem;
    text-align: center;
    color: #8000ff;
  }
`;

const QuestionDetails = ({ currentQuestion }) => {
  const { displayQuestions } = useContext(Context);
  return (
    <QuestionContainer>
      <p className="question-number">
        {' '}
        Question <span>{displayQuestions[currentQuestion].id}</span>/10
      </p>
      <h3 className="question">{displayQuestions[currentQuestion].question}</h3>
    </QuestionContainer>
  );
};

export default QuestionDetails;
