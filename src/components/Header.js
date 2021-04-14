import styled from 'styled-components';

const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: #400080;
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    text-align: left;
    margin-left: 5rem;
  }
`;

const Header = () => {
  return <Heading>Chingu Trivia</Heading>;
};

export default Header;
