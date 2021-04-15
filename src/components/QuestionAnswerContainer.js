import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import Options from './Options';
import NextButton from './NextButton';
import QuestionDetails from './QuestionDetails';
import Notification from './Notification';

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #d9d8d4;
  width: 90%;
  margin-left: 1rem;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 80%;
    margin-left: 5rem;
    margin-top: 10rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 50%;
    margin-left: 20rem;
  }
`;

const QuestionAnswerContainer = () => {
  const { displayQuestions, setNotification, setFinished } = useContext(Context);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setIsCorrect(false);
    setNotification('');
    if (nextQuestion < displayQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  return (
    <CardContainer>
      <QuestionDetails currentQuestion={currentQuestion} />
      <Options currentQuestion={currentQuestion} setIsCorrect={setIsCorrect} />
      <Notification />
      {isCorrect ? <NextButton handleNextQuestion={handleNextQuestion} /> : ''}
    </CardContainer>
  );
};

export default QuestionAnswerContainer;
