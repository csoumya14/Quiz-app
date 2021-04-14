import styled from 'styled-components';

const Button = styled.button`
  width: 5rem;
  height: 2rem;
  margin-bottom: 3rem;
  background-color: blue;
  color: white;
  text-transform: uppercase;
`;

const NextButton = ({ handleNextQuestion }) => {
  return <Button onClick={() => handleNextQuestion()}>Next</Button>;
};

export default NextButton;
