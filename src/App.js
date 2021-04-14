import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/ThemeVariable';
import QuestionScoreContainer from './components/QuestionAnswerScoreContainer';
import Provider from './context';
import GlobalStyle from './themes/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <Header />
        <QuestionScoreContainer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
