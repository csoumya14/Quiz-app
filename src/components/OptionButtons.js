import styled from 'styled-components';

const ButtonOptions = styled.button`
  width: 10rem;
  height: 3rem;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 1px solid #d9d8d4;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 15rem;
  }
`;
const OptionButtons = ({ handleOptionClick, choice }) => {
  return (
    <ButtonOptions className="option-buttons" onClick={() => handleOptionClick(choice)}>
      {choice}
    </ButtonOptions>
  );
};

export default OptionButtons;
