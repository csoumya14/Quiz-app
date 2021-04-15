import React, { useContext } from 'react';
import { Context } from '../context';
import styled from 'styled-components';
import OptionButtons from './OptionButtons';

const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Options = ({ currentQuestion, setIsCorrect }) => {
  const { displayQuestions, setNotification } = useContext(Context);

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  };

  const handleOptionClick = choice => {
    const chosenValue = getKeyByValue(displayQuestions[currentQuestion].choices, choice);
    if (displayQuestions[currentQuestion].answer === chosenValue) {
      setIsCorrect(true);
      setNotification('Well Done! Correct!');
    } else {
      setNotification('Wrong answer! Try Again');
    }
  };

  return (
    <OptionSection>
      {Object.values(displayQuestions[currentQuestion].choices).map((choice, i) => (
        <OptionButtons handleOptionClick={handleOptionClick} choice={choice} key={i} />
      ))}
    </OptionSection>
  );
};

export default Options;
